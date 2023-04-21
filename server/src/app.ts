import cookieSession from "cookie-session";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import postRouter from "../resources/posts/post-router";
import userRouter from "../resources/users/user-router";

// SKRIV DIN SERVERKOD HÄR!

export const app = express();

// Global middlewares

app.use(express.json());

// Middleware to set CORS headers
const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
};

// Add the middleware to your server
app.use(corsMiddleware);

app.use(
  cookieSession({
    name: "login",
    secure: false,
    httpOnly: true,
    secret: "s98d7asyudbahs8d97a6digas78d866usdfss",
    maxAge: 1000 * 20,
  })
);

// add routers
app.use(postRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.json("hello world");
});

// global felhantering
