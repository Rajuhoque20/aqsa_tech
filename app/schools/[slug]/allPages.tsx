'use client'
import { School } from '@/types'
import React from 'react'
import { BannerHome } from "@/components/Home/Home";
// import { NewsFeed } from "@/components/NewsFeed/NewsFeed";
// import { OurTopper } from "@/components/OurTopper/OurTopper";
// import { Gallery } from "@/components/Gallery/Gallery";
// import { AboutUs } from "@/components/AboutUs/AboutUs";
// import { Overview } from "@/components/Overview/Overview";
// import { Contact } from "lucide-react";
import { OrgContextProvider } from "@/context/orgContext";

const AllPages = ({school}:{school:School}) => {
  return (
    <OrgContextProvider data={{...school, logo:'/aqsa_logo.jpg', suit:'An Institue of Eminance',location:school?.location||""}}>
      <BannerHome/>
    {/* <NewsFeed/>
    <OurTopper/>
    <Gallery/>
    <AboutUs/>
    <Overview/>
    <Contact/> */}
    </OrgContextProvider>
  )
}

export default AllPages