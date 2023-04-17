import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function calculateXP(req, res) {
    let monthlyXP = {};

    if (req.method !== 'GET') {
        return res.status(405)
    }

    const { userId } = req.query;

    const completedSquares = await prisma.bingo_Square.count({
        where: { isCompleted: true, bingoBoard: { userId: parseInt(userId)  } },
      });

    const pointsPerSquare = 100;

    for (const completedSquare of completedSquares) {
        const month = new Date(completedSquare.dateTime).getMonth() + 1
        if (!monthlyXP[month]) {
            monthlyXP[month] = []
        }
        monthlyXP[month].push(completedSquare * pointsPerSquare)
    }


    res.status(200).json({ experiencePoints: monthlyXP });
}