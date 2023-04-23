import express, { Request, Response } from "express";
import PostModel from "./post-model";

const postRouter = express.Router();

postRouter.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await PostModel.find({});
  res.json(posts);
});

postRouter.post("/api/posts", async (req: Request, res: Response) => {
  if (req.session && req.session.user._id) {
    try {
      const post = await PostModel.create({
        ...req.body,
        author: req.session.user._id,
      });
      res.status(201).json(post);
    } catch (err) {
      res.status(401).json({ message: "Could not create post" });
    }
  } else {
    res.status(401).json({ message: "You must login to create a post" });
  }
});

export default postRouter;
