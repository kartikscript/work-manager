import { NextRequest, NextResponse } from "next/server";

interface Params {
  userId:string
  postId:string
}

export  async function POST(request:NextRequest, { params }: { params: Params }){

  const {userId, postId} =params
  console.log(request.nextUrl.searchParams)//localhost:3000:/api/todos/12/posts/14?name='sian'--> {name='sian'}
  return NextResponse.json({
    'message':`userId is ${userId} and postId is ${postId}`
  })
}