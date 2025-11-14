
import { useOrgContext } from "@/context/orgContext";
import { FaPhone, FaEnvelope, } from "react-icons/fa";
 export default function ContactMap(){
    const data=useOrgContext();
    return(
         <div className="relative md:w-3/4 w-full transition hover:scale-105 "> 
                                 
                <iframe
                width="100%"
                height="500"                  
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.849738168825!2d89.454095!3d26.2595147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2fc93680a19df%3A0x6298a069fcd51a9e!2sAl%20Ansar%20Mission!5e0!3m2!1sen!2sin!4v1700000000000"
                    ></iframe>               
        </div>
    )
}