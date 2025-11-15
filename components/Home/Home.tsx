'use client'
import Image from "next/image"
import Carousel from "../Carousel/Carousel"
import Link from "next/link"
import  './Home.css'
import { TabCard } from "./TabCard"
import { FaNewspaper, FaStar, FaUserGraduate, FaMapMarkerAlt  } from "react-icons/fa";
import { useOrgContext } from "@/context/orgContext"
import { BannerDTO } from "@/types"
import { banners } from "@/data/banner"

// const banners=[
//     {
//           img:'https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_banner1.jpg',
//           alt:"banner1"
//     },
//     {
//         img:'https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_banner2.jpg',
//          alt:"banner2"
//     },
//     {
//           img:'https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_banner3.jpg',
//            alt:"banner3"
//     }
// ];



 

export const BannerHome=()=>{
    const data=useOrgContext();
    const tabs=[
    {
        title:"News",
        id:'news',
        bg:'bg-red-700',
        icon:<FaNewspaper size={40}/>
    },
     {
        title:"Our Toppers",
        id:'toppers',
        bg:'bg-blue-700',
        icon:<FaUserGraduate size={40}/>
    },
     {
        title:'Why ' +data?.name+'?',
        id:'why_aqsa',
        bg:'bg-gray-800',
        icon:<FaStar size={40}/>
    },
];
    const bannerInfo: BannerDTO[] =data?.name? banners[data?.name] ?? []:[];
    return(
        <div className="flex flex-col md:h-[92vh] h-[400px] w-screen relative text-white" id="home">
               <Carousel
               dataLength={bannerInfo?.length}
               RenderedItem={bannerInfo?.map((item)=>{
                    return(
                        <div className='relative min-w-full h-full flex-shrink-0' key={item.img}>            
                                <Image src={item.img} fill alt={item.alt} 
                                className="object-cover"                     
                                />
                        </div>
                    )
                })}
               />
                <div className='absolute w-full h-full'>   
                    <div className='w-full h-full home-banner-container z-4 relative md:p-10 p-5'>
                        <div className='flex items-center gap-5'>
                            <div className='w-14 h-14 relative rounded-full border-dashed border-white border-1'  >
                                    <Image src={data?.logo||'school logo'} alt="al ansar mission logo"  fill  className='rounded-full'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='md:text-3xl text-2xl font-semibold'>{data?.name}</h1>
                                <small className='text-sm'> {data?.suit}</small>
                            </div>

                            <div className="hidden flex-col self-end ml-auto gap-2 md:flex">
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt size={30}/>
                                     <span className="text-yellow-400 text-xl"
                                     style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.8)" }}
                                     >Location:</span>
                                </div>                              
                                <span className="text-green-200"
                                  style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.8)" }}
                                >{data?.location}</span>
                                
                                <Link style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.8)" }} className="text-blue-500 underline decoration-dotted hover:scale-110 transition"
                                 href='https://www.google.com/maps/place/Al+Ansar+Mission/@26.2595147,89.454095,17z/data=!3m1!4b1!4m6!3m5!1s0x39e2fc93680a19df:0x6298a069fcd51a9e!8m2!3d26.2595099!4d89.4566699!16s%2Fg%2F11c5hzdlwh?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D'
                                 >View Map</Link>
                            </div>

                        </div>
                        <div className='absolute bottom-[-1rem] left-0 flex justify-center w-full h-[150px]'>
                            <div className='h-full flex'>
                                {tabs?.map(item=>{
                                    return(
                                        <TabCard item={item} key={item.id}/>
                                    )
                                })}
                               
                            </div>
                        </div>
                    </div>
                </div>
        </div>       
    )
}