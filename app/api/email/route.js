import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";


const LoadDB = async ()=>{
  await connectDB();
}
LoadDB();

export async function POST(request) {   
  const formData = await request.formData();
  const emailData = {
    email:`${formData.get('email')}`,
  }
  await EmailModel.create(emailData);
  return NextResponse.json({success:true,msg:"Email Subscribed"})
}