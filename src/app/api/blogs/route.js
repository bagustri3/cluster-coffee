import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const blogs = await prisma.article.findMany();
        return Response.json({ blogs });
    } catch (e) {
        return Response.json(
            { message: e.message, e: JSON.stringify(e) },
            {
                status: 500,
            }
        );
    }
}
