import { InferSchemaType, Schema, SchemaTypes, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: SchemaTypes.ObjectId, ref: 'user', required: true },
},
{
  versionKey: false,
  timestamps: true,
}
);

export type Post = InferSchemaType<typeof postSchema>;

export const PostModel = model("post", postSchema);

export default PostModel;