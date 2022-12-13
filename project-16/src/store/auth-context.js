import React, { useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

function calculateRemainingTime(expirationTime) {
  const currentTime = new Date().getTime();
  const convertedExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = convertedExpirationTime - currentTime;

  return remainingTime;
}

function retrieveStoredToken() {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
}

export function AuthContextProvider(props) {
  const tokenData = retrieveStoredToken();
  const [token, setToken] = useState(tokenData ? tokenData.token : null);

  const userIsLoggedIn = !!token;

  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }

  function loginHandler(token, expirationTime) {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  }

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);

      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
