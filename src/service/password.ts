import axiosInstance from "./axiosInstance"

export const PasswordService = {
    generatePassword: async () => {
        const response = await axiosInstance.post("");
        return response.data
    }
}