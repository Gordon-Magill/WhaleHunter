import React, { useReducer } from "react";
import { userReducer } from "../../utils/reducers";
import { useUserContext } from "../../utils/userContext";
import { LOGOUT } from "../../utils/actions";


import { Link } from "react-router-dom";

// Import Logo Image
import Logo from "../../assets/01-logos/logo-gray.png";

export default function Sidebar() {
  const initialState = useUserContext();
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  console.log('Sidebar loading with userState:', userState)
  return (
    <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-700">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <img src={Logo} />
        </div>
      </div>
      <div className="sidebar px-4 py-6">
        {userState.userInfo !== null ? (
          <>
            <p>Hello {userState.username}!</p>
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
          {userState?.userInfo !== null ? (
            <>
              <li className="my-px">
                <Link className="nav-link active" onClick={() => {userDispatch({type:LOGOUT})}}>
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
