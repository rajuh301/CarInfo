'use service'

import envConfig from "@/src/config/envConfig";
import Cookies from "js-cookie";




export const addComent = async (comment: string, itemId: string) => {
    try {
        const token = Cookies.get('accessToken');

        if (!token) {
            throw new Error("No access token found");
        };
       

        const baseApi = envConfig.baseApi;
        const response = await fetch(`${baseApi}/items/${itemId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: comment,

        });

        if (!response.ok) {
            throw new Error(`Failed to add comment: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error: any) {
        throw new Error(error.message || "Failed to create comment");
    }
};
