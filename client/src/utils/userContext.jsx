import React, { createContext, useContext, useState } from "react";

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
// export const UserContext = createContext();
export const UserContext = createContext({ userInfo: {username: null} })
const { Provider } = UserContext;

// export const useUserContext = () => {userInfo: null}
export const useUserContext = () => useContext(UserContext);

export const UserProvider = (props) => {

  const [userState, setUserState] = useState({ userInfo: {} })


  // return <Provider value={{...initialState}} {...props} />
  return(
    <Provider value={useContext(UserContext)} {...props}>
      {props.children}
    </Provider>
  );
}
