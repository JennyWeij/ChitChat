import express, { Request, Response } from "express";
import * as yup from "yup";
import PostModel from "./post-model";

const postSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
});

const postRouter = express.Router();

postRouter.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await PostModel.find({});
  res.json(posts);
});

postRouter.get("/api/posts/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: `Post ${req.params.id} not found` });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Could not retrieve post" });
  }
});

postRouter.post("/api/posts", async (req: Request, res: Response) => {
  if (req.session && req.session.user && req.session.user._id) {
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
    res
      .status(401)
      .json(JSON.stringify({ message: "You must login to create a post" }));
  }
});

postRouter.delete("/api/posts/:id", async (req, res) => {
  if (!req.session || !req.session.user || !req.session.user._id) {
    return res
      .status(401)
      .json(
        JSON.stringify({ message: "You must be logged in to delete a post" })
      );
  }
  try {
    const post = await PostModel.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json(JSON.stringify({ message: "Could not delete post" }));
  }
});

export default postRouter;
