import React from 'react';
import Header from '../other/header';
import TaskNumber from '../other/TaskNumber';
import TaskItem from '../taskList/TaskItem';

const EmployeeDashboard = ({ data, changeUser, updateTask }) => {
  console.log(data)
  console.log(changeUser)
  console.log(updateTask)
  return (
    <div className='p-6 min-h-screen bg-[#121212] text-gray-100'>
      <Header data={data} changeUser={changeUser} />
      <TaskNumber data={data} />
      <TaskItem data={data} updateTask={updateTask} />
    </div>
  );
};

export default EmployeeDashboard;
