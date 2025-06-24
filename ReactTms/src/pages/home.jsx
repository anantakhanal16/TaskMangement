import React from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dashboard from '../components/Dashboard';
import RecentTask from '../components/Tasks/RecentTask';
import TaskbyStatus from '../components/Tasks/TaskbyStatus';
import TopNav from '../components/TopNav/TopNav';

const user = {
  name: 'Ananta Khanal',
  avatar: 'https://i.pravatar.cc/100?img=3', // placeholder image
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-200">
      <SideNav />
      <main className="flex-1 bg-gray-100">
        {/* Top Navigation */}
        <TopNav user={user} />

        {/* Main dashboard content */}
        <div className="p-6 space-y-8">
          <Dashboard />
          <RecentTask />
          <TaskbyStatus />
        </div>
      </main>
    </div>
  );
};

export default Home;
