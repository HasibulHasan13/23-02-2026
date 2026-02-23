/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4CAF50", // Emerald Green 
                    light: "#10B981",   // Light Mode Vibrant Emerald
                    dark: "#388E3C",
                    hover: "#43A047",
                },
                lime: {
                    DEFAULT: "#9DD666", // Lime Green
                },
                secondary: "#4CAF50",
                background: {
                    light: "#F4F9F4",
                    dark: "#0F1C0F",
                },
                surface: {
                    light: "#FFFFFF",
                    dark: "#162B18",
                },
                typography: {
                    light: "#1A321A",
                    dark: "#E2E8F0",
                },
                card: {
                    light: "rgba(255, 255, 255, 0.7)",
                    dark: "rgba(20, 35, 25, 0.6)",
                },
                "input-bg": {
                    light: "#FFFFFF",
                    dark: "#1E3324",
                },
                // Admin Space
                "admin-primary": "#10B981",
                "admin-primary-dark": "#047857",
                "admin-forest-darkest": "#022c22",
                "admin-forest-dark": "#064e3b",
                "admin-glass-border": "rgba(255, 255, 255, 0.1)",
                "admin-glass-bg": "rgba(6, 78, 59, 0.4)",
                "admin-bg-light": "#F0FDF4",
                "admin-bg-dark": "#022c22",
                "admin-accent-lime": "#84cc16",
                // Landing Space
                "landing-bg-light": "#F0F4F1",
                "landing-bg-dark": "#1A321A",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            backdropBlur: {
                'xs': '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(74, 222, 128, 0.5)',
                'card': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
            }
        },
    },
    plugins: [],
}
