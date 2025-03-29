import express from "express";
const app = express();
const messages = [];

app.use(express.json());
app.use(express.static("./public"));

app.get("/messages", (request, response) => {
  response.json(messages);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send();
});

app.listen(3000);
