export default function ManageEmployees() {
    return (
        <div className="max-w-[1000px] mx-auto p-6 md:p-10 space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Manage Employees
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Internal staff who handle support, provisioning, and payouts.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Team directory
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Static example list
                    </span>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-white/10">
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                Sarah Ahmed
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Senior Support Specialist
                            </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                            Active
                        </span>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                Mahmud Hasan
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                VPS Provisioning Engineer
                            </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                            Active
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

