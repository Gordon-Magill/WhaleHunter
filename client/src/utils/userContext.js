import React, {createContext, useContext} from 'react';

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
export const UserContext = createContext()

export function useUserContext() {
    useContext(UserContext)
}

export function UserProvider(props) {
    return (
        <UserContext.Provider value={null} {...props} />
    )
}