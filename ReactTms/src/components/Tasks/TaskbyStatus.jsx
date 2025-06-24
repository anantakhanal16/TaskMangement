import React from 'react';

const TaskbyStatus = () => {
  return (
    <div className="my-8 bg-white px-6 py-8 rounded-xl shadow-lg">
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tasks by Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-100 p-6 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-red-700">To Do</h3>
            <p className="text-4xl text-red-700 font-bold mt-2">5</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-yellow-800">In Progress</h3>
            <p className="text-4xl text-yellow-700 font-bold mt-2">3</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-green-800">Done</h3>
            <p className="text-4xl text-green-700 font-bold mt-2">14</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskbyStatus;
