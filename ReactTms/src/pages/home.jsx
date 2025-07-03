import React, { useState } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dashboard from '../components/Dashboard';
import RecentTask from '../components/Tasks/RecentTask';
import TaskbyStatus from '../components/Tasks/TaskbyStatus';
import TopNav from '../components/TopNav/TopNav';
import TaskForm from '../components/Tasks/TaskForm';

const user = {
  name: 'Ananta Khanal',
  avatar: 'https://i.pravatar.cc/100?img=3',
};

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [reloadTasks, setReloadTasks] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleAddTaskClick = () => {
    setEditTask(null);
    setShowForm(true);
  };
  const handleTaskAdded = () => {
    setShowForm(false);
    setReloadTasks(prev => !prev);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleEditTasksClick = (task) => {
    setEditTask(task);
    setShowForm(true);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-200">
      <SideNav />
      <main className="flex-1 bg-gray-100">
        <TopNav user={user} />

        <div className="p-6 space-y-8">
          {showForm && (
            <TaskForm
              onClose={handleCloseForm}
              onTaskAdded={handleTaskAdded}
              taskToEdit={editTask}
            />
          )}
          <Dashboard onAddTaskClick={handleAddTaskClick} />
          <RecentTask reloadTrigger={reloadTasks} onEdit={handleEditTasksClick} />
          <TaskbyStatus />
        </div>
      </main>
    </div>
  );
};

export default Home;
