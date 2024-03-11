import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  // userAuthentication
  const userAuthentication = async () => {
    try {
      setisLoading(true);
      const response = await fetch(`${import.meta.env.VITE_SOME_KEY}/api/auth/student`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);

        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (error) {
      console.log("Error during fetching user data", error);
    }
  };

  useEffect(() => {
   
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        services,
        user,
        isLoggedIn,
        LogoutUser,
        storetokenInLS,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("use auth is used outside of the provider");
  }
  return authContextValue;
};
