import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { SignInForm } from './SignInForm';
import { RegisterForm } from './RegisterForm';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useAuthContext();
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect(() => {
        if (!loading && isAuthenticated) {
            navigate('/selection', { replace: true });
        }
    }, [isAuthenticated, loading, navigate]);

    return (
        <div className="min-h-screen w-full bg-[#000000] text-gray-200 flex items-center justify-center p-4 font-sans selection:bg-[#00FF41] selection:text-black relative overflow-hidden">

            {/* Ambient lighting */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00FF41]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-md glass border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative z-10">

                {/* Tabs Header */}
                <div className="flex border-b border-white/10">
                    <button
                        onClick={() => setIsLoginView(true)}
                        className={`flex-1 py-5 text-center text-xs font-mono font-bold tracking-widest transition-all ${isLoginView
                            ? 'bg-[#00FF41]/10 text-[#00FF41] border-b-2 border-[#00FF41]'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                            }`}
                    >
                        INIT_SESSION
                    </button>
                    <button
                        onClick={() => setIsLoginView(false)}
                        className={`flex-1 py-5 text-center text-xs font-mono font-bold tracking-widest transition-all ${!isLoginView
                            ? 'bg-[#00BFFF]/10 text-[#00BFFF] border-b-2 border-[#00BFFF]'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                            }`}
                    >
                        REGISTER_NODE
                    </button>
                </div>

                <div className="p-8 sm:p-10">
                    {/* Header Text */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6">
                            <div className={`w-3 h-3 rounded-full animate-pulse ${isLoginView ? 'bg-[#00FF41]' : 'bg-[#00BFFF]'}`}></div>
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                            {isLoginView ? 'Sistema de Acceso' : 'Registro de Entidad'}
                        </h1>
                        <p className="text-gray-400 text-sm">
                            {isLoginView
                                ? 'Autenticación requerida para acceder al cluster.'
                                : 'Registra un nuevo nodo en la malla.'}
                        </p>
                    </div>

                    {/* Content */}
                    {isLoginView ? (
                        <SignInForm />
                    ) : (
                        <RegisterForm onSuccess={() => setIsLoginView(true)} />
                    )}

                    <div className="mt-10 text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="text-gray-500 hover:text-white text-xs font-mono tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto"
                        >
                            <span>&#8592;</span> VOLVER AL DASHBOARD
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
