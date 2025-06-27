import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
import AdminDashboard from "./components/Dashboard/adminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    if (AuthData) {
      const userLogIn = localStorage.getItem("userLogInHai");
      if (userLogIn) {
        const parsedUser = JSON.parse(userLogIn);
        setUser(parsedUser.role);
        if (parsedUser.role === "employee" && parsedUser.employee) {
          setLoggedInUserData(parsedUser.employee);
        }
        if (parsedUser.role === "admin") {
          setLoggedInUserData(parsedUser.admin);
        }
      }
    }
  }, [AuthData]);

  const handleLogin = (email, password) => {
    if (AuthData) {
      const admin = AuthData.adminData.find(
        (e) => email === e.email && e.password === password
      );
      const employee = AuthData.employeesData.find(
        (e) => email === e.email && e.password === password
      );
      if(admin){
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem(
          "userLogInHai",
          JSON.stringify({ role: "admin", admin })
        );
      }
      else if(employee){
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "userLogInHai",
          JSON.stringify({ role: "employee", employee })
        );
      }else{
        alert("Invalid user credential")
      }
    } else {
      alert("Invalid user credential");
    }
  };

  return (
    <>
      {user === null && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard data={loggedInUserData} changeUser={setUser} />
      )}
      {user === "employee" && (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      )}
    </>
  );
};

export default App;
