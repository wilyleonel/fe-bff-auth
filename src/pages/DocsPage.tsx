import { useNavigate } from 'react-router-dom';
import { Terminal, Copy, CheckCircle2, Server, Key, Database, Globe, Play, Route, ShieldCheck, ChevronLeft, Lock as LockIcon, Code2 } from 'lucide-react';
import { useState } from 'react';

const DocsPage = () => {
    const navigate = useNavigate();
    const [copiedNode, setCopiedNode] = useState<string | null>(null);

    const handleCopy = (text: string, node: string) => {
        navigator.clipboard.writeText(text);
        setCopiedNode(node);
        setTimeout(() => setCopiedNode(null), 2000);
    };

    const CodeBlock = ({ id, label, code, colorClass }: { id: string, label: string, code: string, colorClass: string }) => {
        const isCopied = copiedNode === id;
        return (
            <div className="bg-[#050505] rounded-xl border border-white/10 overflow-hidden group">
                <div className="flex justify-between items-center px-4 py-2 border-b border-white/10 bg-white/5">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${colorClass}`}>{label}</span>
                    <button
                        onClick={() => handleCopy(code, id)}
                        className={`p-1.5 rounded-md hover:bg-white/10 transition-colors ${isCopied ? 'text-[#00FF41]' : 'text-gray-400'}`}
                    >
                        {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
                <div className="p-4 bg-black/50 overflow-x-auto">
                    <pre className="text-gray-300 font-mono text-xs">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-[#00BFFF] selection:text-white relative overflow-hidden pb-20">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00FF41]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="sticky top-0 z-50 glass border-b border-white/5 backdrop-blur-xl">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-[#00BFFF]/10 rounded-xl border border-[#00BFFF]/20 text-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.2)]">
                            <Terminal className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold text-white tracking-tight leading-none mb-1 shadow-sm">SYSTEM_DOCS</h1>
                            <p className="text-[10px] font-mono tracking-widest text-[#00BFFF] uppercase">Setup & Credentials</p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs font-mono tracking-widest text-gray-300"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        RETURN
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 lg:px-12 py-10 relative z-10 space-y-12">

                {/* Intro Section */}
                <section className="bg-[#050505] rounded-[2rem] p-6 lg:p-10 border border-white/5 relative overflow-hidden border-l-[4px] border-l-[#00BFFF] shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-2xl font-extrabold text-white mb-4 relative z-10 flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-[#00BFFF]" />
                        Arquitectura & Despliegue Local
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-3xl relative z-10">
                        El sistema consta de <strong>3 microservicios core</strong> (Auth, Products, Company), <strong>1 BFF</strong> (Backend For Frontend), un <strong>API Gateway</strong> y <strong>1 frontend en React</strong>. El API Gateway expone el único punto de entrada seguro para el cliente en el puerto 4000.
                    </p>
                </section>

                {/* Grid for Startup Commands */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Play className="w-5 h-5 text-[#00FF41]" />
                        <h3 className="text-xl font-bold text-white tracking-tight">Secuencia de Arranque (Startup)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* 1. Gateway */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#f59e0b]">
                            <Route className="w-5 h-5 text-[#f59e0b] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">1. API Gateway</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">4000</strong>. Punto de entrada único.</p>
                            <CodeBlock id="start-gateway" label="COMANDO" code={"cd api-gateway\nnpm run start:dev"} colorClass="text-[#f59e0b]" />
                        </div>

                        {/* 2. Auth Service */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#ec4899]">
                            <Key className="w-5 h-5 text-[#ec4899] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">2. Auth Service</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">3003</strong>. Emite HTTP_ONLY cookies.</p>
                            <CodeBlock id="start-auth" label="COMANDO" code={"cd auth-service\nnpm run start:dev"} colorClass="text-[#ec4899]" />
                        </div>

                        {/* 3. BFF */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#06b6d4]">
                            <Server className="w-5 h-5 text-[#06b6d4] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">3. BFF Orchestrator</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">3000</strong>. Orquesta a los cores.</p>
                            <CodeBlock id="start-bff" label="COMANDO" code={"cd bff-auth\nnpm run start:dev"} colorClass="text-[#06b6d4]" />
                        </div>

                        {/* 4. Products */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#00FF41]">
                            <Database className="w-5 h-5 text-[#00FF41] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">4. Products Core</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">3001</strong>. Rutas protegidas de recursos.</p>
                            <CodeBlock id="start-products" label="COMANDO" code={"cd products-service\nnpm run start:dev"} colorClass="text-[#00FF41]" />
                        </div>

                        {/* 5. Company */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#00FF41]">
                            <Database className="w-5 h-5 text-[#00FF41] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">5. Company Core</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">3002</strong>. Rutas protegidas empresariales.</p>
                            <CodeBlock id="start-company" label="COMANDO" code={"cd company-service\nnpm run start:dev"} colorClass="text-[#00FF41]" />
                        </div>

                        {/* 6. Frontend */}
                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden group border-t-2 border-t-[#8B5CF6]">
                            <Globe className="w-5 h-5 text-[#8B5CF6] mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">6. React Frontend</h4>
                            <p className="text-[#a1a1aa] text-xs mb-4">Puerto: <strong className="text-white">5173</strong>. Orquestando peticiones al 4000.</p>
                            <CodeBlock id="start-frontend" label="COMANDO" code={"cd frontend-bff\nnpm run dev"} colorClass="text-[#8B5CF6]" />
                        </div>

                    </div>
                </section>

                {/* Environment Variables Section */}
                <section className="bg-[#050505] rounded-[2rem] p-6 lg:p-10 border border-white/5 relative overflow-hidden border-l-[4px] border-l-[#00FF41] shadow-xl">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00FF41] opacity-5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <Terminal className="w-6 h-6 text-[#00FF41]" />
                        <h2 className="text-2xl font-extrabold text-white">Configuración de Entorno (.env)</h2>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Los microservicios (especialmente <code>auth-service</code>) requieren configuración estricta de variables de entorno para conectarse con AWS Cognito. Si falta alguna variable, el backend lanzará un error de validación de <strong>Joi</strong> al iniciar.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="text-sm font-bold text-[#00FF41] mb-4 flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-[#00FF41]" />
                                Ejemplo de archivo .env (auth-service)
                            </h4>
                            <CodeBlock
                                id="env-example"
                                label=".ENV"
                                code={
                                    `AWS_REGION=region
COGNITO_USER_POOL_ID=us-east-XXXXXXXX
COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
COGNITO_ISSUER=https://cognito-XXXXXXXX
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
COGNITO_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=3003`
                                }
                                colorClass="text-[#00FF41]"
                            />
                        </div>
                    </div>
                </section>

                {/* Credentials Section */}
                <section className="bg-[#050505] rounded-[2rem] p-6 lg:p-10 border border-white/5 relative overflow-hidden border-l-[4px] border-l-[#8B5CF6] shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <Key className="w-6 h-6 text-[#8B5CF6]" />
                        <h2 className="text-2xl font-extrabold text-white">Credenciales y Acceso</h2>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            La plataforma utiliza <strong>AWS Cognito</strong> como proveedor de identidad. No existen usuarios pre-creados con contraseñas por defecto en código fuente por motivos de seguridad.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></span>
                                ¿Cómo iniciar sesión?
                            </h4>
                            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-400">
                                <li>Navega a la interfaz de React e inicia el flujo de <strong className="text-white">INITIALIZE LOGIN</strong>.</li>
                                <li>Haz clic en <strong className="text-[#00BFFF]">Registrar nueva identidad</strong> en la parte inferior del formulario.</li>
                                <li>Crea una cuenta utilizando un correo válido (requerido por AWS Cognito).</li>
                                <li>Verifica el código enviado a tu correo o valida directamente en la consola de AWS.</li>
                                <li>Inicia sesión con las credenciales recién creadas.</li>
                            </ol>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                                Seguridad de la Sesión
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Al iniciar sesión, el <code>auth-service</code> intercambia la prueba de identidad con Cognito y setea <strong className="text-[#8B5CF6]">dos cookies HTTP_ONLY</strong> en tu navegador:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex gap-3 bg-black/40 p-4 rounded-lg border border-white/5">
                                    <div className="mt-0.5"><LockIcon className="w-4 h-4 text-[#8B5CF6]" /></div>
                                    <div>
                                        <strong className="text-white text-xs block mb-1">access_token</strong>
                                        <span className="text-xs text-gray-500">Usado por el Gateway y BFF para autorizar llamadas a los microservicios core. Es invisible para React.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 bg-black/40 p-4 rounded-lg border border-white/5">
                                    <div className="mt-0.5"><LockIcon className="w-4 h-4 text-[#8B5CF6]" /></div>
                                    <div>
                                        <strong className="text-white text-xs block mb-1">id_token</strong>
                                        <span className="text-xs text-gray-500">Contiene la información del perfil del usuario (email, sub, roles).</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
                        END OF DOCUMENTATION // Bricohen Design System
                    </p>
                </div>

            </main>
        </div>
    );
};

export default DocsPage;
