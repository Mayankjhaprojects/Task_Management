import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompletedTask from '../TaskList/CompletedTask'
import ReviewedTask from '../TaskList/ReviewedTask'

import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'



const TaskList = ({data}) => {
 

   
  return (
    <div id="taskbar" className=' overflow-x-auto shrink-0 flex gap-5 h-[55%] w-full mt-10 py-5'>
    {data.tasks.map((elem)=>{
      const taskDataWithEmployee = {
        ...elem, 
        employeeId: data.id, 
        employeeName: data.firstName 
      };
        if(elem.active==true){
            return <AcceptTask data={taskDataWithEmployee}/>
        }
       
        if(elem.completed==true && elem.reviewed==false){
            return <CompletedTask data={taskDataWithEmployee}/>
        }
        if(elem.failed==true){
            return <FailedTask data={taskDataWithEmployee}/>
        }
        if(elem.newtask==true){
           return <NewTask data={taskDataWithEmployee}/>
        }
        if(elem.completed==true && elem.reviewed==true){
          return <ReviewedTask data={taskDataWithEmployee}/>
        }
        
    })}

    </div>
  )
}

export default TaskList
