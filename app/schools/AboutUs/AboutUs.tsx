'use client'
import Image from "next/image"
import { Title } from "@/components/Title"
import { useOrgContext } from "@/context/orgContext"
import { aboutUsData } from "@/data/aboutUs"
import { AboutDTO } from "@/types"

export const AboutUs=()=>{
    const data=useOrgContext();
     const aboutInfo: AboutDTO|null = data?.name ? aboutUsData[data.name] ?? null : null;
    return(
        <div className="flex flex-col gap-5 px-5 md:px-30 md:my-30 my-20"  id="about">
             <Title>ABOUT US</Title>
                <p>
                    {data?.name} is one of the top educational institutes in {data?.city}, known for its commitment to quality education, discipline, and student growth.
                    The institution focuses on holistic development, ensuring students excel academically and morally.
                    With dedicated teachers and a supportive environment, it continues to shape bright futures.
                    Its strong values and student-centric approach make it a trusted name in the region.
             </p>
            <h2 className="text-black text-2xl font-semibold mt-5">Mission & Vission</h2>
            <span className="text-gray-700">             
                {aboutInfo?.mission}
            </span>

            <h2 className="text-black text-2xl font-semibold mt-8 mb-3">General Secretary Desk</h2>
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="relative md:w-1/4 h-[20rem] md:h-auto  transform transition hover:scale-105">
                     <Image
                     className="rounded-md"
                     style={{boxShadow:'0px 0px 20px rgba(0,0,0,0.5'}}
                     src={aboutInfo?.photo??''}
                     alt={aboutInfo?.alt??''}
                     fill={true}
                     objectFit="fill"
                     />
                </div>
               
            <span className="text-gray-700 w-full md:w-3/4">
               {aboutInfo?.speech}
            </span>
            </div>
        </div>
    )
}