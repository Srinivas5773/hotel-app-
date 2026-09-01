import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { OrderPage } from './pages/OrderPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { useAuthStore } from './store/authStore';

export const App: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-stone-100 flex flex-col selection:bg-orange-500 selection:text-white">
        {/* Persistent Top Header */}
        <Header />

        {/* Dynamic Page Routes */}
        <div className="flex-1">
          <Routes>
            {/* If user is not logged in on first visit, show the Candidate Login & Welcome screen */}
            <Route
              path="/"
              element={user?.isLoggedIn ? <HomePage /> : <LoginPage />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/:orderId" element={<OrderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Mobile-first Persistent Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
