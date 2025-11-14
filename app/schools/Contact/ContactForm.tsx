import { useOrgContext } from "@/context/orgContext"
import { FaPhone, FaEnvelope,FaFacebook  } from "react-icons/fa";


export default function ContactForm(){
    const data=useOrgContext();
    const formatted=[
        {
            title:'Phone',
            value:data?.phone,
            icon:<FaPhone size={20}/>,
            link:'',
        },
        {
            title:'Email',
            value:data?.email,
            icon:<FaEnvelope size={20}/>,
            link:'',
        },
        {
            title:'Whatsapp',
            value:data?.phone,
            icon:<FaPhone size={20}/>,
            link:'',
        },
        {
            title:'Facebook',
            value:data?.phone,
            icon:<FaFacebook  size={20}/>,
            link:'',
        },
        
    ]
    return(
        //  <form className="w-full flex flex-col gap-8">
        //     <div className="flex flex-col gap-2">
        //         <label htmlFor="name" className="text-gray-600 text-xl">Name</label>
        //         <input required type="text" name="name" placeholder="Enter the Name" className="px-5 py-3 border-1 border-gray-300 w-full text-gray-500 rounded-md "/>
        //     </div>
        //     <div className="flex flex-col gap-2">
        //         <label htmlFor="name" className="text-gray-600 text-xl">Email</label>
        //         <input required type="text" name="email" placeholder="Enter the Email" className="px-5 py-3 border-1 border-gray-300 w-full text-gray-500 rounded-md"/>
        //     </div>
        //     <div className="flex flex-col gap-2">
        //         <label htmlFor="name" className="text-gray-600 text-xl">Message</label>
        //         <textarea required name="message" placeholder="Enter the Message" className="px-5 py-3 border-1 border-gray-300 w-full text-gray-500 rounded-md"/>
        //     </div>

        //     <button type="submit" className="bg-blue-700 py-3 px-15 shadow-xl transition hover:scale-105 cursor-pointer rounded-sm text-white w-max self-center">Submit</button>
        // </form>
        <div className="flex shadow-md rounded-sm bg-green-400 p-10 flex-col gap-5" style={{boxShadow:'0px 0px 15px rgba(0,0,0,0.2)'}}>
            <h2 className="font-bold text-white text-2xl">Contact us at:</h2>
            {formatted?.map((item)=>{
                return(
                    <div key={item.title}>
                    <div key={item.title} className="flex text-white items-center gap-2">
                        {item.icon}
                        <div>
                            <p>{item.title}</p>
                            <strong>{item?.value}</strong>
                        </div>
                       
                    </div>
                     <hr style={{ width:'100%', border:'1px solid #fff'}}/>
                    </div>
                    
                )
            })}
        </div>
    )
}