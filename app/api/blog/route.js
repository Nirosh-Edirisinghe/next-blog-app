import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { Description } from "@mui/icons-material";
import { log } from "console";
import { writeFile } from 'fs/promises'
import { title } from "process";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await connectDB();
}

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: 'API Working' })

}

export async function POST(request) {

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get('image');
  if (!image) {
    return new Response("No image file uploaded", { status: 400 });
  }
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.form(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${'imgUrl'}`,
    authorImg: `${formData.get('authorImg')}`
  }
  await BlogModel.create(blogData);
  console.log("Blog saved");

  //   const newBlog = new BlogModel(blogData);
  // await newBlog.save();


  return NextResponse.json({ success: true, msg: 'blog added' });

}