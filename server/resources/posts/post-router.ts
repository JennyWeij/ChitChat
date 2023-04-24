import express, { Request, Response } from "express";
import PostModel from "./post-model";

const postRouter = express.Router();

postRouter.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await PostModel.find({});
  res.json(posts);
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

// postRouter.get("/api/posts/:postId", async (req: Request, res: Response) => {
//   const { postId } = req.params;

//   try {
//     const post = await PostModel.findOne({ _id: postId }).populate(
//       "author",
//       "username"
//     );
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.json(post);
//   } catch (err) {
//     res.status(500).json({ message: "Could not retrieve post" });
//   }
// });

export default postRouter;
