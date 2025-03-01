import mongoose, { Document } from "mongoose";
import User from "./userModel";
import formatDate from "../utils/formatDate";

// Interface for schema
interface ITheme extends Document {
  color: string;
}

// Defining the schema
const themeSchema = new mongoose.Schema<ITheme>({
  color: String,
});


// Defining the modal
const Theme =
  mongoose.models.Theme ||
  mongoose.model<ITheme>("Theme", themeSchema);

export default Theme;
