import express from 'express';
import 'express-async-errors';
import UserModel from './user-model';

const userRouter = express.Router()

//Hämta alla användare
.get("/api/users", async (req, res) => {
  const users = await UserModel.find({})
  res.json(users);
})


//Registrera ny användare
.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  


  const post = await UserModel.create(req.body);
  res.json(post);
});

export default userRouter;