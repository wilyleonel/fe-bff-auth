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
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-[#FF003C]/10 border border-[#FF003C]/30 text-[#FF003C] px-4 py-3 rounded-xl text-xs font-mono tracking-widest text-center">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] px-4 py-3 rounded-xl text-xs font-mono tracking-widest text-center">
                    {success}
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Identificación de Nodo [Nombre]</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 focus:ring-1 focus:ring-[#00BFFF]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="ej. Operador Alpha"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Canal de Comunicación [Email]</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 focus:ring-1 focus:ring-[#00BFFF]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="alpha@sistema.net"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Clave de Cifrado [Password]</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 focus:ring-1 focus:ring-[#00BFFF]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="Mínimo 8 caracteres"
                        required
                        minLength={8}
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Verificar Clave</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 focus:ring-1 focus:ring-[#00BFFF]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="Repite la clave"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00BFFF] hover:bg-[#0099cc] text-black font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6 text-sm flex justify-center items-center gap-2"
            >
                {loading ? 'ENSAMBLANDO NODO...' : 'REGISTRAR NODO'}
            </button>
        </form>
    );
};