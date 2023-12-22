import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../../models/userModel";


export async function GET(req:NextRequest){
  
  try {
    
    await connect()
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

    await Task.findByIdAndUpdate(id,{isPending:isPending})
    return NextResponse.json({message:'status changed'})
  } catch (error) {
      return NextResponse.json({error:error},{status:401})
  }
}

export async function POST(req:NextRequest){
  try {
    const reqBody=await req.json()
    const {id}:{id:String}=reqBody
    await Task.findByIdAndDelete(id)
    return NextResponse.json({message:'Deleted'})

  } catch (error) {
    return NextResponse.json({error:error},{status:401})
  }
}