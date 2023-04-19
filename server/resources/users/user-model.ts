import { InferSchemaType, Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
},
{
  versionKey: false,
  timestamps: true,
}
);

export type User = InferSchemaType<typeof userSchema>;

const UserModel = model("user", userSchema);

export default UserModel;