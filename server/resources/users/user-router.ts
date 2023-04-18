import express from 'express';
import 'express-async-errors';
import UserModel from './user-model';

const userRouter = express
.Router()
.get("/api/posts", async (req, res) => {
  const posts = await UserModel.find({})
  res.json(posts);
})
.post("/api/posts", async (req, res) => {
  const post = await UserModel.create(req.body);
  res.json(post);
});

export default userRouter;