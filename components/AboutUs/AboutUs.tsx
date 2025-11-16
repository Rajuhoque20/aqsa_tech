import Image from "next/image"
import { Title } from "../Title"

export const AboutUs=()=>{
    return(
        <div className="flex flex-col gap-5 px-5 md:px-30 md:my-30 my-20"  id="about">
             <Title>ABOUT US</Title>
             <p>Aqsa Tech provides dynamic and interactive websites tailored for industries such as Education, Health Care, Finance, and Food Services.
We focus on building user-friendly and performance-optimized platforms that enhance engagement and streamline operations.
Our solutions are crafted with modern technologies to ensure reliability, speed, and long-term scalability.
From simple portals to advanced custom systems, Aqsa Tech delivers digital experiences that truly make an impact.</p>
           
{/* 
            <h2 className="text-black text-2xl font-semibold mt-8 mb-3">Founder&apos;s Desk</h2> */}
            <h2 className="text-2xl font-semibold mt-5">Founder&apos;s Desk</h2>
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="relative md:w-1/4 h-[30rem] md:h-[20rem]  transform transition hover:scale-105">
                     <Image
                     className="rounded-md"
                     style={{boxShadow:'0px 0px 20px rgba(0,0,0,0.5'}}
                     src='/general_sec.jpg'
                     alt='/general_sec.jpg'
                     fill={true}
                     objectFit="fill"
                     />
                </div>
               
            <p className="text-gray-700 w-full md:w-3/4">
               Founded in 2025, Aqsa Tech stands as the first and only tech company based in Cooch Behar. We are driven by the vision of bringing modern digital solutions to businesses and institutions across multiple sectors. At Aqsa Tech, we specialize in building dynamic, interactive, and user-friendly websites that empower organizations to grow online. Our expertise spans across Education, Finance, Healthcare, Food Ordering, and many other industries.

We combine creativity with technology to deliver custom web solutions that are not only visually appealing but also performance-driven. Our mission is to make Cooch Behar a rising name on the digital innovation map of India — starting with every client we serve. Whether you’re a startup, a school, or an established business, Aqsa Tech ensures your online presence reflects your brand’s full potential.

We believe that technology should be accessible, affordable, and impactful, no matter the size of your business. Our team of skilled developers, designers, and strategists work collaboratively to turn your ideas into powerful digital experiences. From intuitive UI/UX design to seamless backend development, we focus on delivering excellence in every line of code.

Aqsa Tech doesn’t just create websites — we create digital identities that leave lasting impressions. We value innovation, reliability, and client satisfaction, ensuring that every project we take on adds measurable value. With a commitment to continuous learning and adaptation, we stay ahead of emerging trends to offer cutting-edge solutions that truly make a difference.

Our vision extends beyond technology — it’s about building a digital future for Cooch Behar and beyond. As we grow, we aim to inspire local talent, create opportunities, and contribute to the development of a thriving tech ecosystem in our region.

At Aqsa Tech, we don’t just follow trends — we set them. Let’s build something extraordinary — together.
            </p>
            </div>
        </div>
    )
}