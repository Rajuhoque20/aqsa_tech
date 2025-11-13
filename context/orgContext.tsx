import { School } from "@/types";
import { createContext, ReactNode, useContext } from "react";


const OrgContext=createContext<null|School>(null);

 export const OrgContextProvider=({
    children,
    data,
}:{
    children:ReactNode,
    data:School,
})=>{
   return(
    <OrgContext.Provider value={data}>
      {children}
    </OrgContext.Provider>
   )
}

export const useOrgContext=()=>useContext(OrgContext);
