import React from 'react';

const Header = ({ data }) => {
  const logOutUser = () => {
    const confirmLogOut = window.confirm("Are you sure you want to LogOut?");
    if (confirmLogOut) {
      localStorage.setItem("userLogInHai", "");
      window.location.reload();
    }
  };

  return (
    <div className="flex justify-between items-end border-b border-gray-700 pb-4 mb-6">
      <h1 className="text-xl sm:text-2xl font-medium">
        Hello <br />
        <div className='flex items-center'>
          <div className="text-3xl font-semibold hover:scale-110 transition-transform duration-200 cursor-pointer text-violet-400 ">
          {data.firstName} 
        </div>
        <h1 className='ml-2'>👋</h1>
        </div>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 px-4 py-2 hover:scale-105 transition-transform duration-200 text-white font-bold rounded-md hover:brightness-110"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;