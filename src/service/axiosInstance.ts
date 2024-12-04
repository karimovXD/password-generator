import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://api.api-ninjas.com/v1/passwordgenerator",
    headers: {
        "X-Api-Key": "Qy+ldMTR3i2/ovmB+bxnbg==YQy39T3c9LjfLCpf"
    },
    timeout: 5000
})

export default axiosInstance;