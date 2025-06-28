import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[300px] bg-gradient-to-br from-red-400 to-red-800 text-white rounded-2xl shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-700 text-xs px-2 py-1 rounded'>{data.category}</h2>
        <h3 className='text-sm'>{data.taskDate}</h3>
      </div>
      <h1 className='text-xl font-bold mt-3'>{data.taskTitle}</h1>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-center mt-4'>
        <span className='bg-white text-red-800 font-semibold px-4 py-2 rounded-md text-sm'>Task Failed</span>
      </div>
    </div>
  );
};

export default FailedTask;
