import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, Menu, X, LogIn, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'SDG Goals', path: '/goals' },
    { label: 'Stories', path: '/stories' },
    { label: 'Events', path: '/events' },
    { label: 'Resources', path: '/resources' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Globe className="w-6 h-6 text-white" />
          EcoConnect
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-yellow-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-yellow-300 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 hover:text-yellow-300 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-green-800 px-4 py-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-2 rounded hover:bg-green-600"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-2 rounded hover:bg-green-600"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-2 rounded hover:bg-green-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-2 rounded hover:bg-green-600"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
