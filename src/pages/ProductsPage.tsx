import { useProducts } from '../services/hook/useProducts';
import { ShoppingBag, ArrowLeft, Package, Tag, Info, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const { data: products, isLoading, isError, error } = useProducts();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-[#000000] text-gray-200 relative overflow-hidden font-sans selection:bg-[#8B5CF6] selection:text-white">

            {/* Ambient Background Light Leaks */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header / Top Navigation Bar */}
            <header className="sticky top-0 z-50 glass border-b border-white/5 backdrop-blur-xl">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-[#8B5CF6]/10 rounded-xl border border-[#8B5CF6]/20 text-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                            <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                                RESOURCE <span className="text-[#8B5CF6]">CATALOG</span>
                            </h1>
                            <p className="text-[10px] font-mono tracking-widest text-[#8B5CF6] uppercase mt-0.5 opacity-80">PRODUCTS_MODULE_ACTIVE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/selection')}
                            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-all duration-300 text-xs font-mono font-bold tracking-widest text-gray-400 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#8B5CF6]" />
                            <span>RETURN</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-5xl mx-auto px-6 lg:px-12 py-12 relative z-10">
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="glass rounded-[2rem] p-8 h-64 animate-pulse border-t-2 border-t-[#8B5CF6]/30">
                                <div className="w-12 h-12 bg-white/5 rounded-[1.5rem] mb-6" />
                                <div className="w-2/3 h-6 bg-white/5 rounded-md mb-4" />
                                <div className="w-full h-12 bg-white/5 rounded-md" />
                            </div>
                        ))}
                    </div>
                ) : isError ? (
                    <div className="max-w-2xl mx-auto glass border-l-[6px] border-l-[#FF003C] rounded-[2rem] p-12 text-center bg-[#050505] animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-16 h-16 bg-[#FF003C]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF003C]/30 shadow-[0_0_15px_rgba(255,0,60,0.3)]">
                            <Info className="w-8 h-8 text-[#FF003C]" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">SYNC_ERROR</h2>
                        <p className="text-gray-400 text-sm mb-8">
                            {error instanceof Error ? error.message : 'No se pudo recuperar la lista de recursos en este momento.'}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-[#FF003C]/10 border border-[#FF003C]/30 text-[#FF003C] rounded-xl font-bold font-mono text-xs hover:bg-[#FF003C]/20 transition-all tracking-widest"
                        >
                            REINTENTAR CONEXIÓN
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products?.map((product, index) => {
                            // Alternate colors slightly based on index for variety, or keep them all purple. Let's use purple as base.
                            const glowClassBorder = index % 2 === 0 ? 'border-l-[#8B5CF6]' : 'border-l-[#00BFFF]';
                            const glowClassBg = index % 2 === 0 ? 'bg-[#8B5CF6]' : 'bg-[#00BFFF]';
                            const glowClassText = index % 2 === 0 ? 'text-[#8B5CF6]' : 'text-[#00BFFF]';

                            return (
                                <div
                                    key={product.id}
                                    className={`bg-[#050505] rounded-[2rem] p-5 lg:p-6 border border-white/5 relative flex flex-col group overflow-hidden border-l-[4px] ${glowClassBorder} hover:-translate-y-2 transition-transform duration-500 shadow-xl`}
                                >
                                    {/* Background Glow */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${glowClassBg} opacity-10 blur-3xl rounded-full`}></div>

                                    {/* Header: Icon & Price */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-10 h-10 rounded-[1rem] bg-[#000000] flex items-center justify-center border ${index % 2 === 0 ? 'border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-[#00BFFF]/30 shadow-[0_0_15px_rgba(0,191,255,0.3)]'} z-10 relative`}>
                                            <Package className={`w-4 h-4 ${glowClassText}`} />
                                        </div>
                                        <div className={`flex items-center gap-1.5 px-3 py-1 ${index % 2 === 0 ? 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]' : 'bg-[#00BFFF]/10 border border-[#00BFFF]/30 shadow-[0_0_10px_rgba(0,191,255,0.2)]'} rounded-full`}>
                                            <Tag className={`w-3.5 h-3.5 ${glowClassText}`} />
                                            <span className={`text-[12px] font-bold ${glowClassText} tracking-widest uppercase`}>
                                                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <h2 className="text-xl font-extrabold text-white tracking-tight mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                        {product.name}
                                    </h2>
                                    <p className="text-[#a1a1aa] text-xs mb-6 leading-relaxed flex-grow">
                                        {product.description}
                                    </p>

                                    {/* Metadata / Stock */}
                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded ${index % 2 === 0 ? 'bg-[#8B5CF6]/5 border border-[#8B5CF6]/20' : 'bg-[#00BFFF]/5 border border-[#00BFFF]/20'} text-[10px] font-mono text-gray-300`}>
                                            <Database className={`w-3 h-3 ${glowClassText}`} /> STOCK_AVAIL
                                        </span>
                                        <div className="flex items-center gap-1 px-3 py-1.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <div key={s} className={`w-2 h-2 rounded-full ${s <= 3 ? 'bg-[#00FF41] shadow-[0_0_5px_#00FF41]' : 'bg-white/10'}`} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className={`w-full px-4 py-2 rounded-xl border ${index % 2 === 0 ? 'border-[#8B5CF6]/50 bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'border-[#00BFFF]/50 bg-[#00BFFF]/10 hover:bg-[#00BFFF]/20 text-[#00BFFF]'} font-bold text-xs transition-colors flex justify-center items-center gap-2 uppercase tracking-wider`}>
                                        Deploy Resource <span className="font-mono">&gt;</span>
                                    </button>
                                </div>
                            );
                        })}

                        {products?.length === 0 && (
                            <div className="col-span-full py-32 text-center animate-in fade-in duration-1000">
                                <ShoppingBag className="w-20 h-20 mx-auto mb-6 opacity-10 text-gray-500" />
                                <p className="text-xl text-gray-400 font-medium tracking-tight">NULL_DATA. No resources found in catalog.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductsPage;
