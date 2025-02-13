import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
    try {
        const parameter = await params;
        const { slug } = parameter;

        if (!slug) {
            return Response.json(
                { message: "Slug not found" },
                { status: 404, statusText: "Not Found" }
            );
        }

        const result = await prisma.client.delete({
            where: {
                id: ObjectId.createFromHexString(slug),
            },
        });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Deleted Client",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
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

        const body = await req.json();
        const result = await prisma.client.update({
            where: {
                id: ObjectId.createFromHexString(slug),
            },
            data: body,
        });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Updated Client",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
    }
}
