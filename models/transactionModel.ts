import mongoose, { Document } from "mongoose";
import User from "./userModel";

// Interface for schema
interface ITransaction extends Document {
  particulars: string;
  amount: string;
  date: Date;
  img: string;
  type: "withdrawl" | "deposit";
  user: object;
}

// Defining the schema
const transactionSchema = new mongoose.Schema<ITransaction>({
  particulars: String,
  amount: Number,
  img: String,
  date: { type: Date, default: new Date() },
  type: { type: String, enum: ["withdraw", "deposit"] },
  user: { type: mongoose.Schema.ObjectId, ref: User },
});

// Defining the modal
const Transaction =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", transactionSchema);

export default Transaction;
