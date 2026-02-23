import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Check local storage for existing session
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            if (storedUser) return JSON.parse(storedUser);
        }
        return null;
    });

    const login = (email, password) => {
        // Simulate API call and authentication
        let nextUser = null;

        // Simple role logic based on email
        if (email.includes('admin')) {
            nextUser = { email, role: 'admin', name: 'Admin User' };
        } else {
            nextUser = { email, role: 'user', name: 'Johnathan Doe' };
        }

        setUser(nextUser);
        localStorage.setItem('user', JSON.stringify(nextUser));
        return nextUser;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
