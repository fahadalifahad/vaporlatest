
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";

const BottomBar = () => {
  return (
    <footer className="bottom-0 py-10 left-0 w-full bg-[#1B2A3A] text-gray-400 text-sm mt-6 mb-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs font-bold">
            LOGO
          </div>
          <p className="text-xs">
            © 2025 Valve Corporation. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-xs mb-2">
          <a href="#" className="hover:text-white">About Valve</a>
          <a href="#" className="hover:text-white">Jobs</a>
          <a href="#" className="hover:text-white">Steamworks</a>
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Gift Cards</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaXTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaSteam />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
