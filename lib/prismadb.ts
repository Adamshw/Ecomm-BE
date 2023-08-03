import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
// to avoid nextjs creating new prisma client everytime on hot reload in nonprod
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;