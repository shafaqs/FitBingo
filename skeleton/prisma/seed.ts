import { PrismaClient } from '@prisma/client';
import users from "./seeds/users"
import exercises from './seeds/exercises';

const prisma = new PrismaClient();

async function main() {
  await prisma.exercise.deleteMany({})
  for (const exercise of exercises) {
    await prisma.exercise.create({ 
      data: exercise
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