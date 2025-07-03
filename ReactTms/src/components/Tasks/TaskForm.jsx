import React, { useState } from 'react';
import { createTask } from '../../services/taskService';

const TaskForm = ({ onClose,onTaskAdded }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    dueDate: '',
    isCompleted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTask((prev) => ({ ...prev, [name]: checked }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newTask = {
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate) : null,
    };

    try {
      await createTask(newTask);
      //reload table 
       if (onTaskAdded) onTaskAdded(); 
  
      // Reset form
      setTask({
        title: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        isCompleted: false,
      });

      onClose(); 
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Add New Task</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-red-500 font-semibold hover:underline"
        >
          ✖ Close
        </button>
      </div>

      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
        placeholder="Task Title"
        required
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />

      <textarea
        name="description"
        value={task.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />

      <input
        type="text"
        name="assignedTo"
        value={task.assignedTo}
        onChange={handleInputChange}
        placeholder="Assign To (e.g. user@example.com)"
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isCompleted"
          checked={task.isCompleted}
          onChange={handleCheckboxChange}
          disabled={isSubmitting}
        />
        <span>Mark as Completed</span>
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default TaskForm;
