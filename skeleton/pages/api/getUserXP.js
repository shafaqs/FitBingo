import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//Updates a user's experience points
export default async function handler(req, res) {

  if (req.method === 'PUT') {
    try {
      const { experience_points, userId } = req.body;

      const updatedUser = await prisma.user.update({
        where: {
          id: Number(userId),
        },
        data: {
          experience_points: experience_points,
        },
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}