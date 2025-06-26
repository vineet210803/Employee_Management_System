import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
  const userData = useContext(AuthContext);

  return (
    <div className='bg-[#1E1E2F] p-6 rounded-xl shadow-lg border border-gray-700 w-full overflow-x-auto'>
      <div className='min-w-[640px] bg-violet-700 mb-4 py-3 px-4 flex justify-between rounded-lg text-white'>
        <h2 className='text-base font-semibold w-1/5 text-center'>Employee Name</h2>
        <h3 className='text-base font-semibold w-1/5 text-center'>New <br /> Task</h3>
        <h5 className='text-base font-semibold w-1/5 text-center'>Active <br /> Task</h5>
        <h5 className='text-base font-semibold w-1/5 text-center'>Completed <br /> Task</h5>
        <h5 className='text-base font-semibold w-1/5 text-center'>Failed <br /> Task</h5>
      </div>

      <div className='space-y-3 min-w-[640px]'>
        {userData.employeesData.map((elem, idx) => (
          <div
            key={idx}
            className='border border-gray-600 py-3 px-4 flex justify-between rounded-lg bg-[#2A2A3D] text-gray-100 hover:border-violet-500 transition'
          >
            <h2 className='w-1/5 text-center font-medium'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-center text-blue-400 font-medium'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-center text-yellow-400 font-medium'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-center text-green-400 font-medium'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-center text-red-500 font-medium'>{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;