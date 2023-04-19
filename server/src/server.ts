import { app } from './app';

// HÄR SKRIVER NI KODEN FÖR ATT ANSLUTA TILL DATABASEN OCH STARTA SERVERN!

import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import userRouter from '../resources/users/user-router';

//const app = express();

// Global middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    );
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

// add routers
//app.use(postRouter);
app.use(userRouter);

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

