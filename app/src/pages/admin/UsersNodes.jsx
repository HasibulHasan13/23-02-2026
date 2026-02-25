import { useState } from 'react';
import { Link } from 'react-router-dom';

const USERS = [
    { id: 1, initials: 'JD', gradient: 'from-purple-500 to-blue-500', name: 'John Doe', email: 'john@example.com', plan: 'Pro Surveyor', planColor: 'bg-admin-primary/10 text-admin-primary border-admin-primary/20', ip: '192.168.1.45', status: 'active' },
    { id: 2, initials: 'AS', gradient: 'from-orange-500 to-red-500', name: 'Alice Smith', email: 'alice@example.com', plan: 'Enterprise', planColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', ip: '10.0.0.24', status: 'active' },
    { id: 3, initials: 'MR', gradient: 'from-gray-500 to-gray-700', name: 'Mark Roberts', email: 'mark.r@test.com', plan: 'Basic', planColor: 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20', ip: null, status: 'pending' },
    { id: 4, initials: 'SK', gradient: 'from-teal-500 to-cyan-500', name: 'Sophia Kim', email: 'sophia.k@demo.com', plan: 'Pro Surveyor', planColor: 'bg-admin-primary/10 text-admin-primary border-admin-primary/20', ip: '172.16.0.8', status: 'active' },
    { id: 5, initials: 'RB', gradient: 'from-red-500 to-pink-500', name: 'Ryan Brooks', email: 'ryan.b@mail.com', plan: 'Basic', planColor: 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20', ip: '192.168.5.12', status: 'banned' },
];

export default function UsersNodes() {
    const [search, setSearch] = useState('');
    const [showAssignModal, setShowAssignModal] = useState(null);
    const [assignIp, setAssignIp] = useState('');

    const filtered = USERS.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full max-w-7xl mx-auto text-gray-800 dark:text-gray-100 space-y-8">
            {/* Page Title */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Link to="/admin/pulse" className="hover:text-admin-primary transition-colors">Dashboard</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-gray-800 dark:text-white font-medium">Nodes & Users</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User & VPS Management</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage users, assign VPS nodes, and monitor account statuses.</p>
                </div>
                <div className="flex gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700/50">
                        <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span> System Live
                    </span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Users', value: '12,450', icon: 'group', color: 'text-admin-primary' },
                    { label: 'Active', value: '11,890', icon: 'check_circle', color: 'text-emerald-500' },
                    { label: 'Pending', value: '320', icon: 'pending', color: 'text-yellow-500' },
                    { label: 'Banned', value: '240', icon: 'block', color: 'text-red-500' },
                ].map(stat => (
                    <div key={stat.label} className="glass-panel bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4">
                        <span className={`material-symbols-outlined text-3xl ${stat.color}`}>{stat.icon}</span>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* User Management Table */}
            <div className="glass-panel bg-white/70 dark:bg-black/20 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
                <div className="p-6 border-b border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">User Management</h3>
                    <div className="flex gap-3 w-full md:w-auto items-center">
                        <div className="relative flex-1 md:w-64">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
                            </div>
                            <input
                                className="block w-full p-2 pl-10 text-sm border border-gray-200 dark:border-white/10 rounded-lg bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-admin-primary focus:outline-none"
                                placeholder="Search users..."
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-admin-primary text-white rounded-lg hover:bg-admin-primary-hover transition-colors shadow-sm shadow-admin-primary/30 whitespace-nowrap">
                            <span className="material-symbols-outlined text-sm">person_add</span>
                            Add User
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-100/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-white/10">
                            <tr>
                                <th className="px-6 py-4 w-6"><input type="checkbox" className="rounded border-gray-300 dark:border-white/20 text-admin-primary" /></th>
                                <th className="px-6 py-4" scope="col">User</th>
                                <th className="px-6 py-4" scope="col">Package Plan</th>
                                <th className="px-6 py-4" scope="col">VPS IP Address</th>
                                <th className="px-6 py-4" scope="col">Status</th>
                                <th className="px-6 py-4 text-right" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {filtered.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300 dark:border-white/20 text-admin-primary" /></td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${user.gradient} flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}>
                                                {user.initials}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-white">{user.name}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`${user.planColor} text-xs px-2 py-1 rounded-md border`}>{user.plan}</span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">
                                        {user.ip || <span className="opacity-40">—</span>}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.status === 'active' && (
                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
                                        )}
                                        {user.status === 'pending' && (
                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Pending
                                            </span>
                                        )}
                                        {user.status === 'banned' && (
                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Banned
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => { setShowAssignModal(user.id); setAssignIp(user.ip || ''); }}
                                                className={`text-sm font-medium transition-colors ${user.ip ? 'text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary' : 'bg-admin-primary hover:bg-admin-primary-hover text-white px-3 py-1 rounded shadow-sm shadow-admin-primary/20'}`}
                                            >
                                                {user.ip ? 'Reassign IP' : 'Assign IP'}
                                            </button>
                                            <button className="text-gray-500 hover:text-admin-primary dark:text-gray-400 dark:hover:text-admin-primary font-medium text-sm transition-colors">Edit</button>
                                            <button className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 font-medium text-sm transition-colors">
                                                <span className="material-symbols-outlined text-sm">{user.status === 'banned' ? 'lock_open' : 'block'}</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-4xl block mb-2 opacity-30">search_off</span>
                                        No users found matching "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-transparent text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Showing <span className="font-medium text-gray-800 dark:text-white">5</span> of <span className="font-medium text-gray-800 dark:text-white">12,450</span> users</span>
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-admin-primary dark:hover:text-admin-primary flex items-center gap-1 font-medium transition-colors">
                        View all users <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Assign IP Modal */}
            {showAssignModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-admin-forest-darkest/60 backdrop-blur-md" onClick={() => setShowAssignModal(null)}></div>
                    <div className="relative z-10 bg-white dark:bg-admin-forest-darkest border border-gray-200 dark:border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Assign VPS IP Address</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                            Assign or update the VPS IP for <strong className="text-gray-900 dark:text-white">{USERS.find(u => u.id === showAssignModal)?.name}</strong>.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1 block mb-1">IP Address</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <span className="material-symbols-outlined text-lg">dns</span>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="e.g. 192.168.1.100"
                                        value={assignIp}
                                        onChange={e => setAssignIp(e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button onClick={() => setShowAssignModal(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    Cancel
                                </button>
                                <button onClick={() => setShowAssignModal(null)} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-admin-primary to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-admin-primary/30 hover:shadow-admin-primary/50 transition-all">
                                    Assign IP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
