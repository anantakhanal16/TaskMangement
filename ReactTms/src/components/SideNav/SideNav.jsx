import React, { useState } from 'react';

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <div className="md:hidden p-4 bg-gray-900 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Menu</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`
          ${isOpen ? 'block' : 'hidden'}
          md:block 
          w-64 min-h-screen p-6 bg-gray-900 shadow-lg fixed md:relative z-50
        `}
      >
        <div className="text-start">
          <h1 className="text-2xl text-white font-bold my-4 drop-shadow-md px-2">
            Menu
          </h1>
          <ul className="flex flex-col gap-1 font-medium">
            <ul className="flex flex-col gap-1 font-medium">
              <NavItem href="/dashboard" text="🏠 Dashboard" />
              <NavItem href="/my-tasks" text="🙋 My Tasks" />
              <NavItem href="/today" text="📅 Today's Tasks" />
              <NavItem href="/overdue" text="⏰ Overdue" />
              <NavItem href="/calendar" text="📆 Calendar" />
              <NavItem href="/analytics" text="📊 Analytics" />
              <NavItem href="/tags" text="🏷️ Tags" />
              <NavItem href="/team" text="👥 Team" />
              <NavItem href="/support" text="💬 Support" />
              <NavItem href="/add-task" text="➕ Add Task" />
              <NavItem href="/all-tasks" text="📋 All Tasks" />
              <NavItem href="/settings" text="⚙️ Settings" />
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
};

// Reusable NavItem Component
const NavItem = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="block px-4 py-2 rounded-lg text-white hover:bg-gray-100 hover:text-black transition-all"
    >
      {text}
    </a>
  </li>
);

export default SideNav;
