import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateNewTask = () => {
  const authData = useContext(AuthContext);
  const [taskData, setTaskData] = useState({
    taskTitle: '',
    taskDate: '',
    assignTo: '',
    category: '',
    taskDescription: ''
  });
  // console.log(taskData)

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
    // console.log(taskData)
    // console.log(e.target.name)
    // console.log(e.target.value)
  };
  console.log(taskData)

  const creatingTask = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem('employeesData')) || [];
    // console.log(employees)
    // Find employee by first name (case-sensitive, or convert both to lowercase for case-insensitive)
    const matchedEmployeeIndex = employees.findIndex(
      emp => emp.firstName.trim().toLowerCase() === taskData.assignTo.trim().toLowerCase()
    );
    if (matchedEmployeeIndex === -1) {
      alert('No employee found with that name');
      return;
    }
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: taskData.taskTitle,
      taskDescription: taskData.taskDescription,
      taskDate: taskData.taskDate,
      category: taskData.category
    };
    // console.log(newTask)

    employees[matchedEmployeeIndex].tasks.push(newTask);
    employees[matchedEmployeeIndex].taskCounts.newTask += 1;
    // employees[matchedEmployeeIndex].taskCounts.active += 1;
    const newData=localStorage.setItem('employeesData', JSON.stringify(employees));
    // console.log(newData)
    alert('Task assigned to ' + employees[matchedEmployeeIndex].firstName);

    setTaskData({
      taskTitle: '',
      taskDate: '',
      assignTo: '',
      category: '',
      taskDescription: ''
    });
  };

  return (
    <div className="m-5 p-6 w-full lg:w-[50vw] h-fit bg-[#1E1E2F] rounded-2xl shadow-2xl border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-violet-400">Create a New Task</h2>
      <form onSubmit={creatingTask} className="flex flex-wrap gap-6 justify-between">
        <div className="flex-1 min-w-[250px] space-y-4">
          <div>
            <label className="block font-medium text-gray-300 mb-1">Task Title</label>
            <input
              name="taskTitle"
              value={taskData.taskTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md"
              type="text"
              placeholder="Title of your task"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Date</label>
            <input
              name="taskDate"
              value={taskData.taskDate}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md"
              type="date"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Assign to (Employee First Name)</label>
            <input
              name="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md"
              type="text"
              placeholder="Employee name"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Category</label>
            <input
              name="category"
              value={taskData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md"
              type="text"
              placeholder="Design, Dev, etc."
              required
            />
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="block font-medium text-gray-300 mb-1">Description</label>
          <textarea
            name="taskDescription"
            value={taskData.taskDescription}
            onChange={handleChange}
            className="w-full h-[210px] p-4 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md resize-none"
            placeholder="Describe the task in detail..."
            required
          ></textarea>
        </div>

        <div className="w-full text-center">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300 shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewTask;
