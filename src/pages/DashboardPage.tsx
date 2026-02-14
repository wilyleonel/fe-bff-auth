import { useAuthContext } from '../context/AuthContext';

const DashboardPage = () => {
    const { user, logout } = useAuthContext();

    const handleLogout = async () => {
        await logout();
        window.location.href = '/login';
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">

            {/* Header */}
            <header className="border-b border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6">
                    <h1 className="text-2xl lg:text-3xl font-semibold">
                        Dashboard
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-base font-medium"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 w-full px-6 sm:px-10 lg:px-16 py-10">
                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">

                    {/* Perfil */}
                    <section className="2xl:col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-8 lg:p-12">
                        <h2 className="text-xl lg:text-2xl font-medium mb-6">
                            Información del usuario
                        </h2>

                        <div className="space-y-4 text-base lg:text-lg text-slate-300">
                            <p>
                                <span className="text-slate-400">ID:</span>{' '}
                                {user?.id}
                            </p>
                            <p>
                                <span className="text-slate-400">Email:</span>{' '}
                                {user?.email}
                            </p>
                            <p>
                                <span className="text-slate-400">Nombre:</span>{' '}
                                {user?.name}
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-800">
                            <h3 className="text-lg lg:text-xl font-medium mb-4">
                                Seguridad
                            </h3>

                            <ul className="space-y-3 text-base lg:text-lg text-slate-300">
                                <li>Autenticación con cookies HttpOnly</li>
                                <li>Tokens almacenados únicamente en cookies</li>
                                <li>Protección contra XSS</li>
                                <li>SameSite Strict para CSRF</li>
                            </ul>
                        </div>
                    </section>

                    {/* API Test */}
                    <aside className="bg-slate-900 border border-slate-800 rounded-lg p-8 lg:p-12">
                        <h3 className="text-xl lg:text-2xl font-medium mb-6">
                            API
                        </h3>

                        <p className="text-base lg:text-lg text-slate-300 mb-6">
                            Endpoint protegido del BFF
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    'http://localhost:3001/auth/profile',
                                    '_blank'
                                )
                            }
                            className="px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-base font-medium"
                        >
                            Ver perfil en API
                        </button>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
 