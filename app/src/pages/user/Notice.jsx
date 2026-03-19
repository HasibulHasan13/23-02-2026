export default function Notice() {
    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-typography-light dark:text-white">
                    Notices
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Important announcements and system messages from the ARS team.
                </p>
            </header>

            <div className="space-y-4">
                <div className="glass-panel rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-6 py-4">
                    <p className="text-xs uppercase tracking-wide text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                        System status
                    </p>
                    <h3 className="text-sm font-semibold text-typography-light dark:text-white">
                        All systems operational
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        VPS provisioning, survey account management, and payout processing are working normally.
                    </p>
                </div>

                <div className="glass-panel rounded-2xl border border-yellow-500/30 bg-yellow-500/5 px-6 py-4">
                    <p className="text-xs uppercase tracking-wide text-yellow-700 dark:text-yellow-400 font-semibold mb-1">
                        Upcoming maintenance
                    </p>
                    <h3 className="text-sm font-semibold text-typography-light dark:text-white">
                        Scheduled downtime this weekend
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        We will perform infrastructure upgrades on Saturday 02:00–03:00 UTC. Nodes may briefly restart during this window.
                    </p>
                </div>
            </div>
        </div>
    );
}

