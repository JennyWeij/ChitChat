import cookieSession from 'cookie-session';
import express from 'express';
import 'express-async-errors';
import userRouter from '../resources/users/user-router';

// SKRIV DIN SERVERKOD HÄR!

export const app = express();

// Global middlewares

app.use(express.json());

app.use(
  cookieSession({
    name: 'login',
    secure: false,
    httpOnly: true,
    secret: 's98d7asyudbahs8d97a6digas78d866usdfss',
    maxAge: 1000 * 20,
  })
);

// add routers
//app.use(postRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.json("hello world")
})

// global felhantering