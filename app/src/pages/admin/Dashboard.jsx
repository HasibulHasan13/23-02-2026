export default function AdminDashboard() {
    return (
        <div className="max-w-[1200px] mx-auto p-6 md:p-10 space-y-6">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Admin Dashboard
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        High-level view of platform KPIs and critical signals.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Active users
                    </p>
                    <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">12,450</p>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Net revenue (month)
                    </p>
                    <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">$84,320</p>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Pending withdraws
                    </p>
                    <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">23</p>
                </div>
            </div>
        </div>
    );
}

