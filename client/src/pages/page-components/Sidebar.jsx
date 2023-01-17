import React from "react";

// Import Logo Image
import Logo from "../../assets/01-logos/logo-gray.png";

export default function Sidebar() {
  return (
    <aside
    className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-700"
  >
    <div className="sidebar-header flex items-center justify-center py-4">
      <div className="inline-flex">
        <img src={Logo}/>
      </div>
    </div>
    <div className="sidebar px-4 py-6">
      <ul className="flex flex-col w-full">
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
            Dashboard
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
            Harbor
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
            Gallery
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
            Battle
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  </aside>
  );
}
