import express from "express";
import { emojify } from "node-emoji";

const app = express();
app.use(express.static("./public"));

app.get("/emojify", (request, response) => {
  response.send(emojify(request.query.text));
});

app.listen(3000);
