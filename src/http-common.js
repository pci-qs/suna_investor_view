import axios from 'axios'

export default axios.create({
    baseURL: "https://demo.suna.ai:5010/api",
    headers: {
        "Content-Type": "application/json"
    }
})