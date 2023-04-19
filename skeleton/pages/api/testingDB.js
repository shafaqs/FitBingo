const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function logAllData() {
    // const all = await prisma.$queryRaw`SELECT * FROM Bingo_Square`

    for (let month = 1; month <= 12; month++) {
      const squaresByMonth = [];
      const stats = await prisma.bingo_Square.count({
          where: {
            isCompleted: true,
            bingoBoard: { userId: 1  },
            endAt: {
              gte: new Date(2023, month - 1, 1),
              lt: new Date(2023, month, 1)
            }
          }
        })
        squaresByMonth.push(stats)
        console.log(squaresByMonth);
  }

    // const all = await prisma.bingo_Square.findMany({
    //   where: {
    //     createAt: {
    //       gte: new Date(2023, 0, 1),
    //       lt: new Date(2023, 3, 1)
    //     }
    //   }
    // })

    //console.log(all);
}

logAllData()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect();
  })