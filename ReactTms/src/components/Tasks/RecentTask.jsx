import React from 'react';

export const RecentTask = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 border-b">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Design Homepage UI
                </td>
                <td className="px-6 py-4">Ananta Khanal</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4">2025-06-30</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 border-b">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Implement Task API
                </td>
                <td className="px-6 py-4">Bibek Shrestha</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4">2025-06-20</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Setup CI/CD Pipeline
                </td>
                <td className="px-6 py-4">Sita Sharma</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">2025-07-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RecentTask;
