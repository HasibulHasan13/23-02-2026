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
import { Link } from 'react-router-dom';

export default function PayoutQueue() {
    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 text-slate-800 dark:text-slate-100">
            {/* Breadcrumbs & Title */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-white/50 mb-1">
                        <Link className="hover:text-admin-primary transition-colors" to="/admin/pulse">Dashboard</Link>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span className="text-gray-800 dark:text-white">Withdrawals</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-typography-light dark:text-white tracking-tight">Withdrawal Requests</h2>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4">
                    <div className="glass-panel px-5 py-3 rounded-2xl flex flex-col items-center min-w-[120px] bg-white/60 dark:bg-black/20 border-black/5 dark:border-white/5 shadow-sm dark:shadow-glass">
                        <span className="text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider">Pending</span>
                        <span className="text-xl font-bold text-typography-light dark:text-white">$12,450</span>
                    </div>
                    <div className="glass-panel px-5 py-3 rounded-2xl flex flex-col items-center min-w-[120px] bg-white/60 dark:bg-black/20 border-black/5 dark:border-white/5 shadow-sm dark:shadow-glass">
                        <span className="text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider">Processed</span>
                        <span className="text-xl font-bold text-admin-primary">$45,200</span>
                    </div>
                </div>
            </div>

            {/* Filters & View Toggle */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-100 dark:bg-black/20 p-1.5 rounded-full border border-gray-200 dark:border-white/5 w-full sm:w-auto self-start">
                <div className="flex bg-white dark:bg-black/40 rounded-full p-1 w-full sm:w-auto shadow-sm">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-admin-primary text-white dark:text-[#0a1f0a] shadow-[0_0_15px_rgba(76,175,80,0.3)] text-sm font-bold transition-all">
                        <span className="material-symbols-outlined text-[18px]">pending_actions</span>
                        Pending Requests
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 text-sm font-medium transition-all">
                        <span className="material-symbols-outlined text-[18px]">history</span>
                        Completed History
                    </button>
                </div>
                <div className="flex items-center gap-3 px-4 w-full sm:w-auto justify-end sm:justify-start">
                    <span className="text-xs text-gray-500 dark:text-white/40 font-medium uppercase tracking-wider hidden sm:block">Filter by:</span>
                    <select className="bg-transparent border-none text-sm text-admin-primary font-bold focus:ring-0 cursor-pointer p-0 pr-8 dark:bg-transparent">
                        <option>Newest First</option>
                        <option>Oldest First</option>
                        <option>Amount: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Data Table Container */}
            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col flex-grow min-h-[500px] bg-white/60 dark:bg-black/20 border border-gray-200 dark:border-white/10">

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/20 text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-wider items-center">
                    <div className="col-span-1 flex justify-center">
                        <input className="rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-admin-primary focus:ring-admin-primary/50 focus:ring-offset-0 w-4 h-4 cursor-pointer" type="checkbox" />
                    </div>
                    <div className="col-span-3">User Details</div>
                    <div className="col-span-2">Request Date</div>
                    <div className="col-span-2 text-right pr-8">Amount</div>
                    <div className="col-span-2">Payout Method</div>
                    <div className="col-span-2 text-center">Actions</div>
                </div>

                {/* Table Body */}
                <div className="overflow-y-auto flex-grow">
                    {/* Row 1 */}
                    <div className="group grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 dark:border-white/5 items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200">
                        <div className="col-span-1 flex justify-center">
                            <input className="rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-admin-primary focus:ring-admin-primary/50 focus:ring-offset-0 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" type="checkbox" />
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-gray-200 dark:border-white/10">
                                <img alt="Jane" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcHwnOnuhLWi6_IPgZg27Ci5nvCRwHnD9qNztHoGV5UUsD8yyNJxshk8W3J_T-FIQyDCDcnSgr1Lw2rdyaW3Rwlswi-JICRMaeN9b2wT4HEOlsgRHgEQv4YLAjSqnaDrJ0_WQpch8BI3HBr0nSdW0eewdHMhZM_Nb3xKORROcctO4G7Ky3zrXkSUw-B4GPnRwDuls5iN7gNVqBHCgcKUjwdx6h7q_DpGjQWBdg6E6QfziG8LDLoVzrobtR6E5YBg6iIK0CQVb3-9w" />
                            </div>
                            <div>
                                <p className="text-gray-900 dark:text-white font-semibold text-sm">Jane Cooper</p>
                                <p className="text-gray-500 dark:text-white/40 text-xs">ID: #ARS-8821</p>
                            </div>
                        </div>
                        <div className="col-span-2 text-gray-700 dark:text-white/70 text-sm font-medium">Oct 24, 2023 <span className="text-gray-400 dark:text-white/30 text-xs ml-1">10:42 AM</span></div>
                        <div className="col-span-2 text-right pr-8 font-mono font-bold text-gray-900 dark:text-white text-base tracking-tight">$500.00</div>
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-white/80 text-sm">
                                <span className="material-symbols-outlined text-[#00457C] text-[18px]">account_balance_wallet</span>
                                <span className="truncate">PayPal: jane@...</span>
                                <button className="text-admin-primary hover:text-admin-primary-hover dark:hover:text-white transition-colors ml-auto">
                                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                            <button className="bg-admin-primary/90 hover:bg-admin-primary text-white dark:text-[#0a1f0a] rounded-full p-2 shadow-[0_0_15px_rgba(76,175,80,0.3)] transition-all transform hover:scale-110" title="Approve">
                                <span className="material-symbols-outlined text-[20px] font-bold">check</span>
                            </button>
                            <button className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/30 rounded-full p-2 transition-all transform hover:scale-110" title="Reject">
                                <span className="material-symbols-outlined text-[20px] font-bold">close</span>
                            </button>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="group grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 dark:border-white/5 items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200">
                        <div className="col-span-1 flex justify-center">
                            <input className="rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-admin-primary focus:ring-admin-primary/50 focus:ring-offset-0 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" type="checkbox" />
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-gray-200 dark:border-white/10">
                                <img alt="Wade" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqH2LvmGTpyLUI4Xj6FeWdMdkKJf9vaCBnWb_ACzc3z1EKDKdGMfsUs8-E4WYPJ9mMZAByYWJg8_sCRdvNsbfAXd6B6rCbCgzfRr9_tkFGWxxNBpfUpSX2_l2D9-QGsviefqNiErest36EU094Yg34m67tRbA8PFmV3CLBZIZUIGLJ79xDuEcSVeNf3PhIYPT0cwTL2j-e2vcOGQIlbACmV2eZd5RRH-vfX52W43YRW1uYqhfjDo04fCGgP8GZI0BVHVfBzuGuzTM" />
                            </div>
                            <div>
                                <p className="text-gray-900 dark:text-white font-semibold text-sm">Wade Warren</p>
                                <p className="text-gray-500 dark:text-white/40 text-xs">ID: #ARS-9932</p>
                            </div>
                        </div>
                        <div className="col-span-2 text-gray-700 dark:text-white/70 text-sm font-medium">Oct 24, 2023 <span className="text-gray-400 dark:text-white/30 text-xs ml-1">09:15 AM</span></div>
                        <div className="col-span-2 text-right pr-8 font-mono font-bold text-gray-900 dark:text-white text-base tracking-tight">$1,250.00</div>
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-white/80 text-sm">
                                <span className="material-symbols-outlined text-gray-500 dark:text-white text-[18px]">account_balance</span>
                                <span className="truncate">Wire: ****4291</span>
                                <button className="text-admin-primary hover:text-admin-primary-hover dark:hover:text-white transition-colors ml-auto">
                                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                            <button className="bg-blue-500/20 hover:bg-blue-500 text-blue-600 dark:text-blue-400 hover:text-white border border-blue-200 dark:border-blue-500/30 rounded-full px-3 py-1.5 flex items-center gap-1 text-xs font-bold transition-all w-full justify-center" title="Mark Paid">
                                <span>Mark Paid</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Footer Pagination */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between text-sm bg-gray-50 dark:bg-black/20">
                    <span className="text-gray-500 dark:text-white/40">Showing <span className="text-gray-800 dark:text-white font-medium">1-5</span> of <span className="text-gray-800 dark:text-white font-medium">45</span> requests</span>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white/5 text-gray-400 dark:text-white/40 cursor-not-allowed">
                            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-admin-primary text-white dark:text-[#0a1f0a] font-bold">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-white/5 text-gray-600 dark:text-white/60 transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-white/5 text-gray-600 dark:text-white/60 transition-colors">3</button>
                        <span className="text-gray-400 dark:text-white/40">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-white/5 text-gray-600 dark:text-white/60 transition-colors">9</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-white/5 text-gray-800 dark:text-white transition-colors">
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Settings() {
    const [name, setName] = useState('Johnathan Doe');
    const [phone, setPhone] = useState('+1 (555) 000-1234');
    const [address, setAddress] = useState('1234 Elm Street, Springfield, IL 62704');

    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings Saved Successfully');
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <Link className="hover:text-admin-primary transition-colors" to="/user/dashboard">Dashboard</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-gray-800 dark:text-white font-medium">Profile Settings</span>
            </div>

            <div className="glass-panel rounded-3xl overflow-hidden relative border border-gray-200 dark:border-white/10 shadow-xl bg-card-light dark:bg-card-dark">
                {/* Cover Photo */}
                <div className="h-32 bg-gradient-to-r from-emerald-800 to-admin-primary/30 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="px-8 pb-8">
                    <div className="relative flex flex-col sm:flex-row items-end sm:items-center -mt-12 mb-8 gap-6">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full p-1 bg-white dark:bg-background-dark shadow-xl">
                                <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtZV90lrXTbIm64MpzCUWlvfGOp0dpeYHUi4q-MTEmtr24JkaVL8J1tJoAjB9dFJsRmoKUk8DxOXAwG6HCkRQMMq0xHdGiOZsVKEggI2LFvWtMXewI4-IBFRzzlnWRvioaplvCwzCn9gNclBr0UsKw-bBrm_CsNo8KOMeTGYPthqp4mEZvYxZ-Pn6JwDHnfBPVWzVQGeznhp0u-GbW5ZbBo2A_y8wosed_oRvrx4E2FISRkhj3utPufNOc6w0V9aQzTupaKvTHRI" />
                            </div>
                            <button className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm m-1 cursor-pointer">
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                            <div className="absolute bottom-2 right-2 bg-white dark:bg-background-dark rounded-full p-1.5 shadow-md">
                                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
                            </div>
                        </div>

                        <div className="flex-1 text-center sm:text-left pt-2 sm:pt-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                                {name}
                                <span className="material-symbols-outlined text-admin-primary text-xl" title="Verified User">verified</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Member since 2021 • Pro Plan</p>
                        </div>

                        <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none py-2 px-4 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-sm font-medium">
                                View Public Profile
                            </button>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={handleSave}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-admin-primary/10 text-admin-primary">
                                    <span className="material-symbols-outlined text-xl">person</span>
                                </span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">badge</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="Enter your full name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Phone Number</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">call</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="+1 (000) 000-0000"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Home Address</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">home_pin</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="Street address, City, State, Zip"
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-white/10" />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-admin-accent-lime/10 text-admin-accent-lime">
                                    <span className="material-symbols-outlined text-xl">verified_user</span>
                                </span>
                                Identity Verification
                            </h3>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-admin-primary to-admin-accent-lime rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative w-full border-2 border-dashed border-admin-accent-lime/50 dark:border-admin-accent-lime/30 bg-gray-50/50 dark:bg-black/20 rounded-2xl p-8 text-center hover:bg-admin-accent-lime/5 transition-colors cursor-pointer group-hover:border-admin-accent-lime">
                                    <div className="flex flex-col items-center justify-center gap-3">
                                        <div className="w-16 h-16 rounded-full bg-admin-accent-lime/10 flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined text-3xl text-admin-accent-lime">cloud_upload</span>
                                        </div>
                                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">Upload your NID (Front &amp; Back)</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                            Drag and drop your files here, or <span className="text-admin-accent-lime hover:underline font-medium">browse files</span>. Supported formats: JPEG, PNG, PDF.
                                        </p>
                                    </div>
                                    <input accept="image/*,.pdf" className="hidden" multiple type="file" />
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-white/10" />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                                    <span className="material-symbols-outlined text-xl">translate</span>
                                </span>
                                Skills &amp; Language
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">English Proficiency</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">language</span>
                                        </span>
                                        <select className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-10 py-2.5 rounded-xl text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-admin-primary focus:outline-none text-gray-800 dark:text-gray-100" defaultValue="advanced">
                                            <option disabled value="">Select Level</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                            <option value="native">Native</option>
                                        </select>
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-4">
                            <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors border border-transparent" type="button">
                                Cancel
                            </button>
                            <button className="w-full sm:w-auto bg-gradient-to-r from-admin-primary to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-8 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]" type="submit">
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default function UsersNodes() {
    return (
        <div>Users & Nodes</div>
    );
}
