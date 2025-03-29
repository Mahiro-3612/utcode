import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send(`
	<!doctype html>
	  <html lang="ja">
	  <head>
		<meta charset="utf-8" />
		<title>Title</title>
	  </head>
	  <body>
		<ul>
			<li>クライアントの時刻は<script>document.write(new Date().toUTCString());</script>です。</li>
			<li>サーバーの時刻は${new Date().toUTCString()}です。</li>
		</ul>
	  </body>
	</html>
		`);
});

app.listen(3000);
