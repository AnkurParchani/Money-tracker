import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI as string);
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};

export default connectDB;
