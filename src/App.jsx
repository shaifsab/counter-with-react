import { useState } from 'react'
import './App.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function App() {
const [data, setData] = useState(0)

const handelAdd = ()=>{
  setData(data + 1)
}
const handelRemove = ()=>{
  setData(data - 1)
}
  return (
    <>
<div className="flex gap-5 items-center justify-center min-h-screen bg-red-800">

<button onClick={handelRemove} className='px-7 py-2 bg-slate-300 rounded-2xl text-sky-950 transition-all active:text-gray-700 active:bg-slate-400'><FaMinus /></button>
<div className="text h-5 w-10 flex items-center justify-center">

  <h1 className='text-slate-300  text-4xl font-semibold font-jaro'> {data} </h1>
</div>

<button onClick={handelAdd} className='px-7 py-2 bg-slate-300 rounded-2xl text-sky-950 transition-all active:text-gray-700 active:bg-slate-400 '><FaPlus /></button>


</div>
    </>
  )
}

export default App
