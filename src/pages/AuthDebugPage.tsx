import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const AuthDebugPage = () => {
    const { user, loading, isAuthenticated, fetchProfile } = useAuthContext();

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
                <p className="text-xl">Verificando sesión...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-10">
            <h1 className="text-3xl font-semibold mb-6">
                Auth Debug Page
            </h1>

            <div className="space-y-4">
                <p>
                    <strong>¿Autenticado?</strong>{' '}
                    <span className={isAuthenticated ? 'text-green-400' : 'text-red-400'}>
                        {isAuthenticated ? 'SÍ' : 'NO'}
                    </span>
                </p>

                <div className="bg-slate-900 border border-slate-800 rounded-md p-4">
                    <h2 className="text-xl mb-2">Usuario</h2>
                    <pre className="text-sm text-slate-300">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>

                <button
                    onClick={fetchProfile}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                    Volver a verificar /auth/me
                </button>
            </div>
        </div>
    );
};
