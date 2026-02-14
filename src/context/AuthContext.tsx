import React, { createContext, useContext, type ReactNode } from 'react';
import { useAuth } from '../services/hook/useAuth';

interface AuthContextType {
    user: any;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    fetchProfile: () => Promise<any | null>; 
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext debe usarse dentro de AuthProvider');
    }
    return context;
};