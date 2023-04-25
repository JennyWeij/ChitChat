import argon2 from "argon2";
import { CallbackError, InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false, minlength: 6 },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: false },
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await argon2.hash(this.password);
    }
    next();
  } catch (error) {
    const typedError = error as CallbackError;
    next(typedError);
  }
});

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = model("User", userSchema);

//export default UserModel;
