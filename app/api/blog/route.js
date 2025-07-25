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

// Api Endpoint to get all blogs
export async function GET(request) {

  const blogId = request.nextUrl.searchParams.get('id');
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog)
  }
  else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs })
  }

}

// Api Endpoint for uploading blogs
export async function POST(request) {

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get('image');
  if (!image) {
    return new Response("No image file uploaded", { status: 400 });
  }
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`
  }
  await BlogModel.create(blogData);
  console.log("Blog saved");

  //   const newBlog = new BlogModel(blogData);
  // await newBlog.save();


  return NextResponse.json({ success: true, msg: 'blog added' });

}