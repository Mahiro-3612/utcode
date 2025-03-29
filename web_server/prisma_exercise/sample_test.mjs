import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const bulletins = await client.bulletin.findMany();
console.log(bulletins);
console.log(typeof bulletins);
debugger;
