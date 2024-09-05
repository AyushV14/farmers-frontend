import React, { createContext, useState, useContext } from 'react';

// Create a Context for the user data
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);