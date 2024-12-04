import axiosInstance from "./axiosInstance"

export const PasswordService = {
    generatePassword: async (length: number, excludeNumber: boolean, excludeSpecialChars: boolean): Promise<{ random_password: string }> => {
        const response = await axiosInstance.get<{ random_password: string }>("", {
            params: {
                length: length,
                exclude_numbers: excludeNumber,
                exclude_special_chars: excludeSpecialChars
            }
        });
        return response.data
    }
}