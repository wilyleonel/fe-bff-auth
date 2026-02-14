import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { authService } from "../../services/api/auth.service";
import type { IRegisterRequest } from "../../services/api/auth.interface.dto";
import { useAxiosErrorHandler } from "../../services/hook/useAxiosErrorHandler";

interface RegisterFormProps {
    onSuccess?: () => void;
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    // State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Error Handling
    const { error, handleError, clearError } = useAxiosErrorHandler();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        setSuccess("");

        if (!name.trim()) {
            handleError(new Error("El nombre es requerido"));
            return;
        }
        if (password.length < 8) {
            handleError(new Error("La contraseña debe tener al menos 8 caracteres"));
            return;
        }
        if (password !== confirmPassword) {
            handleError(new Error("Las contraseñas no coinciden"));
            return;
        }

        setLoading(true);
        try {
            const registerData: IRegisterRequest = {
                email,
                password,
                name
            };

            await authService.register(registerData);

            setSuccess("¡Usuario creado! Iniciando sesión...");

            // Auto login after registration
            setTimeout(async () => {
                try {
                    await login(email, password);
                    navigate('/welcome');
                    if (onSuccess) onSuccess();
                } catch (loginErr) {
                    setSuccess("Usuario creado. Por favor inicia sesión.");
                    if (onSuccess) onSuccess();
                }
            }, 1500);

        } catch (err) {
            handleError(err, "Error al crear el usuario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="bg-red-950/50 border border-red-900/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-green-950/50 border border-green-900/50 text-green-400 px-4 py-3 rounded-lg text-sm">
                    {success}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nombre Completo</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Tu nombre"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="nombre@ejemplo.com"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Mínimo 8 caracteres"
                    required
                    minLength={8}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Confirmar Contraseña</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Repite la contraseña"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
                {loading ? 'Creando cuenta...' : 'Registrarse'}
            </button>
        </form>
    );
};