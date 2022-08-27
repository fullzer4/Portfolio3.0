import axios from "axios";

import { createContext, useState } from "react";

export const GithubContext = createContext<any>(()=>{})

export const GithubProvider = ({ children }: any) => {

    const [urlgit, setUrlgit] = useState("")
    const [reposgit, setReposgit] = useState("")
    const [avatargit, setAvatargit] = useState("")


    function pegardadosgit(){
        axios.get('https://api.github.com/users/fullzer4').then(resp => {
        setUrlgit(resp.data.html_url)
        setReposgit(resp.data.public_repos)
        setAvatargit(resp.data.avatar_url)
        });
    }

    return(
        <GithubContext.Provider value={{
            pegardadosgit,
            urlgit,
            reposgit,
            avatargit
            }}> 
            {children}
        </GithubContext.Provider>
    )
}