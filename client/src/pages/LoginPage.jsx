import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";
import { TRANSITION_SPEED } from "../utils/transitionSpeed";

// Importing content for userReducer
import { useUserStateContext, useUserDispatchContext } from "../utils/userContext";
// import userReducer from "../utils/reducers";
import { LOGIN } from "../utils/actions";

export default function LoginPage() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [errorState, setErrorState] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);

  // const initialState = useUserContext();
  // const [userState, userDispatch] = useReducer(userReducer, initialState);
  const userDispatch = useUserDispatchContext()
  const userState = useUserStateContext()

  //   Update form state on changes to the form
  const handleInputChange = (event) => {
    // console.log('handleInputChange event:', event)
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    // console.log("new userFormData is:", userFormData);
  };

  //   Log the user in
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log("handleFormSubmit event:", event);
    // console.log("userFormData:", userFormData);

    try {
      const { data } = await login({
        variables: {
          ...userFormData,
        },
      });
      // console.log(
      //   "Received data from server for data.login.user: ",
      //   data.login.user
      // );

      userDispatch({ type: LOGIN, payload: data.login.user });
      // console.log(
      //   "LoginPage has set userState.userInfo as:",
      //   userState.userInfo
      // );
      Auth.saveTokenToLocal(data.login.token);
    } catch (err) {
      console.error(err);
      setErrorState(true);
    }

    // Wipe the form
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <div className="loginPage container">
        <h1 className="m-1">This is the login page!</h1>
        <form
          className="flex flex-col items-center"
          onSubmit={(event) => {
            handleFormSubmit(event);
            console.log("state after form submission:", userState.userInfo);
          }}
        >
          <div className="flex flex-col justify-around ">
            <input
              type="email"
              name="email"
              className="w-full m-1 rounded-md"
              placeholder="Email"
              onChange={handleInputChange}
              value={userFormData.email}
            ></input>
            <input
              type="password"
              name="password"
              className="w-full m-1 rounded-md"
              placeholder="Password"
              onChange={handleInputChange}
              value={userFormData.password}
            ></input>
          </div>
          <div className="flex flex-row justify-around">
            <button type="submit" className="m-1 bg-blue-600">
              Log in
            </button>
            <button type="button" className="m-1 bg-slate-600">
              Forgot login?
            </button>
          </div>
          <Link
            className="nav-link active bg-green-500 text-white rounded-md w-1/3"
            to="/signup"
          >
            Sign up
          </Link>
        </form>
      </div>
    </motion.div>
  );
}
