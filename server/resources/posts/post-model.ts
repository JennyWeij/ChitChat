import { InferSchemaType, model, Schema, SchemaTypes } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: SchemaTypes.ObjectId, ref: "User", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Add a reference to the user schema
postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });
postSchema.virtual("user", {
  ref: "User",
  localField: "author",
  foreignField: "_id",
  justOne: true,
});

export type Post = InferSchemaType<typeof postSchema>;

export const PostModel = model<Post>("Post", postSchema);

export default PostModel;
