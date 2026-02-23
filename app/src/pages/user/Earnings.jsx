import { useState } from 'react';

export default function Earnings() {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('crypto');
    const [address, setAddress] = useState('');

    // Simulated state for dynamic display
    const [availableBalance, setAvailableBalance] = useState(1240.50);
    const [pendingEarnings, setPendingEarnings] = useState(45.00);
    const [transactions, setTransactions] = useState([
        { id: '#TRX-9921-A8', date: 'Oct 24, 2023', time: '10:42 AM', method: 'USDT (TRC20)', amount: 500.00, status: 'Paid', methodIcon: 'currency_bitcoin' },
        { id: '#TRX-8812-B2', date: 'Oct 20, 2023', time: '03:15 PM', method: 'PayPal', amount: 150.00, status: 'Pending', methodIcon: 'payments' }
    ]);

    const handleWithdraw = (e) => {
        e.preventDefault();
        const numAmount = parseFloat(amount);
        if (!numAmount || numAmount < 50 || numAmount > availableBalance) return;

        // Update balance
        setAvailableBalance(prev => prev - numAmount);

        // Add new transaction
        const newTx = {
            id: `#TRX-${Math.floor(Math.random() * 10000)}-NW`,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            method: method === 'crypto' ? 'USDT (TRC20)' : method === 'bank' ? 'Bank Transfer' : 'PayPal',
            amount: numAmount,
            status: 'Pending',
            methodIcon: method === 'crypto' ? 'currency_bitcoin' : method === 'bank' ? 'account_balance' : 'payments'
        };

        setTransactions([newTx, ...transactions]);
        setAmount('');
        setAddress('');
        alert(`Successfully requested $${numAmount.toFixed(2)} via ${newTx.method}`);
    };

    return (
        <div className="w-full max-w-[1280px] mx-auto p-6 md:p-8 lg:p-10 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-typography-light dark:text-white tracking-tight mb-2">Earnings &amp; Withdrawals</h1>
                    <p className="text-gray-500 dark:text-slate-400 text-lg">Manage your survey rewards and request secure payouts.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm self-start md:self-auto">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    Secure SSL Connection
                </div>
            </div>

            {/* Top Grid: Balance & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Balance Summary (5/12) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Main Balance Card */}
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-gray-200 dark:border-white/10 dark:bg-card-dark bg-card-light">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-primary">account_balance_wallet</span>
                        </div>
                        <div className="relative z-10">
                            <p className="text-gray-500 dark:text-slate-400 font-medium mb-1">Total Available Balance</p>
                            <h2 className="text-5xl font-bold text-typography-light dark:text-white tracking-tight mb-6">${availableBalance.toFixed(2)}</h2>
                            <div className="flex gap-3 mb-8">
                                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% this month
                                </span>
                                <span className="bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-300 dark:border-white/5">
                                    {availableBalance >= 50 ? 'Threshold met' : 'Below threshold'}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                                <div>
                                    <p className="text-gray-500 dark:text-slate-400 text-sm mb-1">Pending Earnings</p>
                                    <p className="text-typography-light dark:text-white text-xl font-bold">${pendingEarnings.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-slate-400 text-sm mb-1">Lifetime Earnings</p>
                                    <p className="text-typography-light dark:text-white text-xl font-bold">$3,500.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="glass-panel rounded-3xl p-6 flex items-start gap-4 border border-gray-200 dark:border-white/10 dark:bg-card-dark bg-card-light">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                            <span className="material-symbols-outlined">info</span>
                        </div>
                        <div>
                            <h3 className="text-typography-light dark:text-white font-bold mb-1">Withdrawal Policy</h3>
                            <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                                Withdrawals are processed within 24 hours. Minimum withdrawal amount is $50.00. Crypto transactions may incur network fees.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Withdrawal Form (7/12) */}
                <div className="lg:col-span-7">
                    <div className="glass-panel rounded-3xl p-8 h-full flex flex-col border border-gray-200 dark:border-white/10 dark:bg-card-dark bg-card-light">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-typography-light dark:text-white">Request Payout</h3>
                            <span className="text-gray-500 dark:text-slate-400 text-sm">Step 1 of 2</span>
                        </div>
                        <form className="flex flex-col gap-6 flex-grow" onSubmit={handleWithdraw}>
                            {/* Payment Method Selector */}
                            <div className="grid grid-cols-3 gap-3">
                                <label className="cursor-pointer">
                                    <input
                                        className="peer sr-only"
                                        name="method"
                                        type="radio"
                                        value="crypto"
                                        checked={method === 'crypto'}
                                        onChange={() => setMethod('crypto')}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 peer-checked:bg-primary/10 peer-checked:border-primary transition-all">
                                        <span className="material-symbols-outlined text-3xl mb-1 text-gray-400 dark:text-slate-300 peer-checked:text-primary">currency_bitcoin</span>
                                        <span className="text-xs font-bold text-gray-600 dark:text-slate-300 peer-checked:text-primary dark:peer-checked:text-white">Crypto</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input
                                        className="peer sr-only"
                                        name="method"
                                        type="radio"
                                        value="bank"
                                        checked={method === 'bank'}
                                        onChange={() => setMethod('bank')}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 peer-checked:bg-primary/10 peer-checked:border-primary transition-all">
                                        <span className="material-symbols-outlined text-3xl mb-1 text-gray-400 dark:text-slate-300 peer-checked:text-primary">account_balance</span>
                                        <span className="text-xs font-bold text-gray-600 dark:text-slate-300 peer-checked:text-primary dark:peer-checked:text-white">Bank</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input
                                        className="peer sr-only"
                                        name="method"
                                        type="radio"
                                        value="paypal"
                                        checked={method === 'paypal'}
                                        onChange={() => setMethod('paypal')}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 peer-checked:bg-primary/10 peer-checked:border-primary transition-all">
                                        <span className="material-symbols-outlined text-3xl mb-1 text-gray-400 dark:text-slate-300 peer-checked:text-primary">payments</span>
                                        <span className="text-xs font-bold text-gray-600 dark:text-slate-300 peer-checked:text-primary dark:peer-checked:text-white">PayPal</span>
                                    </div>
                                </label>
                            </div>

                            {/* Amount Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 ml-1">Withdrawal Amount</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="text-gray-500 dark:text-slate-400 font-bold">$</span>
                                    </div>
                                    <input
                                        className="w-full bg-input-bg-light dark:bg-input-bg-dark border-none pl-10 pr-20 py-4 rounded-xl text-lg font-bold text-typography-light dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        min="50"
                                        placeholder="0.00"
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    <button
                                        className="absolute inset-y-2 right-2 px-4 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-xs font-bold text-primary rounded-lg transition-colors border border-gray-200 dark:border-white/5"
                                        type="button"
                                        onClick={() => setAmount(availableBalance.toString())}
                                    >
                                        MAX
                                    </button>
                                </div>
                                <div className="flex justify-between px-1">
                                    <span className="text-xs text-gray-500">Min: $50.00</span>
                                    <span className="text-xs text-gray-500">Fee: $1.50</span>
                                </div>
                            </div>

                            {/* Wallet Address */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 ml-1">Wallet Address / Link</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 dark:text-slate-500 text-[20px]">link</span>
                                    </div>
                                    <input
                                        className="w-full bg-input-bg-light dark:bg-input-bg-dark border-none pl-11 pr-12 py-4 rounded-xl text-base font-medium text-typography-light dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="Enter your USDT (TRC20) or BTC address"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors" type="button">
                                        <span className="material-symbols-outlined text-[20px]">content_paste</span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-auto pt-6">
                                <button
                                    className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full shadow-lg shadow-primary/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group"
                                    type="submit"
                                >
                                    Process Withdrawal
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Transaction History */}
            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col border border-gray-200 dark:border-white/10 dark:bg-card-dark bg-card-light">
                <div className="p-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-typography-light dark:text-white">Transaction History</h3>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold text-gray-700 dark:text-white bg-gray-100 dark:bg-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">All Time</button>
                        <button className="px-4 py-2 text-xs font-bold text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white rounded-full transition-colors">Export CSV</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/5">
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold">Transaction ID</th>
                                <th className="px-6 py-4 font-semibold">Method</th>
                                <th className="px-6 py-4 font-semibold">Amount</th>
                                <th className="px-6 py-4 font-semibold text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-sm">
                            {transactions.map((tx, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 text-gray-700 dark:text-slate-300 font-medium">{tx.date} <span className="text-gray-500 dark:text-slate-500 text-xs block">{tx.time}</span></td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-slate-400 font-mono">{tx.id}</td>
                                    <td className="px-6 py-4 text-typography-light dark:text-white">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${tx.method === 'PayPal' ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400' : 'bg-emerald-500/20 text-emerald-500 dark:text-emerald-400'}`}>
                                                <span className="material-symbols-outlined text-[14px]">{tx.methodIcon}</span>
                                            </div>
                                            {tx.method}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-typography-light dark:text-white font-bold">${tx.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${tx.status === 'Paid' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Paid' ? 'bg-primary' : 'bg-yellow-400 animate-pulse'}`}></span>
                                            {tx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-white/10 flex justify-center bg-gray-50/50 dark:bg-transparent">
                    <button className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white transition-colors font-medium flex items-center gap-1">
                        View All Transactions
                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
