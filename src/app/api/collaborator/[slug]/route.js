import prisma from "@/lib/prisma";

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
        const result = await prisma.collaborator.update({ data: body });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Updated Collaborator",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
    }
}
