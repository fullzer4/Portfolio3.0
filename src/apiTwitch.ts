import axios from "axios"

let api = axios.create({
    headers: {
        "Client-ID": "v64gpge5vwke3so64bmd2om0fq6lei"
    }
})

export default api;