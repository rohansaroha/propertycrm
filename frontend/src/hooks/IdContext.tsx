import React, { useState, createContext } from "react";

export const IdContext = createContext({
    id: 0,
});

export const IdProvider = ({ children }:{children:React.ReactNode})=>{
    const [id,setId] = useState<number>(1);
    const [subId,setSubId] = useState<number>(1);
    // @ts-ignore
    return <IdContext.Provider value={{ itemsId: [id,setId], subItemsId: [subId,setSubId] }}>{children}</IdContext.Provider>;
};

