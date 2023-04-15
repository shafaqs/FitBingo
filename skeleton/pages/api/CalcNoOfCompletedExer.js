import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CalcNoOfCompletedExer(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
      }
    
      const { userId } = req.query;
    
      const completedSquares = await prisma.bingo_Square.count({
        where: { isCompleted: true, bingoBoard: { userId: parseInt(userId)  } },
      });
    
      res.status(200).json({ completedExercises: completedSquares });
}