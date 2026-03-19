export default function WithdrawRequests() {
    return (
        <div className="max-w-[1100px] mx-auto p-6 md:p-10 space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Withdraw Requests
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Review and process user withdrawal requests.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Pending requests
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Demo table, hook to backend later
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">User</th>
                                <th className="px-6 py-3 text-left">Method</th>
                                <th className="px-6 py-3 text-left">Amount</th>
                                <th className="px-6 py-3 text-left">Requested</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                                    Alex Johnson
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    USDT (TRC20)
                                </td>
                                <td className="px-6 py-4 font-semibold text-typography-light dark:text-white">
                                    $450.00
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    2 minutes ago
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10">
                                        Reject
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-admin-primary text-white hover:bg-admin-primary-hover">
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

