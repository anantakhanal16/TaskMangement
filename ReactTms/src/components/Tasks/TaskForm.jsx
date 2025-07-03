import React, { useState } from 'react';
import { createTask, updateTask } from '../../services/taskService';

const TaskForm = ({ onClose, onTaskAdded, taskToEdit }) => {
  const [task, setTask] = useState({
    title: taskToEdit?.title || '',
    description: taskToEdit?.description || '',
    assignedTo: taskToEdit?.assignedTo || '',
    dueDate: taskToEdit?.dueDate ? taskToEdit.dueDate.split('T')[0] : '',
    isCompleted: taskToEdit?.isCompleted || false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTask((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formattedTask = {
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate) : null,
    };

    try {
      if (taskToEdit)
     {
        formattedTask.id = taskToEdit.id
        await updateTask(taskToEdit.id, formattedTask);
      } else
       {
        await createTask(formattedTask);
      }
      if (onTaskAdded) onTaskAdded();
      onClose();
    } catch (error) {
      console.error('Error saving task:', error);
      alert('Failed to save task');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">
          {taskToEdit ? 'Edit Task' : 'Add New Task'}
        </h2>
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
        {isSubmitting
          ? 'Submitting...'
          : taskToEdit
            ? 'Update Task'
            : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
