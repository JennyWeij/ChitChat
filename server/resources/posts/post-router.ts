import express, { Request, Response } from "express";
import PostModel from "./post-model";

const postRouter = express.Router();

postRouter.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await PostModel.find({});
  res.json(posts);
});

postRouter.get("/api/posts/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found");
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

postRouter.put("/api/posts/:id", async (req: Request, res: Response) => {
  if (!req.session || !req.session.user || !req.session.user._id) {
    return res
      .status(401)
      .json(
        JSON.stringify({ message: "You must be logged in to update a post" })
      );
  }
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    return res.status(404).json(`Post with id ${req.params.id} was not found`);
  }
  if (post.author.toString() !== req.session.user._id.toString()) {
    return res.status(403).json(
      JSON.stringify({
        message: "You are not authorized to update this post",
      })
    );
  }
  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  await post.save();
  res.json(post);
});

export default postRouter;
