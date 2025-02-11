const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "reviewed":false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];


const admin = [{
    "id": 1,
    "firstName": "Manoj",
    "email": "admin@example.com",
    "password": "123"
}];

// export const setLocalStorage = ()=>{
//     localStorage.setItem('employees',JSON.stringify(employees))
//     localStorage.setItem('admin',JSON.stringify(admin))
// }
// export const getLocalStorage = ()=>{
//     const employees = JSON.parse(localStorage.getItem('employees'))
//     const admin = JSON.parse(localStorage.getItem('admin'))

//     return {employees,admin}
// }


export const setLocalStorage = () => {
    const existingEmployees = JSON.parse(localStorage.getItem('employees'));
    const existingAdmin = JSON.parse(localStorage.getItem('admin'));
  
    if (!existingEmployees) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  
    if (!existingAdmin) {
      localStorage.setItem('admin', JSON.stringify(admin));
    }
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
  };