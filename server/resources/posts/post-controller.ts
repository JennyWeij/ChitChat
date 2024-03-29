import { Request, Response } from "express";
import * as yup from "yup";
import PostModel from "./post-model";
// YUP shema
// _id title author content createdAt to string strickt

//Validering för nya inlägg
const postSchema = yup.object({
  title: yup.string().required().max(40).strict(),
  content: yup.string().required().max(200).strict(),
});

//Validering för uppdatering av inlägg
const validationSchema = yup.object().shape({
  _id: yup.string().required().strict(),
  title: yup.string().required().strict(),
  author: yup.string().required().strict(),
  content: yup.string().required().strict(),
  createdAt: yup.string().required().strict(),
});

//Hämta alla inlägg
export async function getAllPosts(req: Request, res: Response) {
  const posts = await PostModel.find({}).populate("author");
  res.json(posts);
}

//Hämta ett inlägg med id
export async function getOnePost(req: Request, res: Response) {
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
}

//Skapa ett inlägg
export async function createPost(req: Request, res: Response) {
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
}

//Radera ett inlägg
export async function deletePost(req: Request, res: Response) {
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

    if (
      req.session.user.isAdmin ||
      post.author.toString() === req.session.user._id.toString()
    ) {
      // Admin or post author
      await PostModel.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: "Post deleted successfully" });
    } else {
      return res.status(403).json(
        JSON.stringify({
          message: "You are not authorized to delete this post",
        })
      );
    }

    await PostModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json(JSON.stringify({ message: "Could not delete post " }));
  }
}

//Ändra ett inlägg
export async function editPost(req: Request, res: Response) {
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

  if (req.session.user.isAdmin || post.author.toString() === req.session.user._id.toString()) {
    
    try {
      const validatedData = await validationSchema.validate(req.body);
      const { title, content } = validatedData;

      // Uppdatera inlägget med de validerade värdena
      post.title = title;
      post.content = content;
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      console.log("Error:", error);
      if (error instanceof yup.ValidationError) {
        return res.status(400).json(JSON.stringify({ message: error.message }));
      }
      res.status(500).json(JSON.stringify({ message: "Could not update post" }));
    }
  } else {
    return res.status(403).json(
      JSON.stringify({
        message: "You are not authorized to update this post",
      })
    );
  }
}