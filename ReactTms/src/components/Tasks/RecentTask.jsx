import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../../services/taskService';

const RecentTask = ({ onEdit,reloadTrigger }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [reloadTrigger]);

  // Delete handler
  const handleDelete = async (taskId) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (!confirmed) return;

    try {
      await deleteTask(taskId);
     await fetchTasks();         
      alert('Task deleted successfully');
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task');
    }
  };

  // Edit handler stub — you can pass this up to parent to open edit form
  const handleEdit = (task) => {
    if (onEdit) onEdit(task);
    else alert('Edit task: ' + task.title);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="my-8 bg-white px-6 py-8 rounded-xl shadow-lg">
      <section>
        <h1 className="text-2xl font-extrabold mb-6 text-gray-800">Recent Tasks</h1>
        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-700 border-collapse">
            <thead className="text-xs text-gray-600 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-4">Task Name</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No tasks found.
                  </td>
                </tr>
              ) : (
                tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {task.title}
                    </td>
                    <td className="px-6 py-4">{task.assignedTo ?? '-'}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          task.isCompleted
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {task.isCompleted ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {task.dueDate ? task.dueDate.split('T')[0] : '-'}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => handleEdit(task)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RecentTask;
