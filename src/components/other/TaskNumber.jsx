import React from 'react';
import { FaTasks, FaCheckCircle, FaSpinner, FaTimesCircle } from 'react-icons/fa';

const TaskNumber = ({ data }) => {
  const boxStyle = 'flex-1 min-w-[200px] h-40 rounded-xl py-6 px-6 shadow-md hover:shadow-xl transform hover:scale-[1.03] hover:brightness-110 transition duration-200';

  return (
    <div className='flex flex-wrap justify-between gap-6 mt-10 border-b border-gray-700 pb-10 mb-5'>
      <div className={`${boxStyle} bg-gradient-to-r from-purple-600 to-pink-00`}>
        <div className='flex items-center gap-4'>
          <FaTasks className='text-white text-4xl' />
          <div>
            <h2 className='text-white text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-white text-lg mt-1'>New Task</h3>
          </div>
        </div>
      </div>

      <div className={`${boxStyle} bg-gradient-to-r from-green-500 to-emerald-00`}>
        <div className='flex items-center gap-4'>
          <FaCheckCircle className='text-white text-4xl' />
          <div>
            <h2 className='text-white text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-white text-lg mt-1'>Completed</h3>
          </div>
        </div>
      </div>

      <div className={`${boxStyle} bg-gradient-to-r from-yellow-500 to-orange-00`}>
        <div className='flex items-center gap-4'>
          <FaSpinner className='text-white text-4xl animate-spin-slow' />
          <div>
            <h2 className='text-white text-3xl font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-white text-lg mt-1'>Active</h3>
          </div>
        </div>
      </div>

      <div className={`${boxStyle} bg-gradient-to-r from-red-500 to-rose-00`}>
        <div className='flex items-center gap-4'>
          <FaTimesCircle className='text-white text-4xl' />
          <div>
            <h2 className='text-white text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-white text-lg mt-1'>Failed</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskNumber;
