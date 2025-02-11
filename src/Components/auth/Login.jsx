// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

//     const[email,setEmail]=useState('')
//     const[password,setPassword]=useState('')

//     const SubmitHandler=(e)=>{
//     e.preventDefault()
//     console.log("email is :",email)
//     console.log("password is : ",password)
//     handleLogin(email,password)

//     setEmail('')
//     setPassword('')
//     }

//   return (
//     <>
//       <div className=' h-screen w-screen flex items-center justify-center'>
//         <div className='border-2 border-emerald-600 p-20 rounded-xl'>
//          <form onSubmit={(e)=>SubmitHandler(e)} className='flex flex-col justify-center items-center gap-10' >
//             < input value={email}
//             onChange={(e)=>{
//                 setEmail(e.target.value)
//             }} className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email"  placeholder='Enter your email' />
//             <  input value={password}
//             onChange={(e)=>{
//                 setPassword(e.target.value)
//             }}className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
//             <button className='text-white outline-none  border-2 border-none bg-emerald-600 w-full rounded-full text-xl py-3 px-5 placeholder:text-white '>Log in</button>
//          </form>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Login


import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log('email is:', email);
    console.log('password is:', password);
    handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-[#1c1c1c]"> {/* Dark background */}
        <div className="bg-black p-12 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">Login</h2>
          <form onSubmit={(e) => SubmitHandler(e)} className="flex flex-col gap-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white bg-[#2d2d2d] border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white bg-[#2d2d2d] border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white text-lg font-semibold rounded-full py-3 transition-all duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
