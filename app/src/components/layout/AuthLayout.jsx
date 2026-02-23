import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="user-layout bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 relative overflow-hidden font-display">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] dark:bg-primary/5"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] dark:bg-primary/5"></div>
            </div>
            <Outlet />
        </div>
    );
}
