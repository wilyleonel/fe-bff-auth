import axios from 'axios';
import { apiConfig } from './api.config';
import type { ILoginRequest, IRegisterRequest, IUserProfile } from './auth.interface.dto';

const authApi = axios.create({
    baseURL: apiConfig.baseUrl,
    withCredentials: apiConfig.withCredentials,
});



export const authService = {
    // Login - Las cookies HttpOnly se establecerán automáticamente
    login: async (data: ILoginRequest): Promise<IUserProfile> => {
        const response = await authApi.post('/auth/login', data);
        return response.data.user;
    },

    // Registro
    register: async (data: IRegisterRequest): Promise<{ message: string }> => {
        const response = await authApi.post('/auth/register', data);
        return response.data;
    },

    // Logout - Limpia las cookies HttpOnly
    logout: async (): Promise<void> => {
        await authApi.post('/auth/logout');
    },

    // Obtener perfil (requiere cookies)
    getProfile: async (): Promise<IUserProfile> => {
        const response = await authApi.get('/auth/me');
        return response.data;
    },

    // Refresh token (automático con cookies)
    refreshToken: async (refreshToken: string): Promise<{ accessToken: string }> => {
        const response = await authApi.post('/auth/refresh', { refreshToken });
        return response.data;
    },

    checkAuth: async (): Promise<boolean> => {
        try {
            console.log('checkAuth');
            await authApi.get('/auth/me');
            return true;
        } catch {
            return false;
        }
    },
};