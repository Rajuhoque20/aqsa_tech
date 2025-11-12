'use client'
import { useOrgContext } from '@/context/orgContext';
import React from 'react'

export default function Footer() {
  const data=useOrgContext();
  const footerData=[
  {
    title:"Admission",
    data:[
      {
        id:1,
        title:"Procedure",
        url:"/procedure"
      },
      {
        id:2,
        title:"Guideline",
        url:"/procedure"
      },
      {
        id:3,
        title:"Form Available",
        url:"/procedure"
      },
      {
        id:4,
        title:"Result",
        url:"/procedure"
      },
    ]
  },
  {
    title:"Scholarship",
    data:[
      {
        id:1,
        title:"WBMDFC",
        url:"/procedure"
      },
      {
        id:2,
        title:"Post Metrice",
        url:"/procedure"
      },
      {
        id:3,
        title:"Pre Metric",
        url:"/procedure"
      },
      {
        id:4,
        title:"Aikyashree",
        url:"/procedure"
      },
    ]
  },
  {
    title:"Contact Us",
    data:[
      {
        id:1,
        title:data?.phone,
        url:null,
      },
      {
        id:2,
        title:data?.name,
        url:null
      },
      {
        id:3,
        title:data?.location,
        url:null,
      },
      {
        id:4,
        title:data?.websiteURL,
        url:null,
      },
    ]
  }
];

  return (
    <div className='h-max flex flex-col md:flex-row items-center justify-between bg-gray-800 p-5 gap-5 md:p-20'>
      <div className='flex justify-between md:w-4/5 w-full flex-wrap gap-5'>
        {footerData?.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col gap-2'>
              <h2 className='text-yellow-600 text-xl'>{item.title}</h2>
              {item?.data?.map((item2)=>{
                return(
                  <span key={item2.id} className='text-white'>{item2.title}</span>
                )
              })}
            </div>
          )
        })}         
      </div>
    </div>
  )
}
