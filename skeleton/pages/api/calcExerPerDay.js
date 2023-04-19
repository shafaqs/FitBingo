import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ message: 'User ID not provided' });
    return;
  }

  const currentDate = new Date();
  const weekStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);

  try {
    const exercises = await prisma.bingo_Square.findMany({
      where: {
        AND: [
          {
            createAt: {
              gte: weekStart.toISOString(),
            },
          },
          {
            createAt: {
              lte: currentDate.toISOString(),
            },
          },
          {
            isCompleted: true,
          },
          {
            bingoBoard: {
              user: {
                id: parseInt(userId),
              },
            },
          },
        ],
      },
    });

    const exercisesPerDay = [0, 0, 0, 0, 0, 0, 0];

    exercises.forEach((exercise) => {
      const dayIndex = new Date(exercise.createAt).getDay() - 1;
      exercisesPerDay[dayIndex]++;
    });

    res.status(200).json(exercisesPerDay);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
