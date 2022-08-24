import axios from "axios";

import { createContext, useState } from "react";

export const LinkedinContext = createContext<any>(()=>{})

export const LinkedinProvider = ({ children }: any) => {

    return(
        <LinkedinContext.Provider value={{
            }}> 
            {children}
        </LinkedinContext.Provider>
    )
}