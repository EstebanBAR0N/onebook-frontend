import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();


// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}


// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [localStorageState, setLocalStorageState] = useState(null);
  const [user, setUser] = useState(false);

  // update localStorageState for each render
  useEffect(() => {
    
    let userData = JSON.parse(localStorage.getItem('userData'));

    // check si le token est tj valide
    const expirationDate = userData?.expirationDate;
    // const now = new Date(Date.now()).getTime();
    const now = Date.now();

    if (expirationDate && now < expirationDate) {
      setLocalStorageState(userData);      
    }
    else {      
      setLocalStorageState(null);
      localStorage.setItem('userData', JSON.stringify({}));
    }

    // cleanup function
    return () => { userData = null; };
  }, []);

  
  // Change user on localStorageState changes
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {    
    if (!localStorageState?.userId) {
      setUser(false);
    }
    else {
      setUser({ id : localStorageState?.userId });
    }

  }, [localStorageState]);
      

  // update localStorage
  const login = (userData) => {    
    setLocalStorageState(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const logout = () => {    
    setLocalStorageState(null);
    localStorage.setItem('userData', JSON.stringify({}));
  };

  // Return the user object and auth methods
  return {
    user,
    login,
    logout,
  };
}