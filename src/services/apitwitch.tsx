import axios from "axios";

import { createContext, useState } from "react";

export const TwitchContext = createContext<any>(()=>{})

export const TwitchProvider = ({ children }: any) => {
    
    function pegardados(){
        axios.get('https://api.github.com/users/fullzer4').then(resp => {
    
        console.log(resp.data);
        var a = resp.data
        });
    }

    return(
        <TwitchContext.Provider value={{
            pegardados
            }}> 
            {children}
        </TwitchContext.Provider>
    )
}