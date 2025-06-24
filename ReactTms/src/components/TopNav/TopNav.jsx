import React from 'react';

const TopNav = ({ user }) => {
  return (
    <header className="w-full flex justify-between items-center bg-white border-b shadow-sm px-6 py-4 sticky top-0 z-40">
      <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 focus:outline-none">
            <img
              src={user.avatar}
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span>{user.name}</span>
          </button>

          {/* Dropdown on hover */}
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
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
            <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
