import mongoose from "mongoose";

const connectDB =async () => {
  try {
   await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connection successful");
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};

export default connectDB;
