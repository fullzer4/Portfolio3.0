import { createContext, useState } from "react";

export const NavbarSelectContext = createContext<any>(()=>{})

export const NavbarSelectProvider = ({ children }: any) => {

    function pageselector(){

    }

    return(
        <NavbarSelectContext.Provider value={{

            }}> 
            {children}
        </NavbarSelectContext.Provider>
    )
}