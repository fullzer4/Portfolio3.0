import axios from "axios";

import { createContext, useState } from "react";

export const InstagramContext = createContext<any>(()=>{})

export const InstagramProvider = ({ children }: any) => {

    return(
        <InstagramContext.Provider value={{
            }}> 
            {children}
        </InstagramContext.Provider>
    )
}