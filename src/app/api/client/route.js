import prisma from "@/lib/prisma";
import { ObjectId } from "mongodb";

export async function GET() {
    try {
        const clients = await prisma.client.findMany({
            include: {
                Testimoni: true,
            },
        });
        return Response.json({ clients });
    } catch (e) {
        return Response.json({ message: e.message, e: JSON.stringify(e) });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const result = await prisma.client.create({ data: body });

        if (!result) {
            throw new Error("Something went wrong");
        }

        return Response.json({
            message: "success",
            data: {
                status: 201,
                result: "Created New Client",
            },
        });
    } catch (e) {
        return Response.json({ message: e?.message, e: JSON.stringify(e) });
    }
}


