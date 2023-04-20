import argon2 from "argon2";
import { Request, Response } from "express";
import { UserModel } from "./user-model";

export async function registerUser(req: Request, res: Response) {
  const { username, password } = req.body;
  // const userInfo = joiSchema.validate(req.body);

  const existingUser = await UserModel.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: "Username already taken" });
  }

  const user = await UserModel.create(req.body);
  res.status(201).json(user);
}

export async function loginUser(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    res.status(400).json({ message: "Invalid username or password" });
    return;
  }

  const isPasswordValid = await argon2.verify(user.password, password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid username or password" });
    return;
  }

  const { password: _, ...userWithoutPassword } = user.toObject();
  
  req.session!.user = userWithoutPassword;

  res.status(200).json({ message: "Login successful", user: userWithoutPassword });

}
