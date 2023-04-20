import argon2 from 'argon2';
import { CallbackError, InferSchemaType, Schema, model } from "mongoose";


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  isAdmin: { type: Boolean, required: true, default: false },
},
{
  versionKey: false,
  timestamps: true,
}
);

userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
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