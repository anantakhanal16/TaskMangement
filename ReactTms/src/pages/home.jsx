import React, { useState, useEffect, useContext } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dashboard from '../components/Dashboard';
import RecentTask from '../components/Tasks/RecentTask';
import TaskbyStatus from '../components/Tasks/TaskbyStatus';
import TopNav from '../components/TopNav/TopNav';
import TaskForm from '../components/Tasks/TaskForm';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [reloadTasks, setReloadTasks] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const navigate = useNavigate();
  const { user: authUser } = useContext(AuthContext);

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
  }, [authUser, navigate]);

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
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-200">
      <SideNav />
      <main className="flex-1 bg-gray-100">
        <TopNav user={authUser} />

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
