import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // Opcional: icono de éxito

export default function LoginSuccess() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center bg-slate-900 border border-slate-800 rounded-xl p-8">
                {/* Icono de éxito (opcional, instala: npm install lucide-react) */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">¡Inicio de sesión exitoso!</h1>

                <p className="text-lg text-slate-300 mb-2">
                    Bienvenido de nuevo a la plataforma
                </p>

                <p className="text-slate-400 mb-8">
                    Serás redirigido automáticamente en unos segundos...
                </p>

                {/* Contador regresivo */}
                <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full">
                        <span className="text-slate-300">Redirigiendo en:</span>
                        <span className="text-blue-400 font-mono text-xl">3</span>
                        <span className="text-slate-400">segundos</span>
                    </div>
                </div>

                {/* Enlaces alternativos */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
                    >
                        Ir al Dashboard ahora
                    </button>
                  
                    <button
                        type="button"
                        onClick={() => navigate('/auth-debug')}
                        className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-lg rounded-md"
                    >
                        Ver página de depuración de autenticación
                    </button>
                </div>

             
            </div>
        </div>
    );
}