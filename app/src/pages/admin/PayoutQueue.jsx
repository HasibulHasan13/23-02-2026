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
