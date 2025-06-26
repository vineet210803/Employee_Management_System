import React from 'react';
import Header from '../other/header';
import TaskNumber from '../other/TaskNumber';
import TaskItem from '../taskList/TaskItem';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-6 min-h-screen bg-[#121212] text-gray-100'>
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskNumber data={props.data} />
      <TaskItem data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;