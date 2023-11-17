import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};

export default connectDatabase;
