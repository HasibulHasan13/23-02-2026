import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
    const location = useLocation();
    const path = location.pathname;
    const { user, logout } = useAuth();

    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="admin-layout bg-admin-bg-light dark:bg-admin-bg-dark font-display text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col relative overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-admin-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-admin-accent-lime/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-admin-forest-dark/40 rounded-full blur-[80px]"></div>
            </div>

            <nav className="w-full glass-panel sticky top-0 z-40 px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-white/10 blur-[0.5px]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-admin-primary to-admin-accent-lime flex items-center justify-center shadow-lg shadow-admin-primary/20">
                        <span className="material-symbols-outlined text-white">analytics</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-[#022c22] dark:text-white">ARS <span className="text-admin-primary font-light">Surveys</span></h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/admin/pulse" className={`text-sm font-medium ${path.includes('pulse') ? 'text-admin-primary' : 'text-gray-500 hover:text-admin-primary transition-colors'}`}>Network Pulse</Link>
                    <Link to="/admin/users" className={`text-sm font-medium ${path.includes('users') ? 'text-admin-primary' : 'text-gray-500 hover:text-admin-primary transition-colors'}`}>Nodes & Users</Link>
                    <Link to="/admin/payouts" className={`text-sm font-medium ${path.includes('payouts') ? 'text-admin-primary' : 'text-gray-500 hover:text-admin-primary transition-colors'}`}>Payout Queue</Link>
                    <Link to="/admin/settings" className={`text-sm font-medium ${path.includes('settings') ? 'text-admin-primary' : 'text-gray-500 hover:text-admin-primary transition-colors'}`}>Settings</Link>

                    <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors relative">
                        <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-300 dark:border-white/10">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold dark:text-white">Admin</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">System Center</p>
                        </div>
                        <button onClick={logout} title="Logout" className="focus:outline-none">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors cursor-pointer">logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-1 p-4 md:p-8 overflow-y-auto relative z-0 flex flex-col items-center">
                <Outlet />
            </main>

            {/* Admin Theme Toggle Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    className="w-12 h-12 rounded-full bg-admin-bg-dark dark:bg-white text-white dark:text-[#022c22] shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                    onClick={() => document.documentElement.classList.toggle('dark')}
                >
                    <span className="material-symbols-outlined dark:hidden">dark_mode</span>
                    <span className="material-symbols-outlined hidden dark:block">light_mode</span>
                </button>
            </div>
        </div>
    );
}
