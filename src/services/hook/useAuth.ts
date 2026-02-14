import { useState, useEffect, useCallback } from 'react';
import { authService,   } from '../api/auth.service';
import type { IUserProfile } from '../api/auth.interface.dto';

export const useAuth = () => {
    const [user, setUser] = useState<IUserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Login
    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            setError(null);
            const userData = await authService.login({ email, password });
            setUser(userData);
            return userData;
        } catch (err: unknown) {
            if (
                typeof err === 'object' &&
                err !== null &&
                'response' in err
            ) {
                const axiosErr = err as { response?: { data?: { message?: string } } };
                setError(axiosErr.response?.data?.message ?? 'Error de autenticación');
            } else {
                setError('Error de autenticación');
            }
            throw err;
        }finally {
            setLoading(false);
        }

    };

    // Logout
    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
        } catch (err) {
            console.error('Error al cerrar sesión:', err);
        }
    };

    // Obtener perfil
    const fetchProfile = useCallback(async () => {
        try {
            const userData = await authService.getProfile();
            setUser(userData);
            return userData;
        } catch (err) {
            console.log(err)
            setUser(null);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Verificar autenticación
    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return {
        user,
        loading,
        error,
        login,
        logout,
        fetchProfile,
        isAuthenticated: !!user,
    };
};