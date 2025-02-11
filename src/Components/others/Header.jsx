// import React from 'react'

// const Header = ({data}) => {
   
//     const loggedOut=()=>{
//         localStorage.setItem('loggedInUser',null)
//         window.location.reload()
//     }
    
//     return (
//         <div className='flex items-end justify-between'>
//             <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'>{data.firstName} 👋</span></h1>
//             <button onClick={loggedOut} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded'>Log Out</button>
//         </div>
        
//       )
//     }

// export default Header

import React from 'react';

const Header = ({ data }) => {
  const loggedOut = () => {
    localStorage.setItem('loggedInUser', null);
    window.location.reload();
  };

  return (
    <div className="w-full bg-[#1C1C1C] flex items-center justify-between px-8 py-6 text-white">
      <div>
        <h1 className="text-3xl font-semibold text-gray-200">
          Hello <br />
          <span className="text-4xl text-emerald-500">{data.firstName} 👋</span>
        </h1>
      </div>
      <div>
        <button
          onClick={loggedOut}
          className="bg-red-600 text-base font-medium text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
