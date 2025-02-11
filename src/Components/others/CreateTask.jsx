// import React, { useEffect, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [assignTo, setAssignTo] = useState('');
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     // Load employees data from localStorage when the component mounts
//     const { employees: storedEmployees } = getLocalStorage();
//     setLocalStorage(storedEmployees);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Task created');

//     // Get employees from local storage
//     const { employees } = getLocalStorage();
//     console.log(employees);

//     // Update the employees array with the new task
//     const updatedEmployees = employees.map((elem) => {
//       if (assignTo === elem.firstName) {
//         return {
//           ...elem,
//           taskCounts: {
//             ...elem.taskCounts,
//             newTask: elem.taskCounts.newTask + 1,
//           },
//           tasks: [
//             ...elem.tasks,
//             {
//               active: false,
//               newtask: true,
//               completed: false,
//               failed: false,
//               taskTitle,
//               taskDescription,
//               taskDate,
//               category,
//             },
//           ],
//         };
//       }
//       return elem; // Ensure other employees remain unchanged
//     });
//     console.log("updated employyes are")
//     console.log(updatedEmployees)
//     console.log("employees array before updation");
//     console.log(employees)

//     try {
//         localStorage.setItem('employees', JSON.stringify(updatedEmployees));
//         console.log('Updated employees saved to localStorage.');
//         alert('Task created successfully!');
//         const savedData = JSON.parse(localStorage.getItem('employees'));
//         console.log('Re-fetched Employees from localStorage:', savedData);
//       } catch (error) {
//         console.error('Error saving to localStorage:', error);
//         alert('Failed to save task. Please try again.');
//       }
//       const refreshedEmployees = JSON.parse(localStorage.getItem('employees'));
//        console.log('Employees after writing back:', refreshedEmployees);
//   };

 


  

//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-10 rounded">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-wrap w-full items-start justify-between"
//       >
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Make a UI design"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="date"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
//             <input
//               value={assignTo}
//               onChange={(e) => setAssignTo(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Employee name"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Design, dev, etc."
//             />
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white"
//             placeholder="Task description"
//           ></textarea>
//           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;




// import React, { useEffect, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [assignTo, setAssignTo] = useState('');
//   const [category, setCategory] = useState('');



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Task creation started');

//     // Fetch current employees from local storage
//     const { employees } = getLocalStorage();

//     if (!employees) {
//       alert('No employees found! Please initialize data.');
//       return;
//     }

//     // Update employees with the new task
//     const updatedEmployees = employees.map((employee) => {
//       if (employee.firstName === assignTo) {
//         return {
//           ...employee,
//           taskCounts: {
//             ...employee.taskCounts,
//             newTask: employee.taskCounts.newTask + 1,
//           },
//           tasks: [
//             ...employee.tasks,
//             {
//               active: false,
//               newtask: true,
//               completed: false,
//               failed: false,
//               taskTitle,
//               taskDescription,
//               taskDate,
//               category,
//             },
//           ],
//         };
//       }
//       return employee;
//     });

//     // Save updated employees to local storage
//     try {
//       localStorage.setItem('employees', JSON.stringify(updatedEmployees));
//       console.log('Updated employees saved to localStorage.');
//       alert('Task created successfully!');
//     } catch (error) {
//       console.error('Error saving to localStorage:', error);
//       alert('Failed to save task. Please try again.');
//     }
//     window.location.reload()
//   };

//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-10 rounded">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-wrap w-full items-start justify-between"
//       >
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Make a UI design"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="date"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
//             <input
//               value={assignTo}
//               onChange={(e) => setAssignTo(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Employee name"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
//               type="text"
//               placeholder="Design, dev, etc."
//             />
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white"
//             placeholder="Task description"
//           ></textarea>
//           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;



import React, { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task creation started');

    // Fetch current employees from local storage
    const { employees } = getLocalStorage();

    if (!employees) {
      alert('No employees found! Please initialize data.');
      return;
    }

    // Update employees with the new task
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName === assignTo) {
        return {
          ...employee,
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
          tasks: [
            ...employee.tasks,
            {
              active: false,
              newtask: true,
              completed: false,
              failed: false,
              taskTitle,
              taskDescription,
              taskDate,
              category,
            },
          ],
        };
      }
      return employee;
    });

    // Save updated employees to local storage
    try {
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      console.log('Updated employees saved to localStorage.');
      alert('Task created successfully!');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      alert('Failed to save task. Please try again.');
    }
    window.location.reload();
  };

  return (
    <div className="p-8 bg-[#1c1c1c] mt-10 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-[#333] border-[1px] border-gray-600 mb-4 text-white"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-[#333] border-[1px] border-gray-600 mb-4 text-white"
              type="date"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Assign to</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-[#333] border-[1px] border-gray-600 mb-4 text-white"
              type="text"
              placeholder="Employee name"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-[#333] border-[1px] border-gray-600 mb-4 text-white"
              type="text"
              placeholder="Design, dev, etc."
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-300 mb-2">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-[#333] border-[1px] border-gray-600 text-white mb-4"
            placeholder="Task description"
            required
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-lg text-sm w-full transition-all duration-300">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
