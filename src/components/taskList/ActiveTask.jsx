import React from 'react';

const ActiveTask = ({ data, index, updateTask }) => {
  const handleMarkCompleted = () => {
    const updatedTask = {
      ...data,
      completed: true,
      active: false,
      newTask: false,
      failed: false,
    };
    updateTask(index, updatedTask);
  };

  const handleFail = () => {
    const updatedTask = {
      ...data,
      failed: true,
      active: false,
      newTask: false,
      completed: false
    };
    updateTask(index, updatedTask);
  };

  return (
    <div className='flex-shrink-0 w-[300px] bg-gradient-to-br from-blue-400 to-blue-800 text-white rounded-2xl shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-blue-700 text-xs px-2 py-1 rounded'>{data.category}</h2>
        <h3 className='text-sm'>{data.taskDate}</h3>
      </div>
      <h1 className='text-xl font-bold mt-3'>{data.taskTitle}</h1>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button onClick={handleMarkCompleted} className='bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-sm'>Mark as Completed</button>
        <button onClick={handleFail} className='bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm'>Mark as Failed</button>
      </div>
    </div>
  );
};

export default ActiveTask;
