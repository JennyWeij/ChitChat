import cookieSession from "cookie-session";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { ValidationError } from "yup";
import postRouter from "../resources/posts/post-router";
import userRouter from "../resources/users/user-router";

// SKRIV DIN SERVERKOD HÄR!

export const app = express();

// Global middlewares

app.use(express.json());

app.use(
  cookieSession({
    name: "login",
    secure: false,
    httpOnly: true,
    secret: "s98d7asyudbahs8d97a6digas78d866usdfss",
    maxAge: 1000 * 10 * 60,
  })
);

// add routers
app.use(postRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.json("hello world");
});

// global felhantering
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof ValidationError) {
    res.status(400).json(err.message);
  } else if (err instanceof Error) {
    res.status(500).json(err.message);
  } else {
    res.status(500).json("Unknown error");
  }
});
