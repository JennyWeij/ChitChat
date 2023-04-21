import argon2 from "argon2";
import { Request, Response } from "express";
import * as Yup from "yup";
import { UserModel } from "./user-model";

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required().min(6),
});

export async function registerUser(req: Request, res: Response) {
  try {
    const validatedData = await validationSchema.validate(req.body);
    const { username, password } = validatedData;

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(409).json("Username already taken");
    }

    const user = await UserModel.create({
      username,
      password,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return res.status(400).json(error.message);
    }
    return res.status(400).json("An error occurred while registering the user");
  }
}

export async function loginUser(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  const isPasswordValid = await argon2.verify(user.password, password);
  if (!isPasswordValid) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  const { password: _, ...userWithoutPassword } = user;
  console.log(userWithoutPassword);

  req.session!.user = userWithoutPassword;

  res.status(200).json({
    _id: user._id,
    message: "Login successful",
    user: userWithoutPassword,
  });
}

export function logoutUser(req: Request, res: Response) {
  if (req.session) {
    req.session = null;
  }
  res.status(204).json({ message: "Logged out" });
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
