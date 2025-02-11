import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex flex-col shrink-0 h-full w-[300px] bg-[#F27C7C] rounded-lg p-6 mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-start w-full mb-4">
        <h3 className="bg-red-600 rounded px-3 py-1 text-xs font-semibold text-white">{data.category}</h3>
        <h4 className="text-gray-200 text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm text-gray-100 mt-2">{data.taskDescription}</p>
      
      <h2 className="bg-emerald-800 mt-5 px-4 py-2 rounded-lg text-sm text-white flex items-center justify-center shadow-md">
        Task Failed
      </h2>
    </div>
  );
};

export default FailedTask;

