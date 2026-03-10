import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'] // Mantemos os logs que são ótimos!
});

export default prisma;