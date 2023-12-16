'use client'
import axios from 'axios'
import {useEffect, useState} from 'react'


interface CardProps {
  
    id:string
    title: string;
    description: string;
    createdAt:String;
  isPending:Boolean
}

export default function Card ({id,title,description,createdAt,isPending}:CardProps){
  const [pending, setPending] =useState(isPending)



 
  useEffect(() => {
      axios.patch('/api/home', { isPending: pending, id: id });
  }, [pending]);
  
  const changeStatus = function () {
    setPending((prev) => !prev);

  };

  return(

    
       <div  className={`${pending?'bg-red-300': 'bg-green-300'} flex flex-col justify-between w-6/12 mx-auto mb-4 p-4 min-h-[13rem] rounded-lg text-gray-800 transition-all`}>
           <div className='flex justify-between gap-2 pointer-cursor'>
             <h1 className="font-bold border-b-2  border-gray-600  text-lg">{title} </h1>
             <div className='bg-red-300 rounded-full p-1k'><img src='/trash.svg' alt='trash'/></div>
           </div>
             <p className="font-normal text-sm">{description}</p>
              <div className=" flex justify-between items-center text-gray-500 text-xs mt-3">
                 <div className="flex  justify-between items-center gap-3">
                 <span onClick={changeStatus} className={`p-1 rounded-full cursor-pointer ${pending?'bg-red-500': 'bg-green-500'}`}><img src="/toggle.svg"/></span>
                 <span>{`Status : ${pending?'Pending':'Done'}`}</span>
                 </div>
                 <span>{`Created At : ${createdAt.substring(0,10)}`}</span>
              </div>
          </div>
    
  )
}