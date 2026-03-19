export default function MarketingAdminNotes() {
    return (
        <div className="max-w-[900px] mx-auto p-6 md:p-10 space-y-6">
            <header className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Marketing Admin Notes
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Internal notes for campaigns, promotions, and messaging.
                </p>
            </header>

            <div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 p-6 space-y-4">
                <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-1">
                        Q2 Focus
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-100">
                        Highlight reliability of VPS nodes and instant payouts in all external marketing.
                    </p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-1">
                        Copy ideas
                    </p>
                    <ul className="text-sm text-gray-800 dark:text-gray-100 list-disc pl-5 space-y-1">
                        <li>“Earn more with enterprise-grade survey infrastructure.”</li>
                        <li>“Always-on VPS, verified identities, and fast payouts.”</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

