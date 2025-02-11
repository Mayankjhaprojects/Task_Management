
import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/auth/Login'
import Employeedashboard from './Components/Dashboard/Employeedashboard'
import Admindashboard from './Components/Dashboard/Admindashboard'
import { setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider';

function App() {
   
  const[user,setUser]=useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  
    const authData=useContext(AuthContext)
  console.log(authData)

  
  


 


  // const handleLogin=(email,password)=>{
  // //  if(authData && authData.admin.find((e)=> e.email==email && e.password==password)){
  // //   setUser('admin')
  // //  }
  // //  else if(authData && authData.employees.find((e)=> e.email==email && e.password==password)){
  // //   setUser('user');
  // //  }
  // //  else{
  // //   alert("Invalid Credentials")
  // //  }

  // if(authData){
  //   const admin=authData.admin.find((e)=> e.email==email && e.password==password)
  //   const employee=authData.employee.find((e)=> e.email==email && e.password==password)
  //   if(admin){
  //     setUser('admin')
  //     setLoggedInUserData(admin)
  //     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  //   }
  //   else if(employee){
  //     setUser('employee')
  //     setLoggedInUserData(employee)
  //     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  //   }
  // }
  // else{
  //   alert("Invalid Credentials")
  // }
  // }

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find((e) => e.email === email && e.password === password);
      const employee = authData.employees.find((e) => e.email === email && e.password === password);

      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', ...admin }));
      } else if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', ...employee }));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser.role);
      setLoggedInUserData(storedUser);
    }
  }, []);



   
  

  useEffect(()=>{
    setLocalStorage()
  },) 

  return (
    <>
   {!user ? <Login handleLogin={handleLogin}/> : null}
   {user == 'admin' ? <Admindashboard data={loggedInUserData} /> : (user == 'employee' ? <Employeedashboard  data={loggedInUserData} /> : null) }
    {/* <Employeedashboard/> */}
    {/* <Admindashboard/> */}
    </>
  )
}

export default App

