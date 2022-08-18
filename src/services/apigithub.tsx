import axios from "axios";

import { createContext, useState } from "react";

export const GithubContext = createContext<any>(()=>{})

export const GithubProvider = ({ children }: any) => {

    const [user, setUser] = useState("")
    
    function pegardados(){
        axios.get('https://api.github.com/users/fullzer4').then(resp => {
    
        console.log(resp.data);
        setUser(resp.data.login)
        console.log(user)
        });
    }

    return(
        <GithubContext.Provider value={{
            pegardados
            }}> 
            {children}
        </GithubContext.Provider>
    )
}