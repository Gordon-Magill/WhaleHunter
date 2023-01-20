import React, { createContext, useContext, useState, useReducer } from "react";
import userReducer from "./reducers";

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
export const UserContext = createContext({
  userInfo: { username: null },
});
export const UserDispatchContext = createContext(null);

export const UserProvider = (props) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    userInfo: { username: null },
  });

  // return <Provider value={{...initialState}} {...props} />
  return (
    <UserContext.Provider value={userState} {...props}>
      <UserDispatchContext.Provider value={userDispatch} {...props}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
