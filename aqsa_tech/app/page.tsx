import { AboutUs } from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import { Overview } from "@/components/Overview/Overview";
import TechHome from "@/components/TechHome/TechHome";


export default function Home() {
  return (
    <>
    <TechHome/>
      <AboutUs/>
       <Overview/>
     <GetInTouch/>
     <Footer/>
    </>
  );
}
