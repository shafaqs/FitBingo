const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function displayExercises() {

    //fetch 24 unique exercises from the database
    const exercises = await prisma.exercise.findMany({ take: 24, orderBy: { random: true } });

    //fetch bingo square info
    const squares = await prisma.bingoSquare.findMany();

    //pair each exercise to one bingo square
    const pair = square.map((squares, id) => {
        const exercise = exercise[id];
        return { ...square, exerciseId: exercise.id, exercise };
    });

    console.log(pair)

}