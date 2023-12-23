import Link from "next/link"

export default function Navbar(){

  return (
    <nav className="w-full p-4 bg-sky-700 text-white flex justify-around items-center">
      <h1 className="text-2xl font-semibold text-sky-200 px-1  border-2 border-white-30 skew-x-12 " >Work-Manager</h1>
      <div className="flex gap-6 text-base items-center ">
        <Link href='/home' className="hover:text-sky-300 focus:text-sky-300">Show tasks</Link>
        <Link href='/addwork' className="hover:text-sky-300 focus:text-sky-300">Add Task</Link>
        <Link href='/signin' className="hover:text-sky-300 focus:text-sky-300">Login</Link>
        <Link href='/signup' className="bg-sky-600 p-2 rounded-2xl  font-light focus:text-sky-800 hover:bg-sky-800 hover:text-sky-500  transition-all">Signup</Link>
      </div>
    </nav>
  )
}