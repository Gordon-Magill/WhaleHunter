import React, { createContext, useContext, useState, useReducer } from "react";
import userReducer from "./reducers";

// Global user state
const UserContext = createContext({
  userInfo: { username: null },
  monsterInfo: null,
});


// Easy import of global user state
export const useUserStateContext = () => useContext(UserContext)

// Global user state dispatch
const UserDispatchContext = createContext(null);
// Easy import of global user state dispatch
export const useUserDispatchContext = () => useContext(UserDispatchContext)



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
