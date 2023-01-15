import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function LoginPage() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [errorState, setErrorState] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);

  //   Update form state on changes to the form
  const handleInputChange = (event) => {
    // console.log('handleInputChange event:', event[0])
    const { name, value } = event[0];
    setUserFormData({ ...userFormData, [name]: value });
    console.log("new userFormData is:", userFormData);
  };

  //   Log the user in
  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    console.log("handleFormSubmit event:", event);
    console.log("userFormData:", userFormData);

    try {
      const { data } = await login({
        variables: {
          ...userFormData,
        },
      });

      // console.log('login data.login.user.savedBooks:', data.login.user.savedBooks);
      Auth.login(data.login.token);
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
    <div className="loginPage">
      <h1>This is the login page!</h1>
      <form>
        <input></input>
        <input></input>
        <button></button>
        <button></button>
      </form>
    </div>
  );
}
