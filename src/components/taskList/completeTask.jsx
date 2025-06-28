import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[300px] bg-gradient-to-br from-green-400 to-green-900 text-white rounded-2xl shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-green-700 text-xs px-2 py-1 rounded'>{data.category}</h2>
        <h3 className='text-sm'>{data.taskDate}</h3>
      </div>
      <h1 className='text-xl font-bold mt-3'>{data.taskTitle}</h1>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-center mt-4'>
        <span className='bg-white text-green-800 font-semibold px-4 py-2 rounded-md text-sm'>Task Completed</span>
      </div>
    </div>
  );
};

export default CompleteTask;
