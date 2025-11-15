import { schools } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { Title } from '../Title'

const TopSubscriber = () => {
  return (
    <div className='px-30 flex flex-col gap-10'>
        <Title >OUR TOP SUBSCRIBERS</Title>
    <div className='grid grid-cols-2 gap-10'>
        {schools?.map((item)=>{
            return(
                <div key={item.name} className='flex r gap-5 bg-blue-50 p-10 rounded-sm shadow'>

                    <Image
                    alt={item.logo}
                    src={item.logo}
                    width={70}
                    height={70}
                    className='rounded-md'
                    />
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                         <p>{item.location}</p>
                         <a href={item.websiteURL} className='text-blue-500'>{item.websiteURL}</a>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default TopSubscriber