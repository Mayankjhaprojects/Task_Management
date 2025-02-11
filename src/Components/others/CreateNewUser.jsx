import React, { useState } from 'react';
import { getLocalStorage } from '../../Utils/LocalStorage';

const CreateNewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const addEmployee = (newEmployee) => {
        try {
            const { employees } = getLocalStorage();
            const newUpdatedEmployees = [...employees, newEmployee];
            localStorage.setItem('employees', JSON.stringify(newUpdatedEmployees));
            console.log('New employee added successfully!');
            alert('New Employee Created');
        } catch (error) {
            console.error('Error saving employee to localStorage', error);
            alert('Failed to create employee. Please try again.');
        }
    };

    const SubmitHandler = (e) => {
        e.preventDefault();

        // Basic validation for required fields
        if (!firstName || !email || !password) {
            setError('All fields are required');
            return;
        }

        // Basic email format validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        const { employees } = getLocalStorage();
        const nextID = employees.length > 0 ? Math.max(...employees.map((emp) => emp.id)) + 1 : 1;
        
        const newEmployee = {
            id: nextID,
            firstName,
            email,
            password,
            taskCounts: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0,
            },
            tasks: [],
        };

        addEmployee(newEmployee);

        // Reset the form fields after successful submission
        setFirstName('');
        setEmail('');
        setPassword('');
        setError(''); // Reset any previous error message
    };

    return (
        <div className="bg-[#1c1c1c] p-5 min-h-screen flex items-center justify-center">
            <form onSubmit={SubmitHandler} className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] bg-black p-8 rounded-md shadow-lg">
                <h1 className="text-2xl font-bold text-white text-center mb-6">Create New User</h1>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-white text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring focus:ring-emerald-700"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring focus:ring-emerald-700"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring focus:ring-emerald-700"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-800 transition duration-300"
                >
                    Create New User
                </button>
            </form>
        </div>
    );
};

export default CreateNewUser;
