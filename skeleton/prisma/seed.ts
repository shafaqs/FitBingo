import { PrismaClient } from '@prisma/client';
import users from "./seeds/users"
import exercises from './seeds/exercises';
import bingo_boards from './seeds/bingo_boards';

const prisma = new PrismaClient();

//run 'npx prisma db seed' to reset db
async function main() {

  //deletes the existing tables, then seed the default ones in the seeds dir
  await prisma.bingo_Board.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.exercise.deleteMany({})

  //Reseeds the db. Watch the cascading order
  for (const exercise of exercises) {
    await prisma.exercise.create({ 
      data: exercise
    })
  }
  for (const user of users) {
    await prisma.user.create({ 
      data: user
    })
  }
  for (const bingo_board of bingo_boards) {
    await prisma.bingo_Board.create({ 
      data: bingo_board
    })
  }
}

main()
  .then(async () => {
      await prisma.$disconnect();
  })
  .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
  });