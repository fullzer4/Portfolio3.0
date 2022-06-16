import axios from "axios";

const discord = axios.create({
    baseURL: "https://discordapp.com/api/guilds/985861782788800522/widget.json"
})

export default discord;