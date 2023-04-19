import { app } from './app';

// HÄR SKRIVER NI KODEN FÖR ATT ANSLUTA TILL DATABASEN OCH STARTA SERVERN!

import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import postRouter from '../resources/posts/post-router';

//const app = express();

// Global middlewares
app.use(express.json());

// add routers
app.use(postRouter);
// app.use(userRouter);

app.get("/", (req, res) => {
  res.json("hello world")
})

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
  console.log("Connected to Database");

  app.listen(3000, () => {
    console.log("server is running: http://localhost:3000");
  })

}

main().catch(console.error)

