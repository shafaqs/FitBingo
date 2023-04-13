const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export default async function calculateXP(userID) {
    const pointsPerSquare = 100;

    //fetch data for the user
    const user = await prisma.user.findUser({
        where: { id: userID },
        include: {
            Bingo_Square: {
                where: {isComplete: true },
            },
        },
    });
    //count the number of completed squares
    const completedSquares = user.Bingo_Square.length;
    const totalXP = completedSquares * pointsPerSquare;
    return totalXP;
}