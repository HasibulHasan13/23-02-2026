import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import AuthLayout from './components/layout/AuthLayout';
import UserLayout from './components/layout/UserLayout';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// User Pages
import Dashboard from './pages/user/Dashboard';
import VPSNodes from './pages/user/VPSNodes';
import Earnings from './pages/user/Earnings';
import UserSettings from './pages/user/Settings';

// Admin Pages
import NetworkPulse from './pages/admin/NetworkPulse';
import PayoutQueue from './pages/admin/PayoutQueue';
import AdminSettings from './pages/admin/Settings';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="/user/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vps" element={<VPSNodes />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/pulse" replace />} />
          <Route path="/admin/pulse" element={<NetworkPulse />} />
          <Route path="/admin/payout-queue" element={<PayoutQueue />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
