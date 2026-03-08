import React from 'react';
import { useCompanyProfile } from '../services/hook/useCompany';
import { Building2, Mail, MapPin, Calendar, Briefcase, ArrowLeft, Globe, Shield, Phone, Info, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyPage = () => {
    const { data: company, isLoading, isError, error } = useCompanyProfile();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-[#000000] text-gray-200 relative overflow-hidden font-sans selection:bg-[#00BFFF] selection:text-white">

            {/* Ambient Background Light Leaks */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header / Top Navigation Bar */}
            <header className="sticky top-0 z-50 glass border-b border-white/5 backdrop-blur-xl">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-[#00BFFF]/10 rounded-xl border border-[#00BFFF]/20 text-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.2)]">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                                CORPORATE <span className="text-[#00BFFF]">REGISTRY</span>
                            </h1>
                            <p className="text-[10px] font-mono tracking-widest text-[#00BFFF] uppercase mt-0.5 opacity-80">COMPANY_MODULE_ACTIVE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/selection')}
                            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 hover:border-[#00BFFF]/50 hover:bg-[#00BFFF]/10 transition-all duration-300 text-xs font-mono font-bold tracking-widest text-gray-400 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00BFFF]" />
                            <span>RETURN</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-5xl mx-auto px-6 lg:px-12 py-10 relative z-10">
                {isLoading ? (
                    <div className="glass rounded-[2rem] p-12 space-y-8 animate-pulse border-t-2 border-t-[#00BFFF]/30">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 bg-white/5 rounded-[1.5rem]" />
                            <div className="space-y-3">
                                <div className="w-48 h-8 bg-white/5 rounded-md" />
                                <div className="w-32 h-4 bg-white/5 rounded-md" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-20 bg-white/5 rounded-xl border border-white/5" />
                            ))}
                        </div>
                    </div>
                ) : isError ? (
                    <div className="glass border-l-[6px] border-l-[#FF003C] rounded-[2rem] p-12 text-center bg-[#050505]">
                        <div className="w-16 h-16 bg-[#FF003C]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF003C]/30 shadow-[0_0_15px_rgba(255,0,60,0.3)]">
                            <Info className="w-8 h-8 text-[#FF003C]" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">CRITICAL_FAILURE</h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">
                            Ocurrió un error al intentar recuperar la información del nodo corporativo: {error instanceof Error ? error.message : 'Error de red'}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-[#FF003C]/10 border border-[#FF003C]/30 text-[#FF003C] rounded-xl font-bold font-mono text-xs hover:bg-[#FF003C]/20 transition-all tracking-widest"
                        >
                            REINTENTAR CONEXIÓN
                        </button>
                    </div>
                ) : company ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Profile Hero Card */}
                        <div className="bg-[#050505] rounded-[2rem] p-6 lg:p-8 mb-8 overflow-hidden relative border-t-2 border-t-[#00BFFF]/50 shadow-xl">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00BFFF] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8 border-b border-white/10 pb-8 relative z-10">
                                <div className="relative group">
                                    <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#00BFFF] to-[#8B5CF6] p-1 shadow-lg">
                                        <div className="w-full h-full bg-[#040404] rounded-[2rem] flex items-center justify-center border-4 border-black">
                                            <Building2 className="w-8 h-8 text-[#00BFFF]" />
                                        </div>
                                    </div>
                                    <div className="absolute -inset-2 bg-[#00BFFF] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1 drop-shadow-md">{company.name}</h2>
                                        <span className="px-3 py-1 bg-[#00FF41]/10 text-[#00FF41] text-[10px] font-bold uppercase tracking-widest rounded-sm border border-[#00FF41]/30 flex items-center gap-2 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse"></div>
                                            VERIFIED_CORPORATION
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-mono text-xs flex items-center gap-2">
                                        <Shield className="w-3 h-3 text-[#00BFFF]" />
                                        <span>SYSTEM_ID: <span className="text-[#00BFFF] font-bold drop-shadow-[0_0_5px_rgba(0,191,255,0.5)]">{company.id}</span></span>
                                    </p>
                                </div>
                            </div>

                            <div className="mb-10 relative z-10">
                                <h3 className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                                    <Code2 className="w-4 h-4 text-[#8B5CF6]" /> CORPORATE_MISSION
                                </h3>
                                <div className="bg-white/5 border-l-2 border-[#8B5CF6] p-5 rounded-r-xl shadow-inner">
                                    <p className="text-base text-gray-300 leading-relaxed italic">
                                        "{company.description}"
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <InfoItem icon={Briefcase} label="INDUSTRY_SECTOR" value={company.industry} />
                                <InfoItem icon={Calendar} label="ESTABLISHED_YEAR" value={company.foundedYear.toString()} />
                                <InfoItem icon={MapPin} label="GLOBAL_HQ_LOCATION" value={company.location} />
                                <InfoItem icon={Mail} label="SECURE_COMMS_CHANNEL" value={company.contactEmail} isLink={`mailto:${company.contactEmail}`} />
                            </div>
                        </div>

                        {/* Extra Stats Placeholders */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <SmallCard icon={Globe} label="EXT_NETWORK" value="techsolutions.com" />
                            <SmallCard icon={Phone} label="COMM_LINK" value="+1_555_0123" />
                            <SmallCard icon={Shield} label="DEFENSE_STATUS" value="OPERATIONAL" status="green" />
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value, isLink }: { icon: React.ElementType, label: string, value: string, isLink?: string }) => (
    <div className="bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] border-l-[#00BFFF] hover:-translate-y-2 transition-transform duration-500 shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFFF] opacity-10 blur-3xl rounded-full"></div>
        <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border border-[#00BFFF]/30 shadow-[0_0_15px_rgba(0,191,255,0.3)] z-10 relative">
                <Icon className="w-4 h-4 text-[#00BFFF]" />
            </div>
            <div className="px-3 py-1 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/30 shadow-[0_0_10px_rgba(0,191,255,0.2)]">
                <span className="text-[10px] font-bold text-[#00BFFF] tracking-widest uppercase">DATA_POINT</span>
            </div>
        </div>
        <h3 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1 relative z-10">{label}</h3>
        {isLink ? (
            <a href={isLink} className="text-lg font-extrabold text-white hover:text-[#00BFFF] transition-colors relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] break-all">{value}</a>
        ) : (
            <p className="text-lg font-extrabold text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{value}</p>
        )}
        <div className="absolute -inset-4 bg-gradient-to-b from-[#00BFFF]/0 to-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-0"></div>
    </div>
);

const SmallCard = ({ icon: Icon, label, value, status }: { icon: React.ElementType, label: string, value: string, status?: 'green' | 'none' }) => {
    const isGreen = status === 'green';
    const mainColor = isGreen ? '#00FF41' : '#8B5CF6';
    const mainColorClass = isGreen ? 'text-[#00FF41]' : 'text-[#8B5CF6]';
    const borderColorClass = isGreen ? 'border-l-[#00FF41] border-[#00FF41]/30' : 'border-l-[#8B5CF6] border-[#8B5CF6]/30';
    const bgColorClass = isGreen ? 'bg-[#00FF41]/10' : 'bg-[#8B5CF6]/10';

    return (
        <div className={`bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] ${borderColorClass} hover:-translate-y-2 transition-transform duration-500 shadow-xl`}>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full" style={{ backgroundColor: mainColor }}></div>
            <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border ${borderColorClass} shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10 relative`} style={{ boxShadow: `0 0 15px ${isGreen ? 'rgba(0,255,65,0.3)' : 'rgba(139,92,246,0.3)'}` }}>
                    <Icon className={`w-4 h-4 ${mainColorClass}`} />
                </div>
                <div className={`px-3 py-1 rounded-sm border ${borderColorClass} ${bgColorClass} shadow-[0_0_10px_rgba(0,0,0,0.2)]`} style={{ boxShadow: `0 0 10px ${isGreen ? 'rgba(0,255,65,0.2)' : 'rgba(139,92,246,0.2)'}` }}>
                    <span className={`text-[10px] font-bold ${mainColorClass} tracking-widest uppercase`}>METRIC</span>
                </div>
            </div>
            <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1 relative z-10">{label}</p>
            <p className={`text-lg font-extrabold text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] ${isGreen ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00FF41] to-green-500' : ''}`}>{value}</p>
            <div className="absolute -inset-4 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-0" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${isGreen ? 'rgba(0,255,65,0.05)' : 'rgba(139,92,246,0.05)'})` }}></div>
        </div>
    );
};

export default CompanyPage;
