import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";


const LoadDB = async () => {
  await connectDB();
}
LoadDB();

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  }
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" })
}


export async function GET(request) {
  const email = await EmailModel.find({});
  return NextResponse.json({ email });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted" })
}