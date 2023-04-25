import { InferSchemaType, model, Schema, SchemaTypes } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: SchemaTypes.ObjectId, ref: "User", required: true },
  },
  {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export type Post = InferSchemaType<typeof postSchema>;

export const PostModel = model<Post>("Post", postSchema);

export default PostModel;
