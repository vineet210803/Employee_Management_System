import React from "react";
import Header from "../other/header";
import CreateNewTask from "../other/CreateNewTask";
import AllTasks from "../other/AllTasks";

const AdminDashboard = ({ data }) => {
  return (
    <div className="min-h-screen w-full p-6 bg-[#121212] text-gray-100">
      <Header data={data} />
      <div className="flex flex-col lg:flex-row justify-center gap-6 mt-6">
        <CreateNewTask />
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
