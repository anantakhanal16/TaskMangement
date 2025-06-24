import React from 'react';
import StatCard from './StatusCard/Index';

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Search + Add Task Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow gap-4">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          ➕ Add Task
        </button>
      </div>

      {/* Task Overview Cards */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Task Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Tasks" value="24" color="green" />
          <StatCard title="Completed" value="14" color="blue" />
          <StatCard title="Pending" value="6" color="yellow" />
          <StatCard title="Due Today" value="3" color="purple" />
          <StatCard title="Overdue" value="1" color="red" />
          <StatCard title="In Progress" value="5" color="indigo" />
          <StatCard title="Total Users" value="2" color="orange" />
          <StatCard title="Completion %" value="58%" color="teal" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
