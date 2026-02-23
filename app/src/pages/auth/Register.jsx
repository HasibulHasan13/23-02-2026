import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="w-full max-w-md bg-card-light dark:bg-card-dark backdrop-blur-md border border-white/40 dark:border-gray-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-10 relative z-10">
            <div className="flex flex-col items-center mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L2 20H22L12 3Z" fill="none" stroke="#4CAF50" strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M12 8L6 18H18L12 8Z" fill="#4CAF50" opacity="0.6"></path>
                    </svg>
                    <span className="text-xl font-bold text-typography-light dark:text-white tracking-tight">ARS Surveys</span>
                </div>
                <h1 className="text-3xl font-bold text-typography-light dark:text-white mb-2 text-center">Create Account</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Start gathering insights today.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-typography-light dark:text-gray-300" htmlFor="fullname">Full Name</label>
                    <div className="relative">
                        <input className="w-full pl-5 pr-4 py-3 rounded-full border-none bg-input-bg-light dark:bg-input-bg-dark text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm" id="fullname" placeholder="John Doe" required type="text" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-typography-light dark:text-gray-300" htmlFor="email">Email Address</label>
                    <div className="relative">
                        <input className="w-full pl-5 pr-4 py-3 rounded-full border-none bg-input-bg-light dark:bg-input-bg-dark text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm" id="email" placeholder="name@company.com" required type="email" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-typography-light dark:text-gray-300" htmlFor="password">Password</label>
                    <div className="relative">
                        <input className="w-full pl-5 pr-12 py-3 rounded-full border-none bg-input-bg-light dark:bg-input-bg-dark text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm" id="password" placeholder="••••••••" required type="password" />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" type="button">
                            <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                        </button>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-typography-light dark:text-gray-300" htmlFor="confirm_password">Confirm Password</label>
                    <div className="relative">
                        <input className="w-full pl-5 pr-4 py-3 rounded-full border-none bg-input-bg-light dark:bg-input-bg-dark text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm" id="confirm_password" placeholder="••••••••" required type="password" />
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <label className="custom-checkbox relative flex items-center cursor-pointer">
                        <input className="w-4 h-4 text-primary bg-transparent border-gray-400 dark:border-gray-500 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox" required />
                    </label>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <Link className="text-primary hover:underline font-medium" to="#">Terms & Conditions</Link>
                    </span>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary-light to-primary dark:from-primary dark:to-lime text-white dark:text-background-dark font-bold py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(50,215,75,0.3)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group block text-center">
                    Create Account
                </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account? <Link className="text-primary font-bold hover:underline ml-1" to="/login">Login</Link>
            </div>

            <div className="absolute bottom-[-40px] left-0 w-full flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-500 opacity-70">
                <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Secure AES-256</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">privacy_tip</span>
                    <span>Privacy First</span>
                </div>
            </div>
        </div>
    );
}
