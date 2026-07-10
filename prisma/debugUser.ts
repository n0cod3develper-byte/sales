export {};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(async () => {
  const users = await prisma.user.findMany();
  console.log('All users:', users);
  await prisma.$disconnect();
})();
