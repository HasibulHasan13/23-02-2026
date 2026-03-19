export default function VPSStatus() {
    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-typography-light dark:text-white">VPS Status</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Monitor the health and performance of your connected VPS nodes.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((id) => (
                    <div
                        key={id}
                        className="glass-panel rounded-2xl p-5 border border-gray-200/70 dark:border-white/10 flex flex-col gap-3"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    VPS NODE
                                </p>
                                <p className="text-lg font-semibold text-typography-light dark:text-white">
                                    Node-0{id}
                                </p>
                            </div>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                                Online
                            </span>
                        </div>
                        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                            <p>
                                CPU Load: <span className="font-semibold text-gray-800 dark:text-gray-100">24%</span>
                            </p>
                            <p>
                                Memory: <span className="font-semibold text-gray-800 dark:text-gray-100">4.2 / 16 GB</span>
                            </p>
                            <p>
                                Disk: <span className="font-semibold text-gray-800 dark:text-gray-100">128 / 500 GB</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

