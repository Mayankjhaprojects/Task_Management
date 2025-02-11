import React from 'react';
import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';

const NewTask = ({ data }) => {
  const accepted = () => {
    console.log(data.employeeId);

    // Get the current employees data from localStorage
    const { employees } = getLocalStorage();

    // Update the tasks only for the employee with matching employeeId
    const updatedEmployees = employees.map(employee => {
      if (employee.id === data.employeeId) {
        // Update the tasks for this employee
        const updatedTasks = employee.tasks.map(task => {
          if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
            // Update task status to accepted (active)
            return { ...task, completed: false, active: true, newtask: false };
          }
          return task;
        });

        // Return the updated employee with modified tasks and task counts
        return {
          ...employee,
          taskCounts: {
            ...employee.taskCounts,
            active: employee.taskCounts.active + 1,
            newTask: employee.taskCounts.newTask - 1, // Fix: changed from 'newTask' to 'NewTask' for consistency
          },
          tasks: updatedTasks,
        };
      }
      return employee; // Return unchanged employee if ID does not match
    });

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Call the function to ensure localStorage is updated
    setLocalStorage();

    alert('Task accepted successfully. Log in again to see the updated profile');
    console.log('Task marked as accepted and localStorage updated');
  };

  return (
    <div className="flex flex-col shrink-0 h-full w-[300px] bg-[#4CAF50] rounded-lg p-6 mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-start w-full mb-4">
        <h3 className="bg-red-600 rounded px-3 py-1 text-xs font-semibold text-white">{data.category}</h3>
        <h4 className="text-gray-200 text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm text-gray-100 mt-2">{data.taskDescription}</p>

      <button
        onClick={accepted}
        className="mt-5 bg-yellow-400 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-yellow-500 transition-all duration-300"
      >
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;
