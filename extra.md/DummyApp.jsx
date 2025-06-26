import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/employeeDashboard';
import AdminDashboard from './components/Dashboard/adminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';
import { stringify } from 'postcss';

const App = () => {
  
  // localStorage.clear()
  // setLocalStorage() 
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)
  console.log(AuthData.employeesData) 

  useEffect(() => {
  if (AuthData) {
    const userLogIn = localStorage.getItem('userLogInHai');
    if (userLogIn) {
      const parsedUser = JSON.parse(userLogIn); 
      setUser(parsedUser.role);
      // console.log(parsedUser)
    }
  }
}, [AuthData]);
  // console.log(user)
  
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      // console.log("this is admin");
      setUser('admin')
      localStorage.setItem('userLogInHai', JSON.stringify({role:'admin'}))
    } else if (AuthData) {
      // console.log("this is employee");
      const employee = AuthData.employeesData.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        // console.log(loggedInUserData)
        // console.log(user)
        localStorage.setItem('userLogInHai', JSON.stringify({role:'employee'}))
      }
    } else {
      alert("Invalid user credentials");
    }
  };

  // const data = useContext(AuthContext) 
  // console.log(data)

  return (
    <>
      {user === null && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user == 'employee' && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
