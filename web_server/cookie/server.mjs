import express from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
const app = express();
const client = new PrismaClient();
let username;
let password;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", async (request, response) => {
  const sessionId = request.cookies.sessionId || "";
  const session = await client.session.findUnique({ where: { id: sessionId } });
  const userId = session ? session.userId.toString() : "";
  const info = await client.profile.findUnique({
    where: { id: userId },
  });
  const profile = info ? info.profile : "";
  console.log("getのprofileは", profile);
  response.send(`
	<!doctype html>
	  <html lang="ja">
	  <head>
		<meta charset="utf-8" />
		<title>Reddit</title>
	  </head>
	  <body>
	  <form method="post" action="/login">
		<input name="username" />
		<input name="password" />
		<button>ログイン</button>
	  </form>
	  <form method="post" action="/profile">
		<input name="profile" />
		<button>登録</button>
	  </form>
	  <p>${profile}<p>
	  </body>
	</html>
		`);
});

app.post("/login", async (request, response) => {
  const newUser = await client.user.create({
    data: { username: request.body.username, password: request.body.password },
  });
  const newSession = await client.session.create({
    data: {
      id: crypto.randomUUID().toString(),
      userId: newUser.id,
    },
  });
  response.cookie("sessionId", newSession.id.toString());
  response.redirect("/");
});

app.post("/profile", async (request, response) => {
  const sessionId = request.cookies.sessionId || "";
  const session = await client.session.findUnique({ where: { id: sessionId } });
  const userId = session ? session.userId.toString() : "";
  const newProfile = await client.profile.create({
    data: {
      id: userId,
      profile: request.body.profile,
    },
  });
  response.redirect("/");
});

app.listen(3000);
