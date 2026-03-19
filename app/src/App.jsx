import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import AuthLayout from './components/layout/AuthLayout';
import UserLayout from './components/layout/UserLayout';
import AdminLayout from './components/layout/AdminLayout';

// Landing
import Home from './pages/landing/Home';

// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// User Pages
import Dashboard from './pages/user/Dashboard';
import VPSStatus from './pages/user/VPSStatus';
import Withdraws from './pages/user/Withdraws';
import SupportRequests from './pages/user/SupportRequests';
import Notice from './pages/user/Notice';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import WithdrawRequests from './pages/admin/WithdrawRequests';
import AdminSupportRequests from './pages/admin/SupportRequests';
import ManageVPS from './pages/admin/ManageVPS';
import ManageEmployees from './pages/admin/ManageEmployees';
import MarketingAdminNotes from './pages/admin/MarketingAdminNotes';

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
          <Route path="vps-status" element={<VPSStatus />} />
          <Route path="withdraws" element={<Withdraws />} />
          <Route path="support-requests" element={<SupportRequests />} />
          <Route path="notice" element={<Notice />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/withdraw-requests" element={<WithdrawRequests />} />
          <Route path="/admin/support-requests" element={<AdminSupportRequests />} />
          <Route path="/admin/manage-vps" element={<ManageVPS />} />
          <Route path="/admin/manage-employees" element={<ManageEmployees />} />
          <Route path="/admin/marketing-notes" element={<MarketingAdminNotes />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
