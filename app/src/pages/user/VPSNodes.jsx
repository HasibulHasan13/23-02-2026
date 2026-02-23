import { Link } from 'react-router-dom';

export default function VPSNodes() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 md:px-10 md:py-10 flex flex-col gap-8 pb-20 text-slate-900 dark:text-slate-100">
            {/* Breadcrumb & Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link className="hover:text-primary transition-colors" to="/user/dashboard">VPS Management</Link>
                        <span className="text-slate-400 dark:text-slate-600">/</span>
                        <span className="text-gray-800 dark:text-white">Server-01 Details</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Server-01 Details</h1>
                    <p className="text-gray-500 dark:text-slate-400 max-w-2xl">Real-time monitoring and configuration for your primary survey database instance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="h-10 px-4 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white text-sm font-medium flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-[18px]">refresh</span>
                        Refresh Data
                    </button>
                    <button className="h-10 px-4 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-[18px]">power_settings_new</span>
                        Restart
                    </button>
                </div>
            </header>

            {/* Status Hero Card */}
            <section className="bg-white/40 dark:bg-[#1a261a]/40 border border-gray-200 dark:border-primary/10 rounded-[2rem] p-1 relative overflow-hidden group shadow-lg">
                {/* Status Glow Background */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="bg-white/80 dark:bg-[#1a261a]/80 backdrop-blur-md rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 border border-white/50 dark:border-white/5">
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 dark:bg-[#151e15] shadow-inner border border-gray-200 dark:border-white/5">
                            <div className="w-4 h-4 rounded-full bg-primary relative z-10 animate-[pulse_2s_infinite]"></div>
                            <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Operational</h2>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">Online</span>
                                <span className="text-gray-500 dark:text-slate-400 text-sm">Last checked: 2 mins ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-gray-500 dark:text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Current Load</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">24%</span>
                                <span className="text-xs text-primary font-medium">Low</span>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-gray-300 dark:bg-white/10 hidden md:block"></div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-gray-500 dark:text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Memory Usage</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">4.2</span>
                                <span className="text-sm text-gray-500 dark:text-slate-400">/ 16 GB</span>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-gray-300 dark:bg-white/10 hidden md:block"></div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-gray-500 dark:text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Disk Space</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">128</span>
                                <span className="text-sm text-gray-500 dark:text-slate-400">/ 500 GB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* IP Address Card */}
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-sm rounded-xl p-5 flex flex-col gap-3 group hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400">
                            <span className="material-symbols-outlined">hub</span>
                        </div>
                        <button className="text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-white transition-colors" title="Copy IP">
                            <span className="material-symbols-outlined text-[20px]">content_copy</span>
                        </button>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Public IP Address</p>
                        <p className="text-gray-900 dark:text-white text-lg font-mono tracking-tight group-hover:text-primary transition-colors">192.168.1.55</p>
                    </div>
                </div>
                {/* OS Card */}
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-sm rounded-xl p-5 flex flex-col gap-3 group hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined">grid_view</span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Operating System</p>
                        <p className="text-gray-900 dark:text-white text-lg font-semibold tracking-tight">Windows Server 22</p>
                    </div>
                </div>
                {/* Region Card */}
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-sm rounded-xl p-5 flex flex-col gap-3 group hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 dark:text-orange-400">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <span className="text-xs font-bold text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-full border border-gray-200 dark:border-white/5">US-East-1</span>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Region Location</p>
                        <p className="text-gray-900 dark:text-white text-lg font-semibold tracking-tight">Virginia, USA</p>
                    </div>
                </div>
                {/* Credentials Card */}
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-sm rounded-xl p-5 flex flex-col gap-3 group relative overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between relative z-10">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">admin_panel_settings</span>
                        </div>
                        <button className="text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-white transition-colors" title="Toggle Visibility">
                            <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                        </button>
                    </div>
                    <div className="relative z-10">
                        <p className="text-gray-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Root User</p>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-900 dark:text-white text-sm font-mono">admin_ars</p>
                            <p className="text-gray-500 dark:text-slate-500 text-sm font-mono tracking-[0.2em] bg-gray-100 dark:bg-black/20 px-2 rounded">•••••••</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Graphs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Uptime Graph */}
                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/5 shadow-sm rounded-2xl p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg">Network Uptime</h3>
                            <p className="text-gray-500 dark:text-slate-400 text-sm">Last 30 Days Performance</p>
                        </div>
                        <div className="text-right">
                            <p className="text-primary text-2xl font-bold">99.98%</p>
                            <p className="text-gray-500 dark:text-slate-500 text-xs font-medium uppercase">Availability</p>
                        </div>
                    </div>
                    {/* CSS-only Chart Representation */}
                    <div className="relative h-48 w-full flex items-end justify-between gap-1 pt-8 px-2 border-b border-gray-200 dark:border-white/5">
                        {/* Y-axis lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                        </div>
                        {/* Bars */}
                        {[
                            80, 85, 90, 82, 95, 98, 92, 99, 100, 94, 96, 92, 88, 95, 99, 99, 95, 92, 60, 88, 95, 98, 99, 97, 100
                        ].map((height, i) => (
                            <div
                                key={i}
                                className={`w-full rounded-t-sm transition-colors relative group ${height === 60 ? 'bg-yellow-500/80 hover:bg-yellow-500' : 'bg-primary/40 hover:bg-primary/60'}`}
                                style={{ height: `${height}%` }}
                                title={`Day ${i + 1}${height === 60 ? ' - Maintenance' : ''}`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Latency Graph */}
                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/5 shadow-sm rounded-2xl p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg">Response Latency</h3>
                            <p className="text-gray-500 dark:text-slate-400 text-sm">Real-time Ping (ms)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <p className="text-gray-900 dark:text-white text-lg font-mono font-bold">24ms</p>
                        </div>
                    </div>
                    {/* Area Chart Approximation */}
                    <div className="relative h-48 w-full rounded-xl bg-gray-50 dark:bg-[#151e15]/50 overflow-hidden border border-gray-200 dark:border-white/5">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div key={i} className={`border-gray-200 dark:border-white/5 ${i % 6 !== 5 ? 'border-r' : ''} ${i < 18 ? 'border-b' : ''}`}></div>
                            ))}
                        </div>
                        {/* Line Path (Simulated with clip-path/gradient) */}
                        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" style={{ clipPath: 'polygon(0% 100%, 0% 60%, 10% 40%, 20% 65%, 30% 30%, 40% 50%, 50% 45%, 60% 70%, 70% 20%, 80% 40%, 90% 35%, 100% 50%, 100% 100%)' }}></div>
                        {/* The Line Itself */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                            <path d="M0,75 L50,110 L100,50 L150,100 L200,60 L250,90 L300,80 L350,120 L400,40 L450,70 L500,60 L600,90" fill="none" stroke="#4bbe4f" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px rgba(75,190,79,0.5))', transform: 'scaleY(0.6) translateY(50px)' }} vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
