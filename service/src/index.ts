import { Elysia } from "elysia";
import { auth } from "./routes/auth/plugin";
import { newPost } from "./routes/posts/new";

const app = new Elysia().use(auth).use(newPost).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
