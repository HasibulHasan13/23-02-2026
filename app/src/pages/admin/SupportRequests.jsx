export default function AdminSupportRequests() {
    return (
        <div className="max-w-[1100px] mx-auto p-6 md:p-10 space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Support Requests
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Manage tickets raised by users and track their resolution.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Open tickets
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Example dataset
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">ID</th>
                                <th className="px-6 py-3 text-left">User</th>
                                <th className="px-6 py-3 text-left">Subject</th>
                                <th className="px-6 py-3 text-left">Priority</th>
                                <th className="px-6 py-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">
                                    #SUP-1040
                                </td>
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                                    Alex Johnson
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                                    Withdrawal delay
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                                        High
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                        In progress
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

