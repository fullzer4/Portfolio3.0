import axios from "axios";

import { createContext, useState } from "react";

export const YoutubeContext = createContext<any>(()=>{})

export const YoutubeProvider = ({ children }: any) => {

    return(
        <YoutubeContext.Provider value={{
            }}> 
            {children}
        </YoutubeContext.Provider>
    )
}