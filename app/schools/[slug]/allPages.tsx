'use client'
import { School } from '@/types'
import React from 'react'
import { BannerHome } from "@/components/Home/Home";
// import { NewsFeed } from "@/components/NewsFeed/NewsFeed";
// import { OurTopper } from "@/components/OurTopper/OurTopper";
// import { Gallery } from "@/components/Gallery/Gallery";

import { OrgContextProvider } from "@/context/orgContext";
import { AboutUs } from '../AboutUs/AboutUs';
import { Overview } from '../Overview/Overview';
import { Contact } from '../Contact/Contact';
import Header from '@/components/Header/Header';
import Footer from '../Footer/Footer';

const AllPages = ({school}:{school:School}) => {
  return (
    <OrgContextProvider data={{...school, logo:'/aqsa_logo.jpg', suit:'An Institue of Eminance',location:school?.location||""}}>
      <Header/>
      <BannerHome/>
    {/* <NewsFeed/>
    <OurTopper/>
    <Gallery/> */}
    <AboutUs/>
    <Overview/>
    <Contact/>
    <Footer/>
    </OrgContextProvider>
  )
}

export default AllPages