import { Link } from 'react-router-dom';

export default function NetworkPulse() {
    return (
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 text-gray-800 dark:text-gray-100">
            <div className="lg:col-span-8 xl:col-span-9 space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Real-time platform analytics and management.</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700/50">
                            <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span> System Live
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/10 shadow-sm">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-admin-primary">groups</span>
                        </div>
                        <div className="relative z-10">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Users</p>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">12,450</h3>
                            <div className="mt-4 flex items-center text-sm">
                                <span className="text-admin-primary font-semibold flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +18%
                                </span>
                                <span className="text-gray-400 dark:text-gray-500 ml-2">vs last month</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-admin-primary to-admin-accent-lime"></div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/10 shadow-sm">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User Status</p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-gray-600 dark:text-gray-300">Active</span>
                                <span className="font-bold text-admin-primary">11,890</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-admin-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                            <div className="flex items-center justify-between gap-4 mt-2">
                                <span className="text-sm text-gray-600 dark:text-gray-300">Banned/Flagged</span>
                                <span className="font-bold text-red-500">560</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl relative flex flex-col justify-between bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/10 shadow-sm">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Net Revenue</p>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">$84,320</h3>
                        </div>
                        <div className="h-16 w-full mt-4">
                            <div className="flex items-end justify-between h-full gap-1">
                                <div className="w-1/6 bg-admin-primary/20 rounded-t-sm h-1/3"></div>
                                <div className="w-1/6 bg-admin-primary/40 rounded-t-sm h-2/3"></div>
                                <div className="w-1/6 bg-admin-primary/60 rounded-t-sm h-1/2"></div>
                                <div className="w-1/6 bg-admin-primary/80 rounded-t-sm h-3/4"></div>
                                <div className="w-1/6 bg-admin-primary rounded-t-sm h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-black/20 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Survey Revenue &amp; Payouts</h3>
                        <select className="bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg focus:ring-admin-primary focus:border-admin-primary block p-2">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="relative h-64 w-full flex items-end justify-between gap-1 border-b border-gray-200 dark:border-white/10 pb-2">
                        {/* Y-axis lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="w-full h-px bg-gray-200 dark:bg-white/5"></div>
                        </div>
                        {/* Bars Simulated */}
                        {[40, 70, 50, 90, 80, 100, 120].map((h, i) => (
                            <div key={i} className="w-full bg-gradient-to-t from-admin-primary to-admin-accent-lime hover:opacity-80 transition-opacity rounded-t-sm relative z-10" style={{ height: `${(h / 120) * 100}%` }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                <div className="glass-panel bg-white/70 dark:bg-black/20 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
                    <div className="p-6 border-b border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">User Management</h3>
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
                            </div>
                            <input className="block w-full p-2 pl-10 text-sm border-none rounded-lg bg-input-bg-light dark:bg-input-bg-dark text-typography-light dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-admin-primary" placeholder="Search users..." type="text" />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-100/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-white/10">
                                <tr>
                                    <th className="px-6 py-4" scope="col">User</th>
                                    <th className="px-6 py-4" scope="col">Package Plan</th>
                                    <th className="px-6 py-4" scope="col">VPS IP Address</th>
                                    <th className="px-6 py-4" scope="col">Status</th>
                                    <th className="px-6 py-4 text-right" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                                        <div>
                                            <div className="font-semibold">John Doe</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-admin-primary/10 text-admin-primary text-xs px-2 py-1 rounded-md border border-admin-primary/20">Pro Surveyor</span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">192.168.1.45</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary font-medium text-sm transition-colors mr-3">Assign IP</button>
                                        <button className="text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary font-medium text-sm transition-colors">Edit</button>
                                    </td>
                                </tr>
                                {/* User 2 */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white text-xs">AS</div>
                                        <div>
                                            <div className="font-semibold">Alice Smith</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">alice@example.com</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-md border border-blue-500/20">Enterprise</span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">10.0.0.24</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary font-medium text-sm transition-colors mr-3">Assign IP</button>
                                        <button className="text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary font-medium text-sm transition-colors">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-white/10 flex justify-center bg-gray-50/50 dark:bg-transparent">
                        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-admin-primary dark:hover:text-admin-primary flex items-center gap-1 font-medium transition-colors">
                            View all users <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 xl:col-span-3 space-y-8">
                <div className="glass-panel bg-white/70 dark:bg-black/20 rounded-2xl p-6 h-full border border-gray-200 dark:border-white/10 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-yellow-500">pending_actions</span>
                            Approvals
                        </h3>
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">3 New</span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU6X4ntYr-7h3xPEe69vJVMx6C4ztUVUKsfW36nFw3zk_QPHUvSQeMI0bUZI9BLspZvmg673yXpDgLqOSxh9BDtU2I5xvTnEYkgFa7SuBZgb-SFAZ4jyrj-kTxK-BaeM1KADOSvqDLTnDAZa-cfyvPEhVtLasH6OYfbwWyNI5AukDQ18oj0zYXWViFyxDCDkV2EI6l-65lj6LJyiWuZkSsyUNr0sL1cnLIMKwbtFhep_phPE3ms7Xa9YDDtI-OFgPJHFevJMfXcMA" alt="Alex" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Alex Johnson</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Basic Plan</p>
                                    </div>
                                </div>
                                <span className="text-admin-primary font-bold font-mono">$450.00</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 bg-gray-100 dark:bg-black/20 p-2 rounded">
                                Request via PayPal<br />
                                <span className="opacity-75">ID: #REQ-9942</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-gray-100 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 py-1.5 rounded-lg text-xs font-medium transition-colors">Reject</button>
                                <button className="bg-admin-primary hover:bg-admin-primary-hover text-white py-1.5 rounded-lg text-xs font-medium shadow-sm shadow-admin-primary/20 transition-colors">Approve</button>
                            </div>
                        </div>

                        <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">SJ</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Jones</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Pro Plan</p>
                                    </div>
                                </div>
                                <span className="text-admin-primary font-bold font-mono">$1,200.00</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 bg-gray-100 dark:bg-black/20 p-2 rounded">
                                Request via Crypto (USDT)<br />
                                <span className="opacity-75">ID: #REQ-9943</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-gray-100 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 py-1.5 rounded-lg text-xs font-medium transition-colors">Reject</button>
                                <button className="bg-admin-primary hover:bg-admin-primary-hover text-white py-1.5 rounded-lg text-xs font-medium shadow-sm shadow-admin-primary/20 transition-colors">Approve</button>
                            </div>
                        </div>
                    </div>
                    <Link to="/admin/payout" className="w-full mt-4 block text-center py-2 border border-dashed border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 hover:border-solid hover:border-admin-primary hover:text-admin-primary transition-all text-sm font-medium">
                        View Past Approvals
                    </Link>
                </div>

                <div className="glass-panel bg-white/70 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-admin-primary/10 hover:text-admin-primary border border-transparent hover:border-admin-primary/30 transition-all group">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-admin-primary mb-1">dns</span>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">VPS Nodes</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-admin-primary/10 hover:text-admin-primary border border-transparent hover:border-admin-primary/30 transition-all group">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-admin-primary mb-1">settings</span>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Config</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-admin-primary/10 hover:text-admin-primary border border-transparent hover:border-admin-primary/30 transition-all group">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-admin-primary mb-1">mail</span>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Email All</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-admin-primary/10 hover:text-admin-primary border border-transparent hover:border-admin-primary/30 transition-all group">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-admin-primary mb-1">download</span>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Export</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
