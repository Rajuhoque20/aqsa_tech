import { useOrgContext } from "@/context/orgContext"

 export default function ContactMap(){
    const data=useOrgContext(); 
    return(
         <div className="relative md:w-3/4 w-full transition hover:scale-105 ">                                 
               <iframe 
                width="100%" 
                height="500" 
                loading="lazy"
                src={data?.mapLink}>
                </iframe>     
        </div>
    )
}