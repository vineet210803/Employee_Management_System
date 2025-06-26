import React from 'react'
import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";


const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)  
    // console.log("email is", email)
    // console.log("password is", password)
    
    setemail("")
    setpassword("")
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <div className="bg-black p-8 rounded-2xl shadow-2xs shadow-violet-900 w-96">
        <form 
          className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold text-center mb-4">Login</h2>
          <input
          value={email}
            type="email"
            onChange={(e)=>{
              setemail(e.target.value)
              // console.log(e.target.value)
            }} 
             required
            placeholder="Enter your Email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-none"
          />
          <div className="relative">
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
              // console.log(e.target.value) 
            }}
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
            onClick={(e)=>{
              submitHandler(e)
            }}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-md transition-transform duration-200 hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
