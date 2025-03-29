import express from "express";
const app = express();
let count = 0;

app.get("/", (request, response) => {
  count += 1;
  response.send(`
	<!doctype html>
      <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Title</title>
      </head>
      <body>
        <ul>
          あなたは${count}人目のお客様です。
        </ul>
      </body>
    </html>
		`);
});

app.listen(3000);
