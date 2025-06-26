import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  // setLocalStorage();
  const [userData, setUserData] = useState(null);
  // console.log(userData)

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage();
    setUserData({ employeesData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;