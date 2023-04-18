import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  //Fetches the boardId and the array of square objects created in bingo.jsx
  const { bingoBoardId, squares } = req.body

  try {
    const createdSquares = await Promise.all( //Promise.all creates all squares at the same time
      squares.map(async (square) => {
        return await prisma.bingo_square.create({
          data: {
            bingo_board: {
              connect: {
                id: bingoBoardId,
              },
            },
            position: square.position,
            isCompleted: square.isCompleted,
            inProgress: square.inProgress,
          },
        })
      })
    )

    res.status(201).json(createdSquares)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
