import axios from "axios";

import { createContext, useState } from "react";

export const GithubContext = createContext<any>(()=>{})

export const GithubProvider = ({ children }: any) => {

    const [user, setUser] = useState("")
    const [followers, setFollowers] = useState("")
    const [url, setUrl] = useState("")
    const [repos, setRepos] = useState("")
    const [avatar, setAvatar] = useState("")




    function pegardados(){
        axios.get('https://api.github.com/users/fullzer4').then(resp => {
    
        console.log(resp.data);
        setUser(resp.data.login)
        setFollowers(resp.data.followers)
        setUrl(resp.data.html_url)
        setRepos(resp.data.public_repos)
        setAvatar(resp.data.avatar_url)
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