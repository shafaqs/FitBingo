//import { useState, useEffect } from 'react';
import users from '@/prisma/seeds/users';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function calculateXP(req, res) {
    if (req.method !== 'GET') {
        return res.status(405)
    }

    const { userId } = req.query;

    console.log('from calculate xp: ', userId);

    const completedSquares = await prisma.bingo_Square.count({
        where: { isCompleted: true, bingoBoard: { userId: parseInt(userId)  } },
      });

    const pointsPerSquare = 100;

    const totalXP = completedSquares * pointsPerSquare;

    res.status(200).json({ experiencePoints: totalXP });

}
