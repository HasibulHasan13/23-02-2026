
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
        <div className="admin-layout bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col relative overflow-hidden">
            {/* Background orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-admin-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-admin-accent-lime/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-admin-forest-dark/40 rounded-full blur-[80px]"></div>
            </div>

            <nav className="w-full glass-panel sticky top-0 z-40 px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-admin-primary to-admin-accent-lime flex items-center justify-center shadow-lg shadow-admin-primary/20">
                        <span className="material-symbols-outlined text-white">analytics</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-[#022c22] dark:text-white">ARS <span className="text-admin-primary font-light">Surveys</span></h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/admin/pulse" className={`text-sm font-medium transition-colors ${path.includes('pulse') ? 'text-admin-primary' : 'text-gray-500 dark:text-gray-300 hover:text-admin-primary'}`}>Network Pulse</Link>
                    <Link to="/admin/users" className={`text-sm font-medium transition-colors ${path.includes('users') ? 'text-admin-primary' : 'text-gray-500 dark:text-gray-300 hover:text-admin-primary'}`}>Nodes &amp; Users</Link>
                    <Link to="/admin/payouts" className={`text-sm font-medium transition-colors ${path.includes('payouts') ? 'text-admin-primary' : 'text-gray-500 dark:text-gray-300 hover:text-admin-primary'}`}>Payout Queue</Link>
                    <Link to="/admin/settings" className={`text-sm font-medium transition-colors ${path.includes('settings') ? 'text-admin-primary' : 'text-gray-500 dark:text-gray-300 hover:text-admin-primary'}`}>Settings</Link>

                    <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

                    <button
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                        onClick={() => document.documentElement.classList.toggle('dark')}
                    >
                        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
                        <span className="material-symbols-outlined hidden dark:block">light_mode</span>
                    </button>

                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors relative">
                        <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-300 dark:border-white/10">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold dark:text-white">Admin</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">System Center</p>
                        </div>
                        <img
                            alt="Admin"
                            className="w-10 h-10 rounded-full border-2 border-admin-primary object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtZV90lrXTbIm64MpzCUWlvfGOp0dpeYHUi4q-MTEmtr24JkaVL8J1tJoAjB9dFJsRmoKUk8DxOXAwG6HCkRQMMq0xHdGiOZsVKEggI2LFvWtMXewI4-IBFRzzlnWRvioaplvCwzCn9gNclBr0UsKw-bBrm_CsNo8KOMeTGYPthqp4mEZvYxZ-Pn6JwDHnfBPVWzVQGeznhp0u-GbW5ZbBo2A_y8wosed_oRvrx4E2FISRkhj3utPufNOc6w0V9aQzTupaKvTHRI"
                        />
                        <button onClick={logout} title="Logout" className="focus:outline-none">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors cursor-pointer">logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-1 p-4 md:p-8 overflow-y-auto relative z-0">
                <Outlet />
            </main>
        </div>
    );
}
