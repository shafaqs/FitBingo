const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function logAllData() {
    const all = await prisma.$queryRaw`SELECT * FROM User`

    console.log(all);
}

logAllData()
  .catch((e) => {
    console.error('Error in calculateXP: ', e)
  })
  .finally(async () => {
    await prisma.$disconnect();
  })