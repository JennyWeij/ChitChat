import express from 'express';
import 'express-async-errors';
import userRouter from '../resources/users/user-router';

// SKRIV DIN SERVERKOD HÄR!

export const app = express();
//const app = express();

// Global middlewares

// //blocked by CORS policy (solution)
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if (req.method === 'OPTIONS') {
//     res.header(
//       'Access-Control-Allow-Methods',
//       'PUT, POST, PATCH, DELETE, GET'
//     );
//     return res.status(200).json({});
//   }
//   next();
// });

app.use(express.json());

// add routers
//app.use(postRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.json("hello world")
})

// global felhantering