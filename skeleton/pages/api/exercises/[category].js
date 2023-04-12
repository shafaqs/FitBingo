import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { category } = req.query;

    // Fetch all cardio exercises from the database
    const result = await prisma.exercise.findMany({
      where: {
        category: category,
      },
    });

    // Return a random exercise from the list
    const exercise = result[Math.floor(Math.random() * result.length)];
    res.status(200).json(exercise);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
