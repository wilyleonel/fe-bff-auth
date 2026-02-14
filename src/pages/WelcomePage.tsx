import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const WelcomePage = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full text-center bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
                <h1 className="text-4xl font-bold mb-4 text-blue-500">
                    ¡Bienvenido!
                </h1>

                <p className="text-xl text-slate-300 mb-8">
                    Has iniciado sesión correctamente.
                </p>

                {user && (
                    <div className="bg-slate-800 p-4 rounded-lg mb-8 text-left">
                        <p className="text-sm text-slate-400 mb-1">Usuario:</p>
                        <p className="text-lg font-medium text-white">{user.name || user.email}</p>
                        <p className="text-xs text-slate-500 mt-2 font-mono">{user.email}</p>
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
                    >
                        Ir al Dashboard
                    </button>
                    
                    <button
                        onClick={handleLogout}
                        className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md font-medium transition-colors"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
