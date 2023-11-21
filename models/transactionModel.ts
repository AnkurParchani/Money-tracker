import mongoose, { Document } from "mongoose";
import User from "./userModel";
import formatDate from "../utils/formatDate";

// Interface for schema
interface ITransaction extends Document {
  particulars: string;
  amount: string;
  date: string;
  img: string;
  type: "withdrawl" | "deposit";
  user: object;
}

// Defining the schema
const transactionSchema = new mongoose.Schema<ITransaction>({
  particulars: String,
  amount: Number,
  img: String,
  date: { type: String },
  type: { type: String, enum: ["withdraw", "deposit"] },
  user: { type: mongoose.Schema.ObjectId, ref: User },
});

transactionSchema.pre("save", function () {
  console.log("inside the new updated middleware");

  if (!this.date) {
    const formattedDate = formatDate(String(new Date()));
    this.date = `${formattedDate.day}-${formattedDate.month}-${formattedDate.year}`;
  }
});

// Defining the modal
const Transaction =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", transactionSchema);

export default Transaction;
