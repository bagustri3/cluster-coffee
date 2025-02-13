import prisma from "@/lib/prisma";
import { ObjectId } from "mongodb";
const { createFromHexString } = ObjectId;
export async function GET(req, { params }) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");

        const options = {
            ...(category
                ? {
                      where: {
                          categoryId: createFromHexString(category),
                      },
                  }
                : {}),
            orderBy: {
                isFeatured: "desc",
            },
        };

        const products = await prisma.product.findMany({
            ...(category
                ? {
                      where: {
                          categoryId: createFromHexString(category),
                      },
                  }
                : {}),
            orderBy: {
                isFeatured: "desc",
            },
            include: {
                Category: true,
            },
        });

        console.log(options);
        console.log(category);
        console.log(products);

        const categories = await prisma.category.findMany({
            include: {
                SubCategory: true,
            },
        });

        return Response.json({ products, categories });
    } catch (e) {
        return Response.json({ message: e.message, e: JSON.stringify(e) });
    }
}

export async function POST(req) {
    try {
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

        const result = await prisma.product.create({
            data: {
                ...body,
                slug: body.name
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-"),
            },
        });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Created New Product",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
    }
}
