import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // Initial check
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') === 'dark';
        }
        return true; // Default to dark as per design
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            root.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            aria-label="Toggle Theme"
            className="theme-toggle-btn w-10 h-10"
            onClick={() => setIsDark(!isDark)}
        >
            <span className="material-icons-round theme-icon icon-sun">light_mode</span>
            <span className="material-icons-round theme-icon icon-moon">dark_mode</span>
        </button>
    );
}
