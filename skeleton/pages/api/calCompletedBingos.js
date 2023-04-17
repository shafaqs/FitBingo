import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function calcCompletedBingos(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
      }
    
      const { userId } = req.query;
    
      const completedBingos = await prisma.bingo_Board.count({
        where: { isCompleted: true, userId: parseInt(userId) },
      });
    
      res.status(200).json({ completedBingos: completedBingos });
}