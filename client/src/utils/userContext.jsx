import React, {createContext, useContext} from 'react';

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
export const UserContext = createContext()
const {Provider} = UserContext

export function useUserContext() {
    useContext(UserContext)
}

export function UserProvider(props) {
    return <Provider value={null} {...props} />
}