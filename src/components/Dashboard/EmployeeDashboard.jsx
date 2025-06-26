import React from 'react';
import Header from '../other/header';
import TaskNumber from '../other/TaskNumber';
import TaskItem from '../taskList/TaskItem';

const EmployeeDashboard = ({ data }) => {
  return (
    <div className='p-6 min-h-screen bg-[#121212] text-gray-100'>
      <Header data={data} />
      <TaskNumber data={data} />
      <TaskItem data={data} />
    </div>
  );
};

export default EmployeeDashboard;