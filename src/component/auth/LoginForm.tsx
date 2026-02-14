import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInForm } from './SignInForm';
import { RegisterForm } from './RegisterForm';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-200 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">

                {/* Tabs Header */}
                <div className="flex border-b border-slate-800">
                    <button
                        onClick={() => setIsLoginView(true)}
                        className={`flex-1 py-4 text-center font-medium transition-colors ${isLoginView
                            ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-500'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        onClick={() => setIsLoginView(false)}
                        className={`flex-1 py-4 text-center font-medium transition-colors ${!isLoginView
                            ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-500'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                    >
                        Registrarse
                    </button>
                </div>

                <div className="p-8">
                    {/* Header Text */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">
                            {isLoginView ? 'Bienvenido de nuevo' : 'Crear nueva cuenta'}
                        </h1>
                        <p className="text-slate-400 text-sm">
                            {isLoginView
                                ? 'Ingresa tus credenciales para acceder'
                                : 'Completa el formulario para registrarte'}
                        </p>
                    </div>

                    {/* Content */}
                    {isLoginView ? (
                        <SignInForm />
                    ) : (
                        <RegisterForm onSuccess={() => setIsLoginView(true)} />
                    )}

                    <div className="mt-8 text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                        >
                            ← Volver al inicio
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
