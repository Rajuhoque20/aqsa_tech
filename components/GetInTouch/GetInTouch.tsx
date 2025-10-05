import ContactForm from "../Contact/ContactForm";
import { Title } from "../Title";

export default function GetInTouch(){
    return(
         <div className="flex flex-col gap-5 px-5 md:px-30 md:my-30 my-20 md:w-3/5 mx-auto">
            <div className="mx-auto">
                  <Title>GET IN TOUCH</Title>
            </div>
          
            <ContactForm/>
        </div>
    )
}