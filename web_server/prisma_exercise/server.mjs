import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const client = new PrismaClient();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  const articles = await client.bulletin.findMany();
  response.send(`
	<!doctype html>
	  <html lang="ja">
	  <head>
		<meta charset="utf-8" />
		<title>Reddit</title>
	  </head>
	  <body>
	  <form method="post" action="/send">
	  	<input name="article" />
      	<button>送信</button>
	  </form>
		<ul>
		${articles.map((article) => `<li>${article.message}</li>`).join("")}
		</ul>
	  </body>
	</html>
		`);
});

app.post("/send", async (request, response) => {
  const todos = await client.session.create({
    data: { message: request.body.article },
  });
  response.redirect("/");
});

app.listen(3000);
