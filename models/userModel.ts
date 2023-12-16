import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
   
    title:{
      type:String,
      required:[true, 'Please enter the title'],
      unique:true,
    },
    description:{
      type:String,
      required:[true, 'Please enter description'],
    }, 
   createdAt:{
    type:Date,

   },
   isPending:{
    type:String,
    required:true
   }
})

const Task= mongoose.models.tasks || mongoose.model('tasks',userSchema)

export default Task;