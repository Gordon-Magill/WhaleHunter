import React, {createContext, useContext} from 'react';

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
export const UserContext = createContext()
const {Provider} = UserContext

// export const useUserContext = () => {userInfo: null}
export const useUserContext = () => useContext(UserContext)

export function UserProvider(props) {
    const initialState = {userInfo: null}
    return <Provider value={initialState} {...props} />
}