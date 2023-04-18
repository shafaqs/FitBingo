import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function calMonthlyXP(req, res) {
    if (req.method !== 'GET') {
        return res.status(405)
    }

    const { userId } = req.query;

    const squaresByMonth = [];

    for (let month = 1; month <= 12; month++) {
        const stats = await prisma.bingo_Square.count({
            where: {
              isCompleted: true,
              bingoBoard: { userId: parseInt(userId)  },
              endAt: {
                gte: new Date(2023, month - 1, 1),
                lt: new Date(2023, month, 1)
              }
            }
          })
          squaresByMonth.push(stats) //✅
    }

    const experiencePoints = squaresByMonth.map(i => i * 100);

    res.status(200).json({ experiencePoints: experiencePoints });
}