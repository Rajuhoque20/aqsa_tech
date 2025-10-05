
import React from 'react'
import LoginButton from './LoginButton';

const footerData=[
  {
    title:"Social Links",
    data:[
      {
        id:1,
        title:"Facebook",
        url:"/procedure"
      },
      {
        id:2,
        title:"You Tube",
        url:"/procedure"
      },
      {
        id:3,
        title:"Linkedin",
        url:"/procedure"
      },
      {
        id:4,
        title:"Git Hub",
        url:"/procedure"
      },
    ]
  },

  {
    title:"Contact Us",
    data:[
      {
        id:1,
        title:"+91 7047082113",
        url:null,
      },
      {
        id:2,
        title:"Aqsa Tech",
        url:null
      },
      {
        id:3,
        title:"Takagach, Cooch Behar-736101",
        url:null,
      },
      {
        id:4,
        title:"https://www.aqsatech.com",
        url:null,
      },
    ]
  }
];

export default function Footer() {
    
  return (
    <div className='h-max flex flex-col md:flex-row items-center justify-between bg-gray-800 p-5 gap-5 md:p-20'>
      <div className='flex justify-between md:w-4/5 w-full flex-wrap gap-5'>
        {footerData?.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col gap-2'>
              <h2 className='text-yellow-600 text-xl'>{item.title}</h2>
              {item?.data?.map((item2)=>{
                return(
                  <span key={item2.id}>{item2.title}</span>
                )
              })}
              
            </div>
          )
        })}
          <LoginButton/>
      </div>
    
     
    </div>
  )
}
