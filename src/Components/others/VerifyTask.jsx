import React, { useEffect, useState } from 'react'; 
import { getLocalStorage } from '../../Utils/LocalStorage';

const VerifyTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Get employees data from localStorage
    const { employees } = getLocalStorage();

    // Extract all completed tasks from employees
    const tasks = employees.flatMap(employee =>
      employee.tasks
        .filter(task => task.completed && !task.reviewed)
        .map(task => ({ ...task, employeeName: employee.firstName, employeeId: employee.id }))
    );

    // Update the state with the completed tasks
    setCompletedTasks(tasks);
  }, []);

  const updateTaskStatus = (task, isAccepted) => {
    // Get employees data from localStorage
    const { employees } = getLocalStorage();

    const updatedEmployees = employees.map(employee => {
      if (employee.id === task.employeeId) {
        const updatedTasks = employee.tasks.map(taskItem => {
          if (taskItem.taskTitle === task.taskTitle && taskItem.taskDate === task.taskDate) {
            return { 
              ...taskItem, 
              completed: isAccepted, 
              active: false, 
              newtask: false, 
              reviewed: true, 
              failed: !isAccepted 
            };
          }
          return taskItem;
        });

        return {
          ...employee,
          taskCounts: {
            ...employee.taskCounts,
            completed: isAccepted ? employee.taskCounts.completed + 1 : employee.taskCounts.completed,
            failed: !isAccepted ? employee.taskCounts.failed + 1 : employee.taskCounts.failed,
          },
          tasks: updatedTasks,
        };
      }
      return employee;
    });

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Update the state without page reload
    const updatedTasks = completedTasks.filter(t => t.taskTitle !== task.taskTitle || t.taskDate !== task.taskDate);
    setCompletedTasks(updatedTasks);

    alert(isAccepted ? 'Task Verified Successfully' : 'Task Rejected');
    console.log(isAccepted ? 'Task accepted and localStorage updated' : 'Task rejected and localStorage updated');
  };

  return (
    <div className="bg-[#1c1c1c] text-white p-6 min-h-screen mt-10">
      <h1 className="text-3xl font-semibold text-emerald-500 mb-6">Completed Tasks</h1>
      <div className="flex flex-wrap gap-6 justify-start">
        {completedTasks.length > 0 ? (
          completedTasks.map((task, index) => (
            <div key={index} className="task-card bg-gray-800 rounded-lg border-2 border-emerald-500 w-[30%] min-w-[200px] h-[250px] flex flex-col p-4">
              <h3 className="text-lg font-semibold mb-2">{task.taskTitle}</h3>
              <p className="text-sm flex-1 overflow-auto">{task.taskDescription}</p>
              <p className="text-sm">Category: {task.category}</p>
              <p className="text-sm">Task Date: {task.taskDate}</p>
              <p className="text-sm">Employee: {task.employeeName}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => updateTaskStatus(task, true)} 
                  className="bg-green-500 py-2 px-4 text-sm text-white rounded-lg hover:bg-green-600 transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => updateTaskStatus(task, false)}
                  className="bg-red-500 py-2 px-4 text-sm text-white rounded-lg hover:bg-red-600 transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No completed tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default VerifyTask;
