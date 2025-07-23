import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect('mongodb+srv://nirosh:0Vec+T04@cluster0.hk043o7.mongodb.net/blog-app')
  console.log("DB connected");
  
}