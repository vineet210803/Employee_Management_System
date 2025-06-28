import React from 'react';

const Newtask = ({ data, index, updateTask }) => {
  const handleAcceptTask = () => {
    const updatedTask = {
      ...data,
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    };
    updateTask(index, updatedTask);
  };

  return (
    <div className='flex-shrink-0 w-[300px] bg-gradient-to-br from-purple-400 to-purple-800 text-white rounded-2xl shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-purple-800 text-xs px-2 py-1 rounded'>{data.category}</h2>
        <h3 className='text-sm'>{data.taskDate}</h3>
      </div>
      <h1 className='text-xl font-bold mt-3'>{data.taskTitle}</h1>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-center mt-4'>
        <button onClick={handleAcceptTask} className='bg-white text-purple-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-200'>Accept Task</button>
      </div>
    </div>
  );
};

export default Newtask;
