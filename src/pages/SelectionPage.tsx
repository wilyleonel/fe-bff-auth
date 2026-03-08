import { useAuthContext } from '../context/AuthContext';
import { ShoppingBag, Building2, LogOut, LogIn, CheckCircle2, ShieldCheck, User, Cpu, Database, Key, Code2, Globe, Route, Blocks, Server, Lock, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SelectionPage = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 p-4 md:p-8 lg:p-12 font-sans selection:bg-[#8B5CF6] selection:text-white relative overflow-hidden">

            {/* Very subtle background light leaks */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Navigation Bar */}
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-8 relative z-50 gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#00FF41] border border-[#00FF41]/30 bg-[#00FF41]/10 px-2 py-1 rounded">SYSTEM_ACTIVE</span>
                    <span className="text-xs font-mono tracking-wider text-gray-500">ROOT // ADMIN</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => navigate('/docs')}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-500/30 bg-gray-500/10 hover:bg-gray-500/20 transition-colors text-xs font-mono tracking-widest text-gray-300"
                    >
                        <Terminal className="w-4 h-4" />
                        DOCS
                    </button>

                    {user && (
                        <>
                            <button
                                onClick={() => navigate('/products')}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 transition-colors text-xs font-mono tracking-widest text-[#8B5CF6]"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                PRODUCTS
                            </button>
                            <button
                                onClick={() => navigate('/company')}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/10 hover:bg-[#00BFFF]/20 transition-colors text-xs font-mono tracking-widest text-[#00BFFF]"
                            >
                                <Building2 className="w-4 h-4" />
                                COMPANY
                            </button>
                            <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>
                        </>
                    )}

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-[#FF003C]/20 hover:text-[#FF003C] hover:border-[#FF003C]/50 transition-colors text-xs font-mono tracking-widest text-gray-400"
                        >
                            <LogOut className="w-4 h-4" />
                            TERMINATE
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#00FF41]/50 bg-[#00FF41]/20 hover:bg-[#00FF41]/30 text-white transition-colors text-xs font-mono tracking-widest"
                        >
                            <LogIn className="w-4 h-4" />
                            INITIALIZE LOGIN
                        </button>
                    )}
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                {/* 1. Profile / Admin Card */}
                <div className="bg-[#050505] rounded-[2rem] p-6 lg:p-8 lg:col-span-5 flex flex-col relative overflow-hidden group border border-white/5 border-l-[4px] border-l-[#00BFFF] hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#00BFFF] opacity-10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="flex items-center gap-5 mb-6 relative z-10">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8B5CF6] p-1">
                                <div className="w-full h-full bg-[#040404] rounded-full flex items-center justify-center border-4 border-black">
                                    <User className="w-8 h-8 text-[#00BFFF]" />
                                </div>
                            </div>
                            <div className="absolute -inset-2 bg-[#00BFFF] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#00BFFF] uppercase mb-1">
                                {user ? 'System Admin' : 'System Visitor'}
                            </h3>
                            <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                {user?.name || 'Guest User'}
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                        <span className="px-4 py-1.5 rounded-sm border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[10px] font-mono font-bold tracking-widest text-[#00BFFF] shadow-[0_0_10px_rgba(0,191,255,0.2)]">SECURITY ENGINEER</span>
                        <span className="px-4 py-1.5 rounded-sm border border-[#00FF41]/30 bg-[#00FF41]/10 text-[10px] font-mono font-bold tracking-widest text-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.2)]">SYSTEMS ARCHITECT</span>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">Tech Stack</span>
                            <div className="flex gap-2">
                                <div className="p-2 rounded-sm border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF]"><ShieldCheck className="w-4 h-4" /></div>
                                <div className="p-2 rounded-sm border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF]"><Cpu className="w-4 h-4" /></div>
                                <div className="p-2 rounded-sm border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF]"><Database className="w-4 h-4" /></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-4">
                            <button className="w-full py-3 rounded-xl border border-[#00FF41]/30 bg-[#00FF41]/10 text-[#00FF41] font-mono text-xs tracking-widest font-bold hover:bg-[#00FF41]/20 transition-colors flex justify-between items-center px-4">
                                <span>SYSTEM STATUS</span>
                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse shadow-[0_0_5px_#00FF41]"></div> OPERATIONAL</span>
                            </button>
                        </div>
                    </div>

                    <div className="absolute -inset-4 bg-gradient-to-b from-[#00BFFF]/0 to-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-0"></div>
                </div>

                {/* 2. Architecture Details (About) */}
                <div className="bg-[#050505] rounded-[2rem] p-6 lg:p-8 lg:col-span-7 flex flex-col relative group overflow-hidden border border-white/5 border-l-[4px] border-l-[#8B5CF6] hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8B5CF6] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h2 className="text-xl font-extrabold text-white tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Architecture Info</h2>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-sm border border-[#FF003C]/50 bg-[#FF003C]/10 shadow-[0_0_10px_rgba(255,0,60,0.2)]">
                            <div className="w-2 h-2 rounded-full bg-[#FF003C] animate-pulse shadow-[0_0_5px_#FF003C]"></div>
                            <span className="text-[10px] font-mono font-bold text-[#FF003C] tracking-widest">LIVE DATA FEED</span>
                        </div>
                    </div>

                    <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
                        <p>
                            El sistema implementa el patrón <strong className="text-white">BFF (Backend For Frontend)</strong>.
                            Este diseño permite aislar la lógica compleja de los microservicios y presentar únicamente los datos exactos que el Frontend necesita, optimizando la carga y reduciendo las peticiones de red.
                        </p>
                        <p>
                            Para la seguridad perimetral, utilizamos <strong className="text-[#ec4899]">AWS Cognito</strong>. Los Access Tokens y Refresh Tokens nunca se exponen al cliente de React. En su lugar, el <span className="text-[#8B5CF6] font-mono bg-[#8B5CF6]/10 px-1 border border-[#8B5CF6]/30 rounded">auth-service</span> de NestJS los intercepta y los empaqueta en <strong className="text-white">Cookies HttpOnly y Secure</strong>, anulando vectores de ataque XSS.
                        </p>
                    </div>

                    <div className="mt-8 space-y-4 relative z-10">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-300">Protección estricta de variables de entorno mediante validación con <strong className="text-white">Joi Schemas</strong> en la capa del módulo de NestJS.</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-300">Filtros de Excepción Globales que interceptan timeouts, fallos de red y dependencias caídas, formateando respuestas legibles.</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-300">Un <strong className="text-[#f59e0b]">API Gateway</strong> customizado proxying el tráfico y preservando contextos de ruta hacia la malla de microservicios internos.</p>
                        </div>
                    </div>

                    <div className="absolute -inset-4 bg-gradient-to-b from-[#8B5CF6]/0 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-0"></div>
                </div>
            </div>

            {/* Architecture Services Explainers - Desktop 2x2 grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 relative z-10 pb-12">

                {/* 1. Cognito Card - Pink/Magenta Theme */}
                <div className="bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] border-l-[#ec4899]">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#ec4899] opacity-10 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border border-[#ec4899]/30 shadow-[0_0_15px_rgba(236,72,153,0.3)] z-10 relative">
                            <Key className="w-4 h-4 text-[#ec4899]" />
                        </div>
                        <div className="px-3 py-1 bg-[#ec4899]/10 rounded-full border border-[#ec4899]/30 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                            <span className="text-[10px] font-bold text-[#ec4899] tracking-widest uppercase">AUTH_LAYER</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-white tracking-tight mb-2">AWS Cognito</h2>
                    <p className="text-[#a1a1aa] text-xs mb-6 leading-relaxed flex-grow">
                        Gestiona la identidad y control de acceso. Genera tokens JWT interceptados por el Auth Service para evitar exposición en el frontend.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ec4899]/5 border border-[#ec4899]/20 text-[10px] font-mono text-gray-300"><Code2 className="w-3 h-3 text-[#ec4899]" /> JWT</span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ec4899]/5 border border-[#ec4899]/20 text-[10px] font-mono text-gray-300"><Lock className="w-3 h-3 text-[#ec4899]" /> HTTP_ONLY</span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ec4899]/5 border border-[#ec4899]/20 text-[10px] font-mono text-gray-300"><Globe className="w-3 h-3 text-[#ec4899]" /> OAUTH2</span>
                    </div>

                    <button className="w-full px-4 py-2 rounded-xl bg-[#ec4899] hover:bg-[#db2777] text-white font-bold text-xs transition-colors flex justify-center items-center gap-2 uppercase tracking-wider">
                        Inspect Flow <span className="font-mono">&gt;</span>
                    </button>
                </div>

                {/* 2. API Gateway Card - Orange/Yellow Theme */}
                <div className="bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] border-l-[#f59e0b]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border border-[#f59e0b]/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10 relative">
                            <Route className="w-4 h-4 text-[#f59e0b]" />
                        </div>
                        <div className="px-3 py-1 rounded-sm border border-[#f59e0b]/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                            <span className="text-[10px] font-mono font-bold text-[#f59e0b] tracking-widest uppercase">PROXY HUB</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-white tracking-tight mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">API Gateway</h2>
                    <p className="text-[#f59e0b] text-[10px] font-mono tracking-widest mb-3 uppercase">&gt; Traffic Router</p>
                    <p className="text-[#a1a1aa] text-xs mb-6 leading-relaxed flex-grow">
                        El punto de entrada expuesto. Actúa como reverso proxy interceptando peticiones CORS y despachándolas a la malla de microservicios internos.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#10b981]/10 border border-[#10b981]/30 text-[10px] font-mono text-[#10b981]"><Globe className="w-3 h-3" /> REVERSE_PROXY</span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[10px] font-mono text-[#8b5cf6]"><ShieldCheck className="w-3 h-3" /> CORS_CTRL</span>
                    </div>

                    <button className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-900/50 hover:bg-gray-800 xl:bg-transparent text-white font-bold text-xs transition-colors flex justify-center items-center gap-2 uppercase tracking-wider">
                        View Routes <span className="font-mono">&gt;</span>
                    </button>
                </div>

                {/* 3. BFF Card - Cyan Theme */}
                <div className="bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] border-l-[#06b6d4]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4] opacity-5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border border-[#06b6d4]/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10 relative">
                            <Blocks className="w-4 h-4 text-[#06b6d4]" />
                        </div>
                        <div className="px-3 py-1 bg-[#06b6d4]/10 rounded-full border border-[#06b6d4]/30">
                            <span className="text-[10px] font-bold text-[#06b6d4] tracking-widest uppercase">FRONTEND_ORCHESTRATOR</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-white tracking-tight mb-2">BFF Service</h2>
                    <p className="text-[#a1a1aa] text-xs mb-6 leading-relaxed flex-grow">
                        El <strong>Backend For Frontend</strong> aisla la interfaz delegando y orquestando llamadas hacia los servicios Core, simplificando la respuesta JSON final.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/20 text-[10px] font-mono text-gray-300"><Server className="w-3 h-3 text-[#06b6d4]" /> NODE_JS</span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/20 text-[10px] font-mono text-gray-300"><Route className="w-3 h-3 text-[#06b6d4]" /> AXIOS_ORCHESTRATOR</span>
                    </div>

                    <button className="w-full px-4 py-2 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-white font-bold text-xs transition-colors flex justify-center items-center gap-2 uppercase tracking-wider">
                        Analyze Orchestrator <span className="font-mono">&gt;</span>
                    </button>
                </div>

                {/* 4. Microservices Card - Neon Green Theme */}
                <div className="bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] border-l-[#00FF41]">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00FF41] opacity-5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border border-[#00FF41]/50 shadow-[0_0_15px_rgba(0,255,65,0.3)] z-10 relative">
                            <Database className="w-4 h-4 text-[#00FF41]" />
                        </div>
                        <div className="px-3 py-1 bg-[#00FF41]/10 rounded-sm border border-[#00FF41]/30">
                            <span className="text-[10px] font-mono font-bold text-[#00FF41] tracking-widest uppercase">CORE_SERVICES</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-white tracking-tight mb-2">Microservicios</h2>
                    <p className="text-[#a1a1aa] text-xs mb-6 leading-relaxed flex-grow">
                        Agrupación de dominios aislados: <strong className="text-white">Auth</strong> (gestión JWT en cookies HTTP-only), <strong className="text-white">Products</strong> y <strong className="text-white">Company</strong> (gestión de recursos mediante NestJS).
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#00FF41]/10 border border-[#00FF41]/30 text-[10px] font-mono text-[#00FF41]"><Cpu className="w-3 h-3" /> NEST_JS</span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#00FF41]/10 border border-[#00FF41]/30 text-[10px] font-mono text-[#00FF41]"><ShieldCheck className="w-3 h-3" /> 3_MICROSERVICES</span>
                    </div>

                    <button className="w-full px-4 py-2 rounded-xl border border-[#00FF41]/50 bg-[#00FF41]/10 hover:bg-[#00FF41]/20 text-[#00FF41] font-bold text-xs transition-colors flex justify-center items-center gap-2 uppercase tracking-wider">
                        Inspect Nodes <span className="font-mono">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectionPage;
