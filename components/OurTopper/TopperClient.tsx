'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import { Title } from '../Title';

type TopperDTO={
  image:string,
  marks:string,
  _id:string,
  name:string,
  class:string,
}
const toppersData= [{
  "_id":'1',
  "name": "Neha Parveen",
  "marks": "462",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper1.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id": '2',
  "name": "Afsana Sarmin",
  "marks": "461",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper3.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id": '3',
  "name": "Rezowana Aktar",
  "marks": "457",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper2.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id": '4',
  "name": "Tamanna Najrin",
  "marks": "600",
  "description": "sdfghjkhgfdssdfg",
  "image": "/ansar_topper4.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id":'5',
  "name": "Babli Sarkar",
  "marks": "450",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper5.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id":'6',
  "name": "Afsana Islam",
  "marks": "440",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper6.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id": '7',
  "name": "Olivia Siddika",
  "marks": "480",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "/ansar_topper7.jpg",
  "class": "XII",
  "__v": 0
},
{
  "_id": '8',
  "name": "Hasina Banu",
  "marks": "690",
  "description": "Our Student sang Indian National Anthem in of the National Flag.",
  "image": "/ansar_topper8.jpg",
  "class": "X",
  "__v": 0
}]
      
export const ToppersClient = () => {

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
       
          if (entry.isIntersecting) {
            entry.target.classList.add("topper-card-normal");
          } else {
            entry.target.classList.remove('topper-card-normal');
          }
        
      });
    },
  );

  // Get all valid elements
  const elements = document.querySelectorAll('.topper-card-in');
  elements.forEach((el) => observer.observe(el));
  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}, []);

  return (
   <div className='h-max text-black p-5 md:p-30 gap-5 flex flex-col mt-10 md:mt-0' id="toppers">
         <Title>OUR TOPPERS</Title>
        <div className='grid md:gap-20 gap-8 grid-cols-1 md:grid-cols-4 mt-8'>
          {toppersData?.map((item:TopperDTO)=>(
            <div className={`rounded-md topper-clip flex flex-col items-center gap-3 transform transition hover:scale-105 topper-card-in`} key={item._id} >
              <div className='relative h-[120px] w-[120PX] mx-10'>
              <Image
                style={{boxShadow:'0px 0px 30px skyblue'}}
                className='rounded-md'
              alt={item?.image}
              src={item?.image}
              fill={true}
            
              />
              </div>
              <div className='flex mx-auto flex-col gap-2 items-center'>
              <div className='flex gap-5 items-center font-md' >
              <h1>{item.name}</h1>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-600'></span>
              <p> {item.class}</p>
              </div>
              <p className='text-gray-600 text-xl font-bold'><span className='text-sm'>Marks:</span> {item.marks}</p>
              </div>
            </div>
          ))}
  
        </div>
       
      </div>
  )
}
