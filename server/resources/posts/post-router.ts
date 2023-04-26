import express, { Request, Response } from "express";
import * as yup from "yup";
import PostModel from "./post-model";

const postSchema = yup.object({
  title: yup.string().required().max(40).strict(),
  content: yup.string().required().max(125).strict(),
});

const validationSchema = yup.object().shape({
  // username: yup.string().required().min(3).strict(),
  // password: yup.string().required().min(6).strict(), 
  _id: yup.string().required().min(5).strict(),
  title: yup.string().required().max(40).strict(),
  author: yup.string().required().min(3).strict(),
  content: yup.string().required().min(1).strict(),
  createdAt: yup.string().required().max(20).strict(),
});

const postRouter = express.Router();

postRouter.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await PostModel.find({}).populate("author");
  res.json(posts);
});

postRouter.get("/api/posts/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json(JSON.stringify({ message: `Post ${req.params.id} not found` }));
    }
    res.json(post);
  } catch (err) {
    res.status(500).json("Could not retrieve post");
  }
});

postRouter.post("/api/posts", async (req: Request, res: Response) => {
  if (req.session && req.session.user && req.session.user._id) {
    try {
      const validatedData = await postSchema.validate(req.body);
      const { title, content } = validatedData;

      const post = await PostModel.create({
        title,
        content,
        author: req.session.user._id,
      });

      res.status(201).json(post);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return res.status(400).json(JSON.stringify({ message: error.message }));
      }
      res
        .status(500)
        .json(JSON.stringify({ message: "Could not create post" }));
    }
  } else {
    res
      .status(401)
      .json(JSON.stringify({ message: "You must login to create a post" }));
  }
});

postRouter.delete("/api/posts/:id", async (req, res) => {
  if (!req.session || !req.session.user || !req.session.user._id) {
    return res.status(401).json("You must log in to delete a post");
  }
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json(JSON.stringify({ message: `Post ${req.params.id} not found` }));
    }

    if (post.author.toString() !== req.session.user._id.toString()) {
      return res.status(403).json(
        JSON.stringify({
          message: "You are not authorized to update this post",
        })
      );
    }

    await PostModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json(JSON.stringify({ message: "Could not delete post " }));
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

  // Use a try-catch block to validate the request body against the validation schema
  try { 
    const validatedData = await validationSchema.validate(req.body);
    const { title, content } = validatedData;

    // Update the post with the validated values
    post.title = title;
    post.content = content;
    await post.save();

    res.status(201).json(JSON.stringify(post));
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(400).json(JSON.stringify({ message: error.message }));
    }
    res
      .status(500)
      .json(JSON.stringify({ message: "Could not update post" }));
  }
});

export default postRouter;
