import React from "react";
import { FaHome, FaBook, FaUsers, FaCommentDots } from "react-icons/fa";

const LeftNavbar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#252629] text-white fixed h-full p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">Vapor</h1>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
            <FaHome size={18} /> Store
          </button>
          <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
            <FaBook size={18} /> Library
          </button>
          <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
            <FaUsers size={18} /> Community
          </button>
          <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
            <FaCommentDots size={18} /> Chat
          </button>
        </nav>
      </div>

      {/* Profile Section - Stays at Bottom */}
      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-md">
        <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full text-black font-bold">
          JD
        </div>
        <div>
          <p className="font-medium">JohnDoe</p>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>
    </aside>
  );
};

export default LeftNavbar;
