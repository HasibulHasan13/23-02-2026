import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import { useAuth } from '../../context/AuthContext';

export default function UserLayout() {
    const location = useLocation();
    const path = location.pathname;
    const { user, logout } = useAuth();

    if (!user || user.role !== 'user') {
        return <Navigate to="/login" replace />;
    }

    const navLinks = [
        { name: 'Command Center', path: '/user/dashboard', icon: 'dashboard' },
        { name: 'VPS Nodes', path: '/user/vps', icon: 'dns' },
        { name: 'Earnings', path: '/user/earnings', icon: 'account_balance_wallet' },
        { name: 'Active Surveys', path: '/user/dashboard', icon: 'poll', badge: '3' },
        { name: 'Settings', path: '/user/settings', icon: 'settings' },
    ];

    return (
        <div className="user-layout bg-background-light dark:bg-background-dark font-display h-screen overflow-hidden flex transition-colors duration-300 antialiased">
            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between p-4 glass-panel border-b border-gray-200 dark:border-gray-700/50 sticky top-0 z-50 w-full fixed">
                <div className="flex items-center space-x-2">
                    <span className="material-icons-round text-primary dark:text-lime text-3xl">analytics</span>
                    <span className="font-bold text-xl text-typography-light dark:text-white">ARS<span className="font-light text-gray-500 dark:text-gray-400">Surveys</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="text-typography-light dark:text-white">
                        <span className="material-icons-round">menu</span>
                    </button>
                </div>
            </header>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-full glass-sidebar z-40 fixed left-0 top-0 pt-8 pb-6 px-4 justify-between transition-colors duration-300">
                <div>
                    <div className="flex items-center space-x-3 px-4 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-primary dark:from-primary dark:to-lime flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-icons-round text-white dark:text-background-dark text-2xl">insights</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-typography-light dark:text-white tracking-wide">ARS</h1>
                            <p className="text-xs text-primary-light dark:text-lime font-medium tracking-widest uppercase">Surveys</p>
                        </div>
                    </div>
                    <nav className="space-y-2">
                        {navLinks.map((link) => {
                            const active = path === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
                                        ? 'bg-primary/10 border border-primary/20 text-primary-light dark:text-lime'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-typography-light dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                        }`}
                                >
                                    <span className={`material-icons-round ${active ? '' : 'group-hover:text-primary dark:group-hover:text-lime transition-colors'}`}>
                                        {link.icon}
                                    </span>
                                    <span className="font-medium">{link.name}</span>
                                    {link.badge && (
                                        <span className="ml-auto bg-primary-light dark:bg-lime text-white dark:text-background-dark text-xs font-bold px-2 py-0.5 rounded-full">
                                            {link.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="space-y-4">
                    <div className="glass-panel p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                            <span className="material-icons-round text-sm">brightness_6</span>
                            <span className="text-xs font-medium">Appearance</span>
                        </div>
                        <div className="transform scale-75 origin-right">
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="glass-panel p-4 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <img alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGIucovptTi7y9wMRopnzXbbKFJb2hhujUBP_yskLH3mCk_RfT_BwBEENUU3w1-eF29Hvy3XRvootr17qNs43XQ-k2YhtNMhyeJxSbZjBAlG3ChNeLZj_mRFAGcq-jH7WpKlaMoj_IawsS4Mef7qp8eZ9OdbQeIvTt3IFY8OSitqTQySZLU_KXbVjZLdVXtornXDtZnIJ_5X27LyeYZ5o2gK70xr5GhyCqUx9o4pnxbGv5OXMoitO8CED1cc6alClDZ08S2EK-S_M" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-typography-light dark:text-white truncate">Alex Chen</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">ID: #8829-VPS</p>
                        </div>
                        <button onClick={logout} title="Logout" className="focus:outline-none">
                            <span className="material-icons-round text-gray-500 hover:text-red-500 transition-colors">logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            <main className="flex-1 md:ml-64 h-full overflow-y-auto relative z-0 transition-colors duration-300 mt-16 md:mt-0">
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] transition-colors duration-500"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-lime/20 dark:bg-lime/5 rounded-full blur-[100px] transition-colors duration-500"></div>
                </div>
                <Outlet />
            </main>
        </div>
    );
}
