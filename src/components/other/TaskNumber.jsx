import React from 'react';

const TaskNumber = ({ data }) => {
  return (
    <div className='flex flex-wrap justify-between gap-5 mt-10'>
      <div className='flex-1 min-w-[200px] h-40 bg-[#49243E] rounded-lg py-6 px-6 hover:brightness-110 transition duration-200'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium text-gray-200 mt-2'>New Task</h3>
      </div>
      <div className='flex-1 min-w-[200px] h-40 bg-[#2D4356] rounded-lg py-6 px-6 hover:brightness-110 transition duration-200'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium text-gray-200 mt-2'>Completed</h3>
      </div>
      <div className='flex-1 min-w-[200px] h-40 bg-[#344955] rounded-lg py-6 px-6 hover:brightness-110 transition duration-200'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium text-gray-200 mt-2'>Accepted</h3>
      </div>
      <div className='flex-1 min-w-[200px] h-40 bg-[#35374B] rounded-lg py-6 px-6 hover:brightness-110 transition duration-200'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium text-gray-200 mt-2'>Failed</h3>
      </div>
    </div>
  );
};

export default TaskNumber;