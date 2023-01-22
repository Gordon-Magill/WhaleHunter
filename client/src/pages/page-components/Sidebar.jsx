import React, { useState } from "react";
// import userReducer from "../../utils/reducers";
import {
  useUserStateContext,
  useUserDispatchContext,
} from "../../utils/userContext";
import { LOGOUT } from "../../utils/actions";

import { Link, useNavigate } from "react-router-dom";

// Import Logo Image
import Logo from "../../assets/01-logos/logo-full-color.png";
import Auth from "../../utils/auth"

// Import menu icons

// Icon for menu retract
import { HiMenuAlt3 } from "react-icons/hi";
// Icons for menu items
import { GiShipWheel } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import {GiTheaterCurtains } from "react-icons/gi";


export default function Sidebar() {

  // Set sidebar links
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: GiShipWheel },
    { name: "Harbor", link: "/harbor", icon: FaShoppingCart },
    { name: "Gallery", link: "/gallery", icon: GiTheaterCurtains },
  ];

    // Logged In State Links
    const loggedIn = [
      { name: "Log Out", icon: GiShipWheel },
  ];

    // Logged Out State Links
    const loggedOut = [
      { name: "Log In", link: "/login", icon: GiShipWheel },
      { name: "Sign Up", link: "/signup", icon: GiShipWheel },
  ];





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

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#02243f] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <img src={Logo} />
          <div>
          {menus?.map((menu, i) => (
            <Link id="logout"
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-bold p-2 hover:bg-gray-900 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-gray-200 duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
            </div>

              <div>
          {loggedIn?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-bold p-2 hover:bg-gray-900 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-gray-200 duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
            </div>

<div>
       {loggedOut?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-bold p-2 hover:bg-gray-900 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-gray-200 duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
       ))}
            </div>



        </div>
      </div>
    </section>
  );

}
