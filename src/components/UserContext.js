import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userName, setUserName, loadingUser, setLoadingUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Prop validation for the UserProvider component
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children are passed as a valid React node
};
