'use client'
import React, { ReactNode } from 'react'
type Props={item:{id:string, bg:string, title:string,icon:ReactNode}}
const handleClick=(id:string)=>{
      const el=document.querySelector(`#${id}`);
      el?.scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"start",
      })
    }
export const TabCard = ({item}:Props) => {
  return (
     <div key={item.id} onClick={()=>handleClick(item.id)}  className={`${item.bg} shadow-sm  md:h-full h-max flex  md:w-[300px] w-max items-center justify-center cursor-pointer hover:scale-103 transition rounded-md `} >
      <div className='flex gap-3 items-center flex-col md:flex-row p-3'>
        {item?.icon}
        <span className='text-xl font-semibold'>{item.title}</span>
      </div>
    </div>
  )
}
