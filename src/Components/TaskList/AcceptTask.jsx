// import React, { useState } from 'react'
// import { setLocalStorage } from '../../Utils/LocalStorage';

// const AcceptTask = ({data}) => {

//   const completed=()=>{
//    console.log(data.id)
    
    
//   }

//   return (
//     <div className="flex flex-col shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 mb-2">
 
//     <div className="flex justify-between items-start w-full">
//       <h3 className="bg-red-600 rounded px-2 py-1 text-sm text-white">{data.category}</h3>
//       <h4 className="text-white text-sm">{data.taskDate}</h4>
//     </div>
  
  
//     <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
//     <p className='text-sm text-white mt-2'> {data.taskDescription}</p>
//     <div className='flex justify-between mt-4'>
//         <button onClick={completed}  className='bg-green-500 py-1 px-2 text-sm text-white rounded-lg'>Mark As Completed</button>
//         <button className='bg-red-500 py-1 px-2 text-sm text-white rounded-lg'>Mark As Failed</button>
//     </div>
//   </div>
//   )
// }

// export default AcceptTask


import React from 'react';
import { setLocalStorage, getLocalStorage } from '../../Utils/LocalStorage';

const AcceptTask = ({ data }) => {
  // Function to handle task completion
  const completed = () => {
    console.log(data);
    const { employees } = getLocalStorage();

    // Update the tasks only for the employee with matching employeeId
    const updatedEmployees = employees.map(employee => {
      if (employee.id === data.employeeId) {
        const updatedTasks = employee.tasks.map(task => {
          if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
            // Update task status to completed
            return { ...task, completed: true, active: false, newtask: false };
          }
          return task;
        });

        return {
          ...employee,
          taskCounts: {
            ...employee.taskCounts,
            active: employee.taskCounts.active - 1,
          },
          tasks: updatedTasks,
        };
      }
      return employee;
    });

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setLocalStorage();
    alert('Task sent for Admin review. Log in again to see updated profile');
    console.log('Task marked as completed and localStorage updated');
  };

  const failed = () => {
    const { employees } = getLocalStorage();

    const updatedEmployees = employees.map(employee => {
      if (employee.id === data.employeeId) {
        const updatedTasks = employee.tasks.map(task => {
          if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
            return { ...task, completed: false, active: false, newtask: false, failed: true };
          }
          return task;
        });

        return {
          ...employee,
          taskCounts: {
            ...employee.taskCounts,
            active: employee.taskCounts.active - 1,
            failed: employee.taskCounts.failed + 1,
          },
          tasks: updatedTasks,
        };
      }
      return employee;
    });

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setLocalStorage();
    alert('Task failed. Log in again to see updated profile');
    console.log('Task marked as failed and localStorage updated');
  };

  return (
    <div className="flex flex-col bg-[#1C1C1C] rounded-lg p-6 mb-4 w-full max-w-[400px] shadow-lg">
      <div className="flex justify-between items-center w-full mb-4">
        <h3 className="bg-red-600 rounded px-3 py-1 text-xs font-semibold text-white">{data.category}</h3>
        <h4 className="text-gray-300 text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="text-2xl font-bold text-white">{data.taskTitle}</h2>
      <p className="text-sm text-gray-200 mt-2">{data.taskDescription}</p>

      <div className="flex justify-between mt-6">
        <button
          onClick={completed}
          className="bg-green-600 py-2 px-4 text-sm text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none transition-all duration-300"
        >
          Mark As Completed
        </button>
        <button
          onClick={failed}
          className="bg-red-600 py-2 px-4 text-sm text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none transition-all duration-300"
        >
          Mark As Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;




