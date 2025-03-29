import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const todos = await client.todo.findMany();
debugger;
