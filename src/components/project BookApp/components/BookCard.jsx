
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";

export default function BookCard({data,handleLikeList}) {
    const {title,author,image,language,pages}=data;

    const[color,setColor]=useState(false);
    function setter(){
         setColor((color)=>(!color));
        handleLikeList(data,color);
        console.log(data)
       
    }
  return (
    <div className='w-full flex justify-between items-start p-4 bg-[#303030] rounded-2xl mb-5'>
        <div className='flex justify-center items-center gap-x-5 text-white '>
            <img src={image} alt={title}/>
            <div className='gap-y-8 flex flex-col'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-xl'>{author}</p>
                <p className='text-stone-400'>{language}<span className='mx-2'>{pages} Pages</span></p>
            </div>
        </div>
        <button onClick={setter}  className="cursor-pointer hover:scale-120 transition-all duration-150"><GoHeartFill className={color ? "text-red-500 w-[25px] h-[25px]" :"text-white w-[25px] h-[25px]"} /></button>
    </div>
  )
}
