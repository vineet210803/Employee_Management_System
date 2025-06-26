import React from 'react';
import AcceptTask from './acceptTask';
import CompleteTask from './completeTask';
import FailedTask from './failedTask';
import Newtask from './newtask';

const TaskItem = ({ data }) => {
  return (
    <div
      id='scrollbar'
      className='py-5 mt-6 flex items-start w-full gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent'
    >
      {data.tasks.map((e, idx) => {
        if (e.active) return <AcceptTask data={e} key={idx} />;
        if (e.completed) return <CompleteTask data={e} key={idx} />;
        if (e.failed) return <FailedTask data={e} key={idx} />;
        if (e.newTask) return <Newtask data={e} key={idx} />;
        return null;
      })}
    </div>
  );
};

export default TaskItem;
