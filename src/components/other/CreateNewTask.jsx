import React from 'react';

const CreateNewTask = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(e)
    console.log("task created")
  }

  return (
    <div className="m-5 p-6 w-full lg:w-[50vw] h-fit bg-[#1E1E2F] rounded-2xl shadow-2xl border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-violet-400">Create a New Task</h2>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="flex flex-wrap gap-6 justify-between">
        <div className="flex-1 min-w-[250px] space-y-4">
          <div>
            <label className="block font-medium text-gray-300 mb-1">Task Title</label>
            <input
            onChange={(e)=>{
              
            }}
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Date</label>
            <input
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="date"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Assign to</label>
            <input
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-300 mb-1">Category</label>
            <input
              className="w-full px-4 py-2 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="block font-medium text-gray-300 mb-1">Description</label>
          <textarea
            className="w-full h-[210px] p-4 bg-[#2A2A3D] border border-gray-600 text-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Describe the task in detail..."
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
