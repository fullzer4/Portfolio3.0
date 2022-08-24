import axios from "axios";

import { createContext, useState } from "react";

export const TwitchContext = createContext<any>(()=>{})

export const TwitchProvider = ({ children }: any) => {

    return(
        <TwitchContext.Provider value={{
            }}> 
            {children}
        </TwitchContext.Provider>
    )
}