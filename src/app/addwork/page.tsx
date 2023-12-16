'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Card(){
  const router=useRouter()
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
      
     router.push('/home')
    } catch (error) {
        console.log(error)
    }
  } 
  
  return(
    <form> 
      <label>Title</label>
      <input 
        name="title"
        type="text"
        placeholder="Work Title"
        onChange={handleChange}
        />
        <label>Description</label>
        <textarea name="description" rows={4} cols={50} onChange={handleChange}></textarea>
        
        <button className="bg-white p-2 text-black" type='button' onClick={handleSubmit}>submit</button>
    </form>
  )
}