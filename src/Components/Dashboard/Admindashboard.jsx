import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import CreateNewUser from '../others/CreateNewUser'
import VerifyTask from '../others/VerifyTask'


const Admindashboard = ({data}) => {
    console.log(data)
    
  
   
  return (
    <div className=' w-full p-10' id="adminpagescrollbar">
    <Header data={data} />
    <CreateTask/>
    <AllTask/>
    <CreateNewUser/>
    <VerifyTask/>


    
    
    </div>
  )
}

export default Admindashboard
