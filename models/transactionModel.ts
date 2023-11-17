import mongoose, { Document } from "mongoose";

// Interface for schema
interface ITransaction extends Document {
  particulars: string;
  amount: string;
  createdAt: Date;
  img: string;
  type: "withdrawl" | "deposited";
}

// Defining the schema
const transactionSchema = new mongoose.Schema<ITransaction>({
  particulars: String,
  amount: Number,
  createdAt: { type: Date, default: new Date() },
  img: String,
  type: { type: String, enum: ["withdrawl", "deposited"] },
});

// Defining the modal
const Transaction =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", transactionSchema);

export default Transaction;
