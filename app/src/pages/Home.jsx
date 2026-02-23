import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
    return (
        <div className="landing-layout bg-landing-bg-light dark:bg-landing-bg-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-300 antialiased overflow-x-hidden relative selection:bg-primary selection:text-white min-h-screen">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <style>{`
                    @keyframes float {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    .blob {
                        position: absolute;
                        filter: blur(80px);
                        opacity: 0.6;
                        animation: float 10s infinite ease-in-out;
                        z-index: 0;
                    }
                    .blob-1 { background: #4CAF50; top: -10%; left: -10%; width: 500px; height: 500px; border-radius: 50%; animation-delay: 0s; }
                    .blob-2 { background: #1B5E20; top: 40%; right: -10%; width: 400px; height: 400px; border-radius: 50%; animation-delay: 2s; }
                    .blob-3 { background: #0D220D; bottom: -20%; left: 20%; width: 600px; height: 600px; border-radius: 50%; animation-delay: 4s; }
                    .dark .blob { opacity: 0.4; }
                `}</style>
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <nav className="fixed w-full z-50 top-0 transition-all duration-300 px-6 py-4">
                <div className="max-w-7xl mx-auto glass-panel bg-white/60 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
                    <div className="flex items-center justify-between h-14 px-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-green-700 flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <span className="font-bold text-xl tracking-tight">ARS Surveys</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                            <a className="hover:text-primary transition-colors" href="#features">Features</a>
                            <a className="hover:text-primary transition-colors" href="#stats">Performance</a>
                            <a className="hover:text-primary transition-colors" href="#pricing">Packages</a>
                            <a className="hover:text-primary transition-colors" href="#">Support</a>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <ThemeToggle />
                            <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-1"></div>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/login">Login</Link>
                            <Link className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-hover shadow-glow transition-all" to="/register">Sign Up</Link>
                        </div>
                        <div className="md:hidden flex items-center gap-4">
                            <ThemeToggle />
                            <button className="text-slate-800 dark:text-white p-2">
                                <span className="material-icons-round">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center z-10" id="features">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-panel bg-white/60 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Live Beta Access
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                            Unlock Your <br /> <span className="text-primary">Earning Potential</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Access premium survey opportunities with enterprise-grade infrastructure.
                            Secure VPS, Verified Accounts, and Instant Payouts.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover shadow-glow transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2" href="#pricing">
                                Start Now
                                <span className="material-icons-round text-sm">arrow_forward</span>
                            </a>
                            <a className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#stats">
                                View Packages
                                <span className="material-icons-round text-sm">visibility</span>
                            </a>
                        </div>
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5">
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Compatible With Top Platforms</p>
                            <div className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-100 transition-all duration-500">
                                <div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-400"><span className="material-icons-round">poll</span> SurveyJunkie</div>
                                <div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-400"><span className="material-icons-round">token</span> Swagbucks</div>
                                <div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-400"><span className="material-icons-round">paid</span> InboxDollars</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 relative z-10" id="stats">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Trusted Growth &amp; <br />Reliable Payouts</h2>
                </div>
            </section>
        </div>
    );
}
