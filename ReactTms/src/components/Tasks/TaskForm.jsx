import React, { useState } from 'react';

const TaskForm = () => {

  const [title, setTitle] = useState('')
   const [status, setStatus] = useState('Todo');

   const handleSubmit = (e) => {
    e.preventDefault();

    // const newTask = {
    //   title,
    //   status,
    // //      onCreate(newTask); 
    // //       setTitle('');
    // // setStatus('Todo')
    // };
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Add Task</h2>

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="mb-2 p-2 w-full border rounded" />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-2 p-2 w-full border rounded"
>
        <option value="Todo">Todo</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      ></button>
    </form>
  )
}

export default TaskForm