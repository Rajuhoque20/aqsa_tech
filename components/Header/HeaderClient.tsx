
import React from 'react'
import { FaHome } from "react-icons/fa"; 
import './Header.css';
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import AdmissionButtion from './AdmissionButton';
import NavButton from './NavButton';
import { useOrgContext } from '@/context/orgContext';

 const links=[
      {
        title:"Home",
        id:'home',
        icon:<FaHome size={20}/>
      },
       {
        title:"About",
        id:'about',
        icon:<FaInfoCircle size={20}/>
      },
       {
        title:"Contact",
        id:'contact',
        icon:<FaComments size={20}/>
      }
    ]
export default function HeaderClient(){
  
    return(
        <div className='h-[8vh] flex flex-col w-full items-center bg-gray-900 justify-center px-5'>
      <div className='w-full flex items-center'>
       
        <div className='md:flex gap-8 hidden text-white'>
          {links?.map(item=><NavButton
          key={item.id}
          data={item}
          />)}
         
        </div>        
        
        <>
        <div className='ml-auto md:gap-5 gap-2 flex flex-col md:flex-row md:items-center mr-3'> 
            <div className='flex items-center gap-3 text-yellow-400'>
              <FaPhone size={20}/>
              <h3>+91 7047082113</h3>  
            </div>
            <div className='flex items-center gap-3 text-orange-400'>
              <FaEnvelope size={20}/>
            <h3>raju.hoque97@gmail.com</h3> 
            </div>        
            <div className='hidden md:block'>
              <AdmissionButtion/>
            </div>
        </div>
         <div className='block md:hidden'>
             <AdmissionButtion/>
          </div>
        </>
       
        
      </div>
      
    </div>
    )
}