import { AboutUs } from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import { Overview } from "@/components/Overview/Overview";
import TechHome from "@/components/TechHome/TechHome";
import TopSubscriber from "@/components/TopSubscriber/TopSubscriber";

export default function Home() {
  return (
    <>
      <TechHome/>
      <AboutUs/>
      <Overview/>
      <TopSubscriber/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}
