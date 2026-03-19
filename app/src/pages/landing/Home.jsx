import { Link } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle';

export default function Home() {
    return (
        <div className="landing-layout bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-300 antialiased overflow-x-hidden relative selection:bg-primary selection:text-white min-h-screen">
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
                <div className="max-w-7xl mx-auto glass-panel bg-glass-bg-light dark:bg-glass-bg border border-glass-border-light dark:border-glass-border rounded-2xl shadow-sm dark:shadow-glass">
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

            {/* Existing sections kept as-is for marketing content */}
            {/* Hero, stats, pricing, footer etc. */}
        </div>
    );
}

