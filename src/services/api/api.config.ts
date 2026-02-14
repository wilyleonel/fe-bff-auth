import axios, { AxiosError, type AxiosResponse } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
export const apiConfig = {
    baseUrl: API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
}


export const setupInterceptors = (axiosInstance: typeof axios) => {
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                window.location.href = '/login';
            }
            return Promise.reject(error);
        }
    );
}