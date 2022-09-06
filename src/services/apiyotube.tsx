import axios from "axios";

import { createContext, useState } from "react";

export const YoutubeContext = createContext<any>(()=>{})

export const YoutubeProvider = ({ children }: any) => {
    const [urlyoutube, setUrlyoutube] = useState("https://www.youtube.com/channel/UCKsvtOneTEJm9z80MbbfKfg")
    
    return(
        <YoutubeContext.Provider value={{
            urlyoutube,

            }}> 
            {children}
        </YoutubeContext.Provider>
    )
}