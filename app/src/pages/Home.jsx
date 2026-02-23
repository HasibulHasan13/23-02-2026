import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

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

            <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center z-10" id="features">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-panel bg-glass-bg-light dark:bg-glass-bg border border-glass-border-light dark:border-glass-border rounded-3xl p-8 md:p-12 shadow-glass relative overflow-hidden group">
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
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-4 dark:text-white">Trusted Growth &amp; <br />Reliable Payouts</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                Join thousands of users who have successfully monetized their time. Our platform provides the high-performance VPS and verified identities you need to qualify for premium surveys.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-panel bg-white/40 dark:bg-[#1f3a1f] border border-slate-200 dark:border-glass-border p-6 rounded-2xl">
                                    <div className="text-3xl font-bold text-primary mb-1">$450k+</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Total USD Withdrawn</div>
                                </div>
                                <div className="glass-panel bg-white/40 dark:bg-[#1f3a1f] border border-slate-200 dark:border-glass-border p-6 rounded-2xl">
                                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Uptime Guarantee</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="glass-panel bg-white/60 dark:bg-[#1f3a1f] border border-slate-200 dark:border-glass-border rounded-3xl p-6 shadow-glass relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-white">User Earnings</h3>
                                        <p className="text-xs text-green-500 font-medium">+14.5% this month</p>
                                    </div>
                                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                        <span className="material-icons-round">trending_up</span>
                                    </div>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-2 px-2">
                                    <div className="w-full bg-primary/10 rounded-t-lg h-[40%] relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$120</div>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-t-lg h-[55%] relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$240</div>
                                    </div>
                                    <div className="w-full bg-primary/30 rounded-t-lg h-[45%] relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$180</div>
                                    </div>
                                    <div className="w-full bg-primary/40 rounded-t-lg h-[70%] relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$350</div>
                                    </div>
                                    <div className="w-full bg-primary/60 rounded-t-lg h-[60%] relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$290</div>
                                    </div>
                                    <div className="w-full bg-primary rounded-t-lg h-[85%] relative shadow-[0_0_15px_rgba(76,175,80,0.5)] group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-100">$540</div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4 text-xs text-slate-400 px-2">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                                </div>
                            </div>
                            <div className="glass-panel bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-white/5 p-4 rounded-2xl shadow-xl absolute -bottom-6 -left-6 max-w-xs animate-bounce" style={{ animationDuration: "3s" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">RJ</div>
                                    <div>
                                        <p className="text-sm font-medium dark:text-white">"Made $200 first week!"</p>
                                        <p className="text-xs text-slate-500">Rahul J. &bull; Verified User</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-4 relative z-10" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Choose Your Path</h2>
                        <p className="text-slate-600 dark:text-slate-300">Flexible packages designed for beginners and pros.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel bg-white/70 dark:bg-[#1f3a1f] border border-slate-200 dark:border-glass-border rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300 flex flex-col relative overflow-hidden">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Starter 1</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Essential setup to get started.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">3,290</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">BDT</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    Premium VPS Access
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    SSN Verification
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    Standard Account
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400 dark:text-slate-500 line-through">
                                    <span className="material-icons-round text-base">cancel</span>
                                    Priority Support
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">
                                Purchase Now
                            </button>
                        </div>
                        <div className="glass-panel bg-white/90 dark:bg-[#1f3a1f] border-2 border-primary/50 dark:border-primary/30 rounded-3xl p-8 transform md:-translate-y-4 shadow-2xl shadow-primary/10 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Starter 2</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">Maximum earnings potential.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">4,490</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-300 ml-1">BDT</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                                    <span className="material-icons-round text-primary text-base">verified</span>
                                    <strong>High-Speed VPS</strong>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                                    <span className="material-icons-round text-primary text-base">verified</span>
                                    <strong>SSN + Background Check</strong>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                                    <span className="material-icons-round text-primary text-base">verified</span>
                                    Healthy Active Account
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                                    <span className="material-icons-round text-primary text-base">verified</span>
                                    Instant Setup
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all">
                                Purchase Now
                            </button>
                        </div>
                        <div className="glass-panel bg-white/70 dark:bg-[#1f3a1f] border border-slate-200 dark:border-glass-border rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300 flex flex-col relative overflow-hidden">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Monthly Renewal</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Keep your earnings flowing.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">2,999</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">BDT</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    VPS Maintenance
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    IP Rotation Service
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-round text-primary text-base">check_circle</span>
                                    24/7 Account Monitoring
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                                Renew Service
                            </button>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Secure payments powered by</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="h-10 px-6 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                                <span className="text-pink-600 mr-1">b</span>Kash
                            </div>
                            <div className="h-10 px-6 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                                <span className="text-orange-600 mr-1">Nagad</span>
                            </div>
                            <div className="h-10 px-6 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                                <span className="text-purple-600 mr-1">Rocket</span>
                            </div>
                            <div className="h-10 px-6 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                                Crypto
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs font-bold">A</div>
                                <span className="font-bold text-lg">ARS Surveys</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                                Empowering users with premium tools for the gig economy. Secure, reliable, and profitable.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 dark:text-white">Platform</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><a className="hover:text-primary" href="#">Packages</a></li>
                                <li><a className="hover:text-primary" href="#">VPS Specs</a></li>
                                <li><a className="hover:text-primary" href="#">Success Stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 dark:text-white">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                                <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-primary" href="#">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-white/10 text-xs text-slate-400">
                        <p>Â&copy; 2023 ARS Surveys. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a className="hover:text-white" href="#"><span className="material-icons-round text-lg">facebook</span></a>
                            <a className="hover:text-white" href="#"><span className="material-icons-round text-lg">send</span></a>
                            <a className="hover:text-white" href="#"><span className="material-icons-round text-lg">email</span></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}