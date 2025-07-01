import React, { useState } from 'react';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-900 h-screen">
      <div className="flex flex-col items-center mb-6 text-center ">
        <img src="/logo2.png" alt="EMS Logo" className="w-16 h-16 mb-2" />
        <h1 className="text-white text-xl font-bold"> EMS | Employee Managment System</h1>
        <p className="text-gray-400 mt-2">Assigning and Managing tasks made easy</p>
      </div>
      <div className="bg-gray-950 p-8 rounded-2xl shadow-md shadow-violet-900 w-96">
        <form className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold text-center mb-4">Login</h2>
          <input
            value={email}
            type="email"
            onChange={(e) => setemail(e.target.value)}
            required
            placeholder="Enter your Email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-none"
          />

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
            >
              {showPassword ? <BiSolidHide /> : <BiSolidShow />}
            </button>
          </div>

          <button
            type="submit"
            onClick={submitHandler}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-md transition-transform duration-200 hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
