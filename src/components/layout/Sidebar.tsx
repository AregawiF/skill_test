import React from 'react';
import { FaRegFile } from "react-icons/fa";


const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md ">
      <nav className="mt-5">
        <ul>
          {/* We'll add navigation items later */}
          <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 text-gray-700 bg-blue-100 font-semibold cursor-pointer"> {/* Example Active State */}
            Skill Test
          </li>
          <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer flex">
            <FaRegFile />
            Internship</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;