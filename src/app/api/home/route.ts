import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../../models/userModel";

connect()

export async function GET(req:NextRequest){

  try {
    
    const data =await Task.find()

    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json({error:error},{status:401})
  }

}



export async function PATCH(req:NextRequest){
  try {
    const reqBody=await req.json()
    const {isPending,id}:{isPending:Boolean,id:String}=reqBody

    
    
    // await Task.updateOne
    return NextResponse.json({message:'status chamged'})
  } catch (error) {
      return NextResponse.json({error:error},{status:401})
  }
}