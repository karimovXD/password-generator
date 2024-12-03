import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://api.api-ninjas.com/v1/passwordgenerator"
})

export default axiosInstance;