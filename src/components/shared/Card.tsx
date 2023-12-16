'use client'
import axios from 'axios'
import {useState} from 'react'


interface CardProps {
  
    id:string
    title: string;
    description: string;
    createdAt:string;
  
}

export default function Card ({id,title,description,createdAt}:CardProps){
  const [pending, setPending] =useState(false)

  const changeStatus=async function(e:React.MouseEvent<HTMLSpanElement>){
    console.log(e.target)
      setPending(prev=>!prev)

      await axios.patch('/api/home',{isPending:pending,id:id})
  }
  return(

    
       <div  className={`${pending?'bg-red-300': 'bg-green-300'} flex flex-col justify-between w-6/12 mx-auto mb-4 p-4 min-h-[13rem] rounded-lg text-gray-800 transition-all`}>
             <h1 className="font-bold border-b-2 border-r-2 border-gray-600 skew-x-6  text-lg">{title} </h1>
             <p className="font-normal text-sm">{description}</p>
              <div className=" flex justify-between items-center text-gray-500 text-xs mt-3">
                 <div className="flex  justify-between items-center gap-3">
                 <span onClick={changeStatus} className={`p-1 rounded-full cursor-pointer ${pending?'bg-red-500': 'bg-green-500'}`}><img src="/toggle.svg"/></span>
                 <span>{`Status : ${pending?'Done':'Pending'}`}</span>
                 </div>
                 <span>{`Created At : ${createdAt}`}</span>
              </div>
          </div>
    
  )
}