import React from 'react'
import { GrSearch } from "react-icons/gr";


export default function SearchBox({search,setSearch,searchHandler}) {
    const input={
        type:"text",placeholder:"Search Title"
    }
    function setValue(event){
        const newValue= event.target.value.toLowerCase();
        setSearch(newValue)
    }
  return (
    <div className='flex items-center gap-x-5 px-5 py-10'>
        <input value={search}  onChange={setValue} className='bg-white p-2 outline-none rounded-md w-1/3' type={input.type} placeholder={input.placeholder} />
        <button onClick={searchHandler} className='cursor-pointer bg-blue-800 p-2 rounded-md'><GrSearch className='size-6 text-white' /></button>
    </div>
  )
}
