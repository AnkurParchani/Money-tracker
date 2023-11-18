import mongoose, { Document, model } from "mongoose";
import bcrypt from "bcrypt";

// Interface for schema
interface IUser extends Document {
  name: string;
  email: object;
  img: string;
  password: string;
  passwordConfirm: string | undefined;
}

// Defining the schema
const userSchema = new mongoose.Schema<IUser>({
  name: String,
  img: String,
  email: { type: String, unique: [true, "Email already exist"] },
  password: { type: String, select: false },
  passwordConfirm: String,
});

// Encrypting the password
userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 6);

    this.password = hashedPassword;
    if (this.passwordConfirm) this.passwordConfirm = undefined;

    next();
  } catch (err: any) {
    next(err);
  }
});

// Creating Index for emails
userSchema.index({ email: 1 }, { unique: true });

// Defining the modal
const User = mongoose.models.User || model<IUser>("User", userSchema);

export default User;
