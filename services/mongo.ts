import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected successfully`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error}`);
  }
};
