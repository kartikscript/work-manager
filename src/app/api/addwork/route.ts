import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../../models/userModel";

connect();
type obj = {
  title: String;
  description: String;
  createdAt: String;
};
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { title, description, createdAt }: obj = reqBody;

    const newTask = new Task({
      title,
      description,
      createdAt,
      isPending:true
    });

    await newTask.save();

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
