import useLocalStorageState from "use-local-storage-state";

import { Buffer } from "buffer";
import axios from "axios";
import { createContext, useContext } from "react";
import { INITIAL_LOGIN_STATUS } from "../constants";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus, { removeItem }] = useLocalStorageState(
    "loginStatus",
    INITIAL_LOGIN_STATUS
  );

  const login = async (email, password) => {
    const credentials = Buffer.from(`${email}:${password}`).toString("base64");

    const response = await axios.post(
      "http://myproject.local:8000/auth/login",
      null,
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    setLoginStatus(response.data);
  };

  const logout = () => {
    removeItem("loginStatus");
    console.log("User Logged out");
  };

  const value = {
    loginStatus,
    login,
    logout,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
