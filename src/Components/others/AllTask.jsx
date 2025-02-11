import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  
  if (!employees || employees.length === 0) {
    return (
      <div className="bg-[#1c1c1c] p-5 rounded mt-5 text-white">
        <h2>No employees found.</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] p-6 rounded mt-5 shadow-md overflow-x-auto">
      <h2 className="text-2xl font-semibold text-emerald-500 mb-4">Employee Task Overview</h2>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-white">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-2 px-4 text-left">Employee Name</th>
              <th className="py-2 px-4 text-left">New Task</th>
              <th className="py-2 px-4 text-left">Active Task</th>
              <th className="py-2 px-4 text-left">Completed</th>
              <th className="py-2 px-4 text-left">Failed</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((elem) => (
              <tr key={elem.id} className="border-b border-emerald-500">
                <td className="py-2 px-4">{elem.firstName}</td>
                <td className="py-2 px-4 text-blue-400">{elem.taskCounts.newTask}</td>
                <td className="py-2 px-4 text-yellow-400">{elem.taskCounts.active}</td>
                <td className="py-2 px-4">{elem.taskCounts.completed}</td>
                <td className="py-2 px-4 text-red-600">{elem.taskCounts.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;



