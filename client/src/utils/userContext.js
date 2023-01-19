import React, {useState, useContext} from 'react';
import { useContext } from 'react';

// Defining a global state for user information
// To be derived from Apollo login/addUser {token, **user**} responses
const UserContext = React.createContext()

function useUserContext() {
    useContext(UserContext)
}

function UserProvider(props) {
    return (
        <UserContext.Provider value={{loggedInUser: loggedInUser}} {...props} />
    )
}

module.exports = {
    UserContext,
    useUserContext,
    UserProvider
}
