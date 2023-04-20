import argon2 from 'argon2';
import express from 'express';
import 'express-async-errors';
import { UserModel } from './user-model';
//import UserModel from './user-model';

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

  
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
})

//Logga in (ej klar)
.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    res.status(400).json({ message: 'Invalid username or password' });
    return;
  }

  const isPasswordValid = await argon2.verify(user.password, password);

  if (!isPasswordValid) {
    res.status(400).json({ message: 'Invalid username or password' });
    return;
  }

  res.status(200).json({ message: 'Login successful', user})

  //spara inloggade användare?
  //logga ut ordentligt, inte bara i kontexten

})

export default userRouter;