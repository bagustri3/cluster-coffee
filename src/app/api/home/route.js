import prisma from "@/lib/prisma";

export async function GET(req, res) {
    try {
        const featured = await prisma.product.findMany({
            where: {
                isFeatured: true,
            },
            take: 6,
            orderBy: {
                categoryId: "desc",
            },
        });

        const testimoni = await prisma.client.findMany({
            where: {
                isFeatured: true,
            },
        });

        const setting = await prisma.setting.findFirst({
            select: {
                facebookUrl: true,
                youtubeUrl: true,
                instagramUrl: true,
                twitterUrl: true,
                whatsappUrl: true,
                email: true,
                phoneNumber: true,
                footerText: true,
            },
        });

        return Response.json(
            { featured, testimoni, setting },
            {
                status: 200,
            }
        );
    } catch (e) {
        return Response.json(
            { _e: JSON.stringify(e), message: e.message },
            {
                status: 500,
            }
        );
    }
}
