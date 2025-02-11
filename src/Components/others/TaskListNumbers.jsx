import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-between gap-6 mt-10 px-8">
      {/* New Task */}
      <div className="w-full sm:w-[45%] lg:w-[22%] bg-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <h2 className="text-4xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-200">New Task</h3>
      </div>
      
      {/* Completed Task */}
      <div className="w-full sm:w-[45%] lg:w-[22%] bg-green-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <h2 className="text-4xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-200">Completed Task</h3>
      </div>
      
      {/* Accepted Task */}
      <div className="w-full sm:w-[45%] lg:w-[22%] bg-yellow-600 text-black rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <h2 className="text-4xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-800">Accepted Task</h3>
      </div>
      
      {/* Failed Task */}
      <div className="w-full sm:w-[45%] lg:w-[22%] bg-red-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <h2 className="text-4xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-200">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;


