import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-typography-light dark:text-white">Dashboard Overview</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, here's your survey node performance.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light dark:bg-lime opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-light dark:bg-lime"></span>
                    </span>
                    <span className="text-sm font-medium text-primary-light dark:text-lime">System Operational</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary-light dark:text-lime">monetization_on</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Earnings</h3>
                        <span className="text-xs font-bold text-primary-light dark:text-lime bg-primary/10 px-2 py-1 rounded">+12.5%</span>
                    </div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-bold text-typography-light dark:text-white">$4,285.50</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">USD</span>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-yellow-600 dark:text-yellow-500">pending</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Withdrawal</h3>
                    </div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-bold text-typography-light dark:text-white">$1,250.00</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">USD</span>
                    </div>
                    <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-2 flex items-center opacity-80">
                        <span className="material-icons-round text-[14px] mr-1">schedule</span> Processing
                    </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary-light dark:text-primary">dns</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">VPS Nodes</h3>
                        <span className="text-xs font-bold text-primary-light dark:text-primary bg-primary/10 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-bold text-typography-light dark:text-white">4 / 5</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Online</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700/30 rounded-full h-1.5 mt-4">
                        <div className="bg-primary-light dark:bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Recent Activity</h3>
                        <button className="text-primary-light dark:text-lime text-xs hover:underline">View All</button>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between text-xs">
                            <span className="text-typography-light dark:text-gray-300 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-lime mr-2"></span>
                                Survey #882 Completed
                            </span>
                            <span className="text-gray-400 dark:text-gray-500">2m ago</span>
                        </li>
                        <li className="flex items-center justify-between text-xs">
                            <span className="text-typography-light dark:text-gray-300 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></span>
                                Node #2 Restarted
                            </span>
                            <span className="text-gray-400 dark:text-gray-500">1h ago</span>
                        </li>
                        <li className="flex items-center justify-between text-xs">
                            <span className="text-typography-light dark:text-gray-300 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-2"></span>
                                Payout Requested
                            </span>
                            <span className="text-gray-400 dark:text-gray-500">4h ago</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Lower Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel rounded-2xl p-8 border-l-4 border-l-primary/50">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-typography-light dark:text-white flex items-center">
                                    <span className="material-icons-round mr-2 text-primary-light dark:text-lime">cloud_queue</span>
                                    VPS Management
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Configure your worker node credentials and IP settings.</p>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-typography-light dark:text-white transition-colors border border-black/5 dark:border-white/10">
                                Refresh Data
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Assigned IP Address</label>
                                <div className="relative">
                                    <input className="w-full bg-input-bg-light dark:bg-input-bg-dark text-typography-light dark:text-white border-none rounded-lg py-3 px-4 font-mono text-sm focus:outline-none cursor-not-allowed select-none transition-colors" readOnly type="text" value="192.168.45.201" />
                                    <span className="absolute right-3 top-3 material-icons-round text-gray-500 text-sm">lock</span>
                                </div>
                                <p className="text-[10px] text-gray-400 ml-1">* Managed by ARS infrastructure</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Worker ID</label>
                                <div className="relative">
                                    <input className="w-full bg-input-bg-light dark:bg-input-bg-dark text-typography-light dark:text-white border-none rounded-lg py-3 px-4 font-mono text-sm focus:outline-none cursor-not-allowed transition-colors" readOnly type="text" value="WK-8829-PRO-NODE" />
                                    <span className="absolute right-3 top-3 material-icons-round text-primary-light dark:text-lime text-sm">verified</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-2">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Worker Credentials (API Key)</label>
                            <div className="flex items-center space-x-3">
                                <div className="relative flex-1 group">
                                    <input className="w-full bg-input-bg-light dark:bg-input-bg-dark text-typography-light dark:text-white border-none rounded-lg py-3 px-4 font-mono text-sm focus:outline-none cursor-not-allowed group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-colors" readOnly type="password" value="sk_live_51Jk...29aP" />
                                </div>
                                <button className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-primary-light dark:text-lime transition-colors border border-black/5 dark:border-white/10">
                                    <span className="material-icons-round text-lg">visibility_off</span>
                                </button>
                                <button className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-typography-light dark:text-white transition-colors border border-black/5 dark:border-white/10">
                                    <span className="material-icons-round text-lg">content_copy</span>
                                </button>
                            </div>
                            <p className="text-xs text-primary-light dark:text-lime opacity-80 mt-2 flex items-center ml-1">
                                <span className="material-icons-round text-[14px] mr-1">security</span> Credentials are encrypted end-to-end.
                            </p>
                        </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-6 min-h-[200px] flex flex-col">
                        <h3 className="text-lg font-bold text-typography-light dark:text-white mb-4">Earnings History</h3>
                        <div className="flex-1 flex items-end justify-between space-x-2 px-2 pb-2">
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-12 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$20</div>
                            </div>
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-24 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$45</div>
                            </div>
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-16 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$32</div>
                            </div>
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-32 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$68</div>
                            </div>
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-20 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$40</div>
                            </div>
                            <div className="w-full bg-primary-light/60 dark:bg-lime/60 hover:bg-primary-light dark:hover:bg-lime h-40 rounded-t transition-all duration-300 relative group shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white font-bold opacity-0 group-hover:opacity-100">$85</div>
                            </div>
                            <div className="w-full bg-primary/20 dark:bg-primary/20 hover:bg-primary/40 h-28 rounded-t transition-all duration-300 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-typography-light dark:text-white opacity-0 group-hover:opacity-100">$55</div>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 px-1">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-primary-light dark:text-lime font-bold">Sat</span><span>Sun</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="p-2 rounded-lg bg-primary/10 text-primary-light dark:text-lime">
                                <span className="material-icons-round">account_balance</span>
                            </span>
                            <h3 className="text-lg font-bold text-typography-light dark:text-white">Withdrawal Overview</h3>
                        </div>
                        <div className="border border-yellow-500/20 bg-yellow-500/10 rounded-xl p-4 mb-6">
                            <h4 className="text-sm font-semibold text-yellow-600 dark:text-yellow-500 mb-1 flex items-center">
                                <span className="material-icons-round text-sm mr-1">pending_actions</span>
                                Pending Approval
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300">ID: #9921 - $1,250.00 is currently pending in queue for processing.</p>
                        </div>
                        <Link to="/user/earnings" className="w-full block text-center bg-gradient-to-r from-primary-light to-primary dark:from-primary dark:to-lime text-white dark:text-background-dark font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(50,215,75,0.4)] hover:scale-[1.02] transition-all duration-300">
                            Manage Payouts
                        </Link>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                <span className="material-icons-round">headset_mic</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-typography-light dark:text-white">Need Help?</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Contact Node Support</p>
                            </div>
                        </div>
                        <span className="material-icons-round text-gray-400 dark:text-gray-500 group-hover:text-typography-light dark:group-hover:text-white transition-colors">chevron_right</span>
                    </div>
                </div>
            </div>

            <footer className="pt-6 border-t border-gray-200 dark:border-gray-700/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© 2024 ARS Surveys. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link to="/privacy" className="hover:text-typography-light dark:hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-typography-light dark:hover:text-white transition-colors">Terms of Service</Link>
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span>v2.4.0 (Stable)</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
