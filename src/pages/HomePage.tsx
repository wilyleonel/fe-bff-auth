import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Shield, Server, Lock, Cpu, Cloud } from 'lucide-react';

const HomePage = () => {
    const { isAuthenticated } = useAuthContext();

    const features = [
        { icon: <Server size={20} />, text: 'NestJS con arquitectura hexagonal' },
        { icon: <Cpu size={20} />, text: 'React + TypeScript' },
        { icon: <Lock size={20} />, text: 'Autenticación con cookies HttpOnly' },
        { icon: <Shield size={20} />, text: 'Patrón Backend For Frontend' },
        { icon: <Cloud size={20} />, text: 'Integración con AWS Cognito (mock)' },
    ];

    const securityFeatures = [
        'Cookies HttpOnly & Secure',
        'SameSite Strict Policy',
        'Security Headers (CSP, HSTS)',
        'Validación de entrada en capas',
        'Rate limiting configurable',
        'JWT encryption',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br flex flex-col  from-gray-950 via-black to-gray-900 text-gray-100">
            {/* Header */}
            <header className="border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
                <div className="px-6 sm:px-10 lg:px-16 py-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                BFF Security Platform
                            </h1>
                            <p className="mt-1 text-sm text-gray-400 font-light">
                                Secure authentication with Hexagonal Architecture
                                Simplified for Enterprise Application
                            </p>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700">
                                v1.2.0  Beta+
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full px-6 sm:px-10 lg:px-16 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-50">
                            Enterprise-Grade Authentication Solution
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl">
                            Una implementación profesional de autenticación segura utilizando el patrón BFF
                            con cookies HttpOnly y arquitectura hexagonal para aplicaciones de misión crítica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Features */}
                        <section className="lg:col-span-2">
                            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
                                <div className="flex items-center mb-8">
                                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 mr-3">
                                        <Server className="text-blue-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-50">
                                        Arquitectura del Sistema
                                    </h3>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                                            <div className="text-blue-400 mr-3">
                                                {feature.icon}
                                            </div>
                                            <span className="text-gray-300">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                {isAuthenticated ? (
                                    <Link
                                        to="/dashboard"
                                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Acceder al Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Iniciar Sesión / Registrarse
                                    </Link>
                                )}
                            </div>

                        </section>

                        {/* Security Panel */}
                        <aside>
                            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 h-full backdrop-blur-sm">
                                <div className="flex items-center mb-8">
                                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 mr-3">
                                        <Shield className="text-green-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-50">
                                        Medidas de Seguridad
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {securityFeatures.map((feature, index) => (
                                        <div key={index} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Status Indicator */}
                                <div className="mt-8 pt-6 border-t border-gray-800">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Estado del sistema:</span>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                                            <span className="text-sm font-medium text-green-400">Operacional</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                            <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                            <div className="text-sm text-gray-400">Uptime garantizado</div>
                        </div>
                        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                            <div className="text-2xl font-bold text-green-400 mb-2">256-bit</div>
                            <div className="text-sm text-gray-400">Encriptación AES</div>
                        </div>
                        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                            <div className="text-2xl font-bold text-cyan-400 mb-2">ISO 27001</div>
                            <div className="text-sm text-gray-400">Certificación seguridad</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 bg-gray-900/30 px-6 sm:px-10 lg:px-16 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">
                            © 2024 BFF Security Platform. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                            Política de Privacidad
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                            Términos de Servicio
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                            Soporte
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;