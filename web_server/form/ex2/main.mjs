import express from "express";
const books = [
  { title: "吾輩は猫である", author: "夏目漱石" },
  { title: "こころ", author: "夏目漱石" },
  { title: "坊つちやん", author: "夏目漱石" },
  { title: "舞姫", author: "森鴎外" },
  { title: "高瀬舟", author: "森鴎外" },
];

const app = express();
app.use(express.static("./public"));

app.get("/search", (request, response) => {
  const selectedPairs = books.filter(
    (book) => book.author === request.query.author
  );
  response.send(`
      <ul>
      ${selectedPairs
        .map((selectedPair) => `<li>${selectedPair.title}</li>`)
        .join("")}
      </ul>`);
});

app.listen(3000);
