import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = login(email, password);
        if (user.role === 'admin') {
            navigate('/admin/pulse');
        } else {
            navigate('/user/dashboard');
        }
    };

    return (
        <div className="z-10 w-full max-w-md flex flex-col items-center">
            <div className="mb-8 flex items-center gap-3">
                <div className="text-primary">
                    <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path className="text-primary" d="M12 2L2 22H22L12 2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        <path className="opacity-40" d="M12 6L5 20H19L12 6Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-typography-light dark:text-white">ARS Surveys</h1>
            </div>

            <div className="w-full glass-panel bg-card-light dark:bg-card-dark border border-white/40 dark:border-white/10 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 relative">
                <div className="mb-8 mt-2">
                    <h2 className="text-3xl font-bold text-typography-light dark:text-white mb-2">Welcome back</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-typography-light dark:text-gray-200 ml-1" htmlFor="email">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 text-[20px]">mail</span>
                            </div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full pl-11 pr-4 py-3.5 bg-input-bg-light dark:bg-input-bg-dark border-none rounded-full text-typography-light dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition-shadow" id="email" name="email" placeholder="user@example.com" type="email" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-typography-light dark:text-gray-200 ml-1" htmlFor="password">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                            </div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full pl-11 pr-11 py-3.5 bg-input-bg-light dark:bg-input-bg-dark border-none rounded-full text-typography-light dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition-shadow" id="password" name="password" placeholder="••••••••" type="password" />
                            <button className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-gray-600" type="button">
                                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center">
                            <input className="h-4 w-4 text-primary bg-transparent border-gray-400 dark:border-gray-500 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" id="remember-me" name="remember-me" type="checkbox" />
                            <label className="ml-2 block text-sm text-gray-600 dark:text-gray-400 cursor-pointer" htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <Link className="font-medium text-primary hover:text-primary-hover transition-colors" to="/admin/pulse">Forgot Password?</Link>
                        </div>
                    </div>

                    <button className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-full shadow-lg shadow-primary/30 text-base font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-[1.01]" type="submit">
                        Login
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?
                            <Link className="font-semibold text-typography-light dark:text-white hover:text-primary transition-colors ml-1" to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>

            <div className="mt-8 flex items-center gap-6 opacity-60">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-500">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    Secure AES-256
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-500">
                    <span className="material-symbols-outlined text-[16px]">security</span>
                    Privacy First
                </div>
            </div>
        </div>
    );
}
