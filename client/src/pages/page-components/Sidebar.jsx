import React from "react";
// import userReducer from "../../utils/reducers";
import {
  useUserStateContext,
  useUserDispatchContext,
} from "../../utils/userContext";
import { LOGOUT } from "../../utils/actions";

import { Link, useNavigate } from "react-router-dom";

// Import Logo Image
import Logo from "../../assets/01-logos/logo-gray.png";
import Auth from "../../utils/auth"

export default function Sidebar() {
  // const initialState = useUserContext();
  const userDispatch = useUserDispatchContext();
  const userState = useUserStateContext();
  const navigate = useNavigate();
  // const [userState, userDispatch] = useReducer(userReducer,initialState);

  const logoutHelper = (event) => {
    event.preventDefault()
    userDispatch({ type: LOGOUT });
    Auth.removeTokenFromLocal()
    navigate("/");
  }

  console.log("Sidebar loading with userState.userInfo:", userState.userInfo);
  return (
    <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-700">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <img src={Logo} />
        </div>
      </div>
      <div className="sidebar px-4 py-6">
        {userState?.userInfo.username !== null ? (
          <>
            <p>Hello {userState.userInfo?.username}!</p>
          </>
        ) : (
          <>
            <p>No user logged in</p>
          </>
        )}
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <Link className="nav-link active" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="my-px">
            <Link className="nav-link active" to="/harbor">
              Harbor
            </Link>
          </li>
          <li className="my-px">
            <Link className="nav-link active" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="my-px">
            <Link className="nav-link active" to="/battle">
              Battle
            </Link>
          </li>
          {/* Make this disappear upong login */}
          {userState.userInfo.username !== null ? (
            <>
              <li className="my-px">
                <Link className="nav-link active" onClick={logoutHelper}>
                  Log out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="my-px">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="my-px">
                <Link className="nav-link active" to="/signup">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </aside>
  );
}
