import React, { useState } from 'react';
import ActiveTask from './acceptTask';
import CompleteTask from './completeTask';
import FailedTask from './failedTask';
import Newtask from './newtask';

const TaskItem = ({ data, updateTask }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = data.tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "accepted") return task.active;
    if (filter === "completed") return task.completed;
    if (filter === "failed") return task.failed;
    if (filter === "new") return task.newTask;
    return true;
  });

  const getFilterButtonStyle = (type) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      filter === type
        ? 'bg-violet-600 text-white'
        : 'bg-gray-700 text-gray-200 hover:bg-violet-500'
    } transition duration-200`;

  return (
    <div className='w-full'>
      <div className='flex gap-3 flex-wrap justify-center mt-4'>
        <button onClick={() => setFilter("all")} className={getFilterButtonStyle("all")}>All</button>
        <button onClick={() => setFilter("accepted")} className={getFilterButtonStyle("accepted")}>Active</button>
        <button onClick={() => setFilter("completed")} className={getFilterButtonStyle("completed")}>Completed</button>
        <button onClick={() => setFilter("failed")} className={getFilterButtonStyle("failed")}>Failed</button>
        <button onClick={() => setFilter("new")} className={getFilterButtonStyle("new")}>New Task</button>
      </div>

      {/* Task Cards */}
      <div
        id='scrollbar'
        className='py-5 mt-6 flex items-start w-full gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent'
      >
        {filteredTasks.map((e, idx) => {
          if (e.active) return <ActiveTask data={e} index={idx} updateTask={updateTask} key={idx} />;
          if (e.completed) return <CompleteTask data={e} index={idx} updateTask={updateTask} key={idx} />;
          if (e.failed) return <FailedTask data={e} index={idx} updateTask={updateTask} key={idx} />;
          if (e.newTask) return <Newtask data={e} index={idx} updateTask={updateTask} key={idx} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default TaskItem;
