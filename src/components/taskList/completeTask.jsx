import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-950 rounded-2xl '>
        <div className='flex justify-between items-center p-3'>
            <h2 className='bg-blue-900 rounded text-sm p-1'>{data.category}</h2>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h1 className='text-2xl mx-2 font-bold mt-2 '>{data.taskTitle}</h1>
        <p className='m-2 text-sm'>{data.taskDescription}</p>
        <div className='flex justify-between m-2 p-2 gap-5 '>
         <button className='bg-green-500 p-2 text-sm rounded-md hover:scale-105 transition duration-200'>Accept Task</button>
         {/* <button className='bg-red-500 p-2  text-sm rounded-md hover:scale-105 transition duration-200'>Mark as failed</button> */}
        </div>
      </div>
  )
}
export default CompleteTask
