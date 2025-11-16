import { useOrgContext } from "@/context/orgContext"

 export default function ContactMap(){
    const data=useOrgContext(); 
    return(
         <div className="relative md:w-3/4 w-full transition hover:scale-105 ">                                 
              <iframe
            src={data?.mapLink}
            className="w-full h-[500px] rounded-xl shadow-md"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}