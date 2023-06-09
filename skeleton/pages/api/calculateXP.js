import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function calculateXP(req, res) {
    if (req.method !== 'GET') {
        return res.status(405)
    }

    const { userId } = req.query;

    const completedSquares = await prisma.bingo_Square.count({
        where: { isCompleted: true, bingoBoard: { userId: parseInt(userId)  } },
      });

    const pointsPerSquare = 100;

    const completedBoards = await prisma.bingo_Board.count({
        where: { isCompleted: true, userId: parseInt(userId) },
      });

    const pointsPerBoard = 500;

    const totalXP = completedSquares * pointsPerSquare + completedBoards * pointsPerBoard;

    res.status(200).json({ experiencePoints: totalXP });

}
