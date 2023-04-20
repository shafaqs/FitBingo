import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { userId, isCompleted } = req.body

  try {
    const bingoBoard = await prisma.bingo_board.create({
      data: {
        userId: userId,
        isCompleted: isCompleted,
        squares: 25,
        difficultyLevel: 0
      }
    })

    res.status(201).json(bingoBoard)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
