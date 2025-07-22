import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://nirosh:Ntharuu@0611@cluster0.hk043o7.mongodb.net/blog-app')
  console.log("DB connected");
  
}