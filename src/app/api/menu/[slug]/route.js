import prisma from "@/lib/prisma";

export async function GET(_, { params }) {
    try {
        const parameter = await params;
        const { slug } = parameter;
        const product = await prisma.product.findFirst({
            where: {
                slug,
            },
            include: {
                ProductOptions: {
                    include: {
                        Options: true,
                    },
                },
                Category: {
                    include: {
                        Category: true,
                    },
                },
            },
        });

        return Response.json({ product });
    } catch (e) {
        return Response.json({ message: e.message, e: JSON.stringify(e) });
    }
}

export async function PUT(req, { params }) {
    try {
        const parameter = await params;
        const { slug } = parameter;

        if (!slug) {
            return Response.json(
                { message: "Slug not found" },
                { status: 404, statusText: "Not Found" }
            );
        }

        const formData = await req.formData();
        const body = {};
        let imageUrl = null;

        for (const [key, value] of formData.entries()) {
            if (value instanceof Blob) {
                const buffer = Buffer.from(await value.arrayBuffer());
                const base64Image = buffer.toString("base64");

                const imgurResponse = await fetch(
                    "https://api.imgur.com/3/image",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            image: base64Image,
                            type: "base64",
                        }),
                    }
                );

                const imgurData = await imgurResponse.json();
                if (!imgurData.success)
                    throw new Error("Failed to upload image to Imgur");

                imageUrl = imgurData.data.link;
            } else {
                body[key] = value;
            }
        }

        if (imageUrl) {
            body.imageUrl = imageUrl;
        }

        const product = await prisma.product.update({
            where: { slug: String(slug) },
            data: {
                ...body,
                slug: body.name
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-"),
            },
        });

        return Response.json({ success: true, product });
    } catch (e) {
        return Response.json({ message: e.message, e: JSON.stringify(e) });
    }
}
