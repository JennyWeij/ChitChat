import express from "express";
import { createPost, deletePost, editPost, getAllPosts, getOnePost } from "./post-controller";


const postRouter = express.Router()

//Hämta alla inlägg
.get("/api/posts", getAllPosts)

//Hämta ett inlägg med id
.get("/api/posts/:id", getOnePost)

//Skapa ett inlägg
.post("/api/posts", createPost)

//Radera ett inlägg
.delete("/api/posts/:id", deletePost)

//Ändra ett inlägg
.put("/api/posts/:id", editPost)

export default postRouter;
