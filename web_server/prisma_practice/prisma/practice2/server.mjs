import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const todos = await client.todo.create({ data: { name: "買い物をする" } });
debugger;
