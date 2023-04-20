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
  console.log(
    "Received login request with username:",
    username,
    "and password:",
    password
  );

  const user = await UserModel.findOne({ username });
  if (!user) {
    res.status(400).json({ message: "Invalid username or password" });
    return;
  }
  console.log("Found user in the database:", user);

  const isPasswordValid = await argon2.verify(user.password, password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid username or password" });
    return;
  }
  console.log('Password verification result:', isPasswordValid);

  const { password: _, ...userWithoutPassword } = user.toObject();

  req.session!.user = userWithoutPassword;

  res
    .status(200)
    .json({ message: "Login successful", user: userWithoutPassword });
}

export function logoutUser(req: Request, res: Response) {
  if (req.session) {
    req.session = null;
  }
  res.status(200).json({ message: "Logged out" });
}

export async function getSession(req: Request, res: Response) {
  const sessionUser = req.session!.user;

  if (sessionUser) {
    const { password: _, ...userWithoutPassword } = sessionUser;
    res.status(200).json(userWithoutPassword);
  } else {
    res.status(401).json({ message: "No active session" });
  }
}
