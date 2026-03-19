export default function SupportRequests() {
    return (
        <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-typography-light dark:text-white">
                    Support Requests
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Track tickets you have opened with the ARS support team.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Your tickets
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Demo records
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">ID</th>
                                <th className="px-6 py-3 text-left">Subject</th>
                                <th className="px-6 py-3 text-left">Created</th>
                                <th className="px-6 py-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">
                                    #SUP-1021
                                </td>
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                                    VPS node offline
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    2024-03-15
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                                        Resolved
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">
                                    #SUP-1040
                                </td>
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                                    Withdrawal delay
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    2024-03-19
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                                        Open
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

