// Prisma is disabled for FreeBSD deployment
// This is a mock that prevents the PrismaClient from being imported

export const prisma = {
  user: {
    findUnique: async () => null,
    create: async () => null,
    update: async () => null,
  },
  account: {
    findUnique: async () => null,
    create: async () => null,
  },
  session: {
    findUnique: async () => null,
    create: async () => null,
    delete: async () => null,
  },
  verificationToken: {
    findUnique: async () => null,
    create: async () => null,
    delete: async () => null,
  },
} as any;