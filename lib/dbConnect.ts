import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};

export default connectDB;
