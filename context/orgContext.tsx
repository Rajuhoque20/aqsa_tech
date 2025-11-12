import { createContext, ReactNode, useContext } from "react";

type OrgContextType={
    name:string,
    location:string,
    logo:string,
    suit:string,
    phone?:string,
    websiteURL?:string
}
const OrgContext=createContext<null|OrgContextType>(null);

 export const OrgContextProvider=({
    children,
    data,
}:{
    children:ReactNode,
    data:OrgContextType,
})=>{
   return(
    <OrgContext.Provider value={data}>
      {children}
    </OrgContext.Provider>
   )
}

export const useOrgContext=()=>useContext(OrgContext);
