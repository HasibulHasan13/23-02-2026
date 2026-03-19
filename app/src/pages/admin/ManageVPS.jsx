export default function ManageVPS() {
    return (
        <div className="max-w-[1100px] mx-auto p-6 md:p-10 space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Manage VPS
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Overview of all provisioned VPS nodes across users.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Nodes
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Illustrative data
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">User</th>
                                <th className="px-6 py-3 text-left">VPS ID</th>
                                <th className="px-6 py-3 text-left">IP Address</th>
                                <th className="px-6 py-3 text-left">Region</th>
                                <th className="px-6 py-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                                    John Doe
                                </td>
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">
                                    VPS-001
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                                    192.168.1.45
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    US-East-1
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                                        Active
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

