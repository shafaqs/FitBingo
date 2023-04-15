//import { useState, useEffect } from 'react';
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

    console.log('completed squares, ', completedSquares)

    const pointsPerSquare = 100;

    const totalXP = completedSquares * pointsPerSquare;

    res.status(200).json({ experiencePoints: totalXP });

}
