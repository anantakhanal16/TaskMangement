import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const TopNav = ({ user }) => {
  const { logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 loading state
  const dropdownRef = useRef(null);
  const navigate = useNavigate();



  const handleLogout = async () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
      setLoading(false);
    }, 900);
    logout();

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full flex justify-between items-center bg-white border-b shadow-sm px-6 py-4 sticky top-0 z-40">
      <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 focus:outline-none"
        >
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover border"
          />
          <span>{user.name}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <a
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              👤 Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              ⚙️ Settings
            </a>

            <button
              onClick={handleLogout}
              disabled={loading}
              className={`block w-full text-left px-4 py-2 ${loading ? 'text-gray-400 cursor-wait' : 'text-red-600 hover:bg-gray-100'
                }`}
            >
              {loading ? 'Logging out...' : '🚪 Logout'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopNav;
