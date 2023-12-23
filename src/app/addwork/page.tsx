'use client'
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Card(){
  // const router=useRouter()
  const [data, setData] =useState({title:'',description:'',createdAt:Date.now()})

  const handleChange=(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
      return setData(prevData=>{
        return {...prevData,[event.target.name]:event.target.value}
      })
  }

  const handleSubmit=async(e:any)=>{
    e.preventDefault()
   console.log('clicked')
    try {
      console.log(data.createdAt)
      
      const response = await axios.post("/api/addwork", data);
      console.log("task added!!");
      
    //  router.push('/home')
    } catch (error) {
        console.log(error)
    }
  } 
  
  return(
    <form className='max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
    <h2 className='text-2xl text-blue-500 font-bold mb-6'>Add Work</h2>
  
    <div className='mb-4'>
      <label htmlFor='title' className='block text-gray-700 text-sm font-semibold mb-2'>Title</label>
      <input
        id='title'
        name='title'
        type='text'
        placeholder='Enter Work Title'
        onChange={handleChange}
        className='w-full p-2 border text-gray-700 border-gray-300 rounded-md'
      />
    </div>
  
    <div className='mb-4'>
      <label htmlFor='description' className='block text-sm text-gray-700 font-semibold mb-2'>Description</label>
      <textarea
        id='description'
        name='description'
        rows={4}
        placeholder='Enter Work Description'
        onChange={handleChange}
        className='w-full p-2 border text-gray-700 border-gray-300 rounded-md resize-none'
      ></textarea>
    </div>
  
    <button
      className='w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
      type='button'
      onClick={handleSubmit}
    >
      Submit
    </button>
  </form>
  )
}