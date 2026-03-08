import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export const SignInForm = () => {
    const { login, error, loading } = useAuthContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/selection');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-[#FF003C]/10 border border-[#FF003C]/30 text-[#FF003C] px-4 py-3 rounded-xl text-xs font-mono tracking-widest text-center">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Identificación [Email]</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FF41]/50 focus:ring-1 focus:ring-[#00FF41]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="operador@sistema.net"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-500 mb-2 uppercase">Clave de Acceso</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FF41]/50 focus:ring-1 focus:ring-[#00FF41]/50 transition-colors placeholder:text-gray-700 text-sm font-mono"
                        placeholder="••••••••"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00FF41] hover:bg-[#00cc33] text-black font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6 text-sm flex justify-center items-center gap-2"
            >
                {loading ? 'AUTENTICANDO...' : 'INICIAR SESIÓN'}
            </button>
        </form>
    );
};
