'use client'
import axios from 'axios'
import Error from 'next/error';
import {useEffect, useState} from 'react'


interface CardProps {
  
    id:string
    title: string;
    description: string;
    createdAt:Date | Number;
  isPending:Boolean
  handleCardDelete:()=>void
}

export default function Card ({id,title,description,createdAt,isPending,handleCardDelete}:CardProps){
  const [pending, setPending] =useState(isPending)
  const [isDeleted,setIsDeleted] =useState(false)

 
  useEffect(() => {
      axios.patch('/api/home', { isPending: pending, id: id });
  }, [pending]);
  
  const changeStatus = function () {
    setPending((prev) => !prev);

  };

  const deleteCard=async ()=>{
    try{
      setIsDeleted(true)
      await axios.post('/api/home/', {id:id})
      handleCardDelete()
    }catch(error){
      console.log(Error)
    }

    
  }

//   const date = new Date(createdAt);

// // Format the date as a string
// const formattedDate = date.toLocaleString()
console.log(createdAt.toLocaleString() ,typeof createdAt)
  if(isDeleted){
return null
  }

  return(

    
       <div  className={`${pending?'bg-red-200': 'bg-green-300'} flex flex-col justify-between w-6/12 mx-auto mb-4 p-4 min-h-[13rem] rounded-lg text-gray-800 transition-all`}>
           <div className='flex justify-between items-center gap-2 '>
             <h1 className="font-bold border-b-2  border-gray-600  text-lg">{title} </h1>
             <div onClick={deleteCard} className='bg-white hover:bg-red-300 active:bg-red-500  cursor-pointer rounded-full p-1 '><img src='/trash.svg' alt='trash'/></div>
           </div>
             <p className="font-normal text-sm">{description}</p>
              <div className=" flex justify-between items-center text-gray-500 text-xs mt-3">
                 <div className="flex  justify-between items-center gap-3">
                 <span onClick={changeStatus} className={`p-1 rounded-full cursor-pointer ${pending?'bg-red-500': 'bg-green-500'}`}><img src="/toggle.svg"/></span>
                 <span>{`Status : ${pending?'Pending':'Done'}`}</span>
                 </div>
                 <span>{`Created At : ${createdAt.toLocaleString()}`}</span>
              </div>
          </div>
    
  )
}