import express from "express";

const app = express();
let articles = [];

app.use(express.urlencoded({ extended: true }));

// // 下を有効にすると常に静的ファイルが優先されてしまう
// app.use(express.static("./public"));

app.get("/", (request, response) => {
  console.log("getting");
  response.send(
    `<body>
      <div>
      <form method="post" action="/send">
        <input name="article" />
        <button>送信</button>
      </form>
      </div>
      <ul>${articles.map((article) => `<li>${article}</li>`).join("")}</ul>
    </body>`
  );
});
app.post("/send", (request, response) => {
  articles.push(request.body.article);
  response.redirect("/");
});

app.listen(3000);
