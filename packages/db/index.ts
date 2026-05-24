/// <reference types="node" />
import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not defined");
  }

  await mongoose.connect("http://localhost:5000/");

  console.log("MongoDB connected");
};