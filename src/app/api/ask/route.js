import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const questions = await prisma.question.findMany();
        return Response.json({ questions });
    } catch (e) {
        return Response.json({ message: e.message, e: JSON.stringify(e) });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const result = await prisma.question.create({ data: body });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Created New Question",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
    }
}
