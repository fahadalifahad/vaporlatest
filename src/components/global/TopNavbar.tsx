import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaBell,
  FaShoppingCart,
  FaDownload,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);
  const [cummunityDropdownOpen, setCummunityDropdownOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const rightMenuRef = useRef<any>(null);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node; // Explicitly cast target to Node

      if(menuRef.current && rightMenuRef.current){
        if (menuRef.current && !menuRef.current.contains(target)) {
          setMenuOpen(false);
        }
        if (rightMenuRef.current && !rightMenuRef?.current?.contains(target)) {
          setRightMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#131414] text-white p-4 flex justify-between items-center shadow-md border-b border-gray-800 fixed top-0 left-0 w-full z-50">
      {/* Left - Menu Toggle */}
      <div className="flex items-center gap-6">
        <button
          className="text-xl md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className=" cursor-pointer" />
        </button>
      </div>

      {/* Center - Logo */}
      <div className="flex-grow flex justify-center md:justify-start">
        <Link to={"/"}>
          {" "}
          <h1 className="text-3xl font-medium cursor-pointer">Vapor</h1>
        </Link>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 font-sans pl-6">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setStoreDropdownOpen(true)}
            onMouseLeave={() => setStoreDropdownOpen(false)}
          >
            <Link to={"/"}>
              <button
                className={`${
                  isActive("/")
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-200"
                } hover:text-white cursor-pointer pb-1`}
              >
                STORE
              </button>
            </Link>
            {storeDropdownOpen && (
              <div className="absolute left-0 top-full bg-[#1d1f1d] shadow-lg p-3 w-52 rounded-md">
                <Link to="/" className="block py-2 hover:text-gray-400">
                  Your Store
                </Link>
                <Link to="/new" className="block py-2 hover:text-gray-400">
                  New & Noteworthy
                </Link>
                <Link to="/category" className="block py-2 hover:text-gray-400">
                  Category
                </Link>
                <Link to="/points" className="block py-2 hover:text-gray-400">
                  Point Shop
                </Link>
                <Link to="/news" className="block py-2 hover:text-gray-400">
                  News
                </Link>
                <Link to="/labs" className="block py-2 hover:text-gray-400">
                  Labs
                </Link>
                <input
                  type="text"
                  placeholder="Search here..."
                  className=" py-1 px-2 border-white border-[1px] rounded-full text-sm"
                />
              </div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setCummunityDropdownOpen(true)}
            onMouseLeave={() => setCummunityDropdownOpen(false)}
          >
            <Link to={"/community-page"}>
              <button
                className={`${
                  isActive("/community-page")
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-200"
                } hover:text-white cursor-pointer pb-1`}
              >
                COMMUNITY
              </button>
            </Link>
            {cummunityDropdownOpen && (
              <div className="absolute left-0 top-full bg-[#1d1f1d] shadow-lg p-3 w-44 rounded-md">
                <Link
                  to="/community-page"
                  className="block py-2 hover:text-gray-400"
                >
                  Home
                </Link>
                <Link to="/new" className="block py-2 hover:text-gray-400">
                  Discussion
                </Link>
                <Link to="/category" className="block py-2 hover:text-gray-400">
                  Workshop
                </Link>
                <Link to="/points" className="block py-2 hover:text-gray-400">
                  Market
                </Link>
                <Link to="/news" className="block py-2 hover:text-gray-400">
                  Broadcast
                </Link>
              </div>
            )}
          </div>
          <Link to={"/about"}>
            <button
              className={`${
                isActive("/about")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-200"
              } hover:text-white cursor-pointer pb-1`}
            >
              ABOUT
            </button>
          </Link>
          <Link to={"/support-page"}>
            <button
              className={`${
                isActive("/support-page")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-200"
              } hover:text-white cursor-pointer pb-1`}
            >
              SUPPORT
            </button>
          </Link>
        </div>
        {/* Search Bar - Hidden on small devices */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-xs">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
            <input
              type="text"
              placeholder="Search games..."
              className="bg-[#1d1f1d] border text-white px-10 py-2 rounded-full outline-none placeholder-gray-500 w-full"
            />
          </div>
        </div>
        {/* Icons */}
        <div className="hidden md:flex gap-5">
          <FaBell className="text-xl cursor-pointer hover:text-gray-400" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400" />
          <FaDownload className="text-xl cursor-pointer hover:text-gray-400" />
          <FaCog className="text-xl cursor-pointer hover:text-gray-400" />
        </div>
        {/* Right Menu Toggle */}
        <button
          className="text-xl md:hidden cursor-pointer"
          onClick={() => setRightMenuOpen(!rightMenuOpen)}
        >
          <FaBars className=" cursor-pointer" />
        </button>
      </div>

      {/* Mobile Left Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-[#131414] shadow-md p-4 w-64 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-xl mb-4 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <Link to={"/"}>
          <button
            className={`flex font-medium cursor-pointer justify-between w-full text-gray-200 text-left py-2 hover:text-white
            ${storeOpen ? " bg-[#1b2030]" : ""}
            ${storeOpen ? " p-2" : ""}
            ${storeOpen ? " rounded-sm" : ""}`}
            onClick={() => setStoreOpen(!storeOpen)}
          >
            STORE
            <FaChevronDown
              className={` cursor-pointer transition-transform ${
                storeOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </Link>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            storeOpen ? "max-h-[250px]" : "max-h-0"
          }
          ${storeOpen ? " bg-[#1b2030]" : ""}
          ${storeOpen ? " p-2" : ""}`}
        >
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Your Store
          </button>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            New & Noteworthy
          </button>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Categories
          </button>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Points Shop
          </button>
          <button className="block w-full text-left text-gray-200 py-2 hover:text-white">
            News
          </button>
          <button className="block w-full text-left text-gray-200 py-2 hover:text-white">
            Labs
          </button>
        </div>
        <Link to={"/community-page"}>
          <button
            className={`flex font-medium cursor-pointer justify-between w-full text-gray-200 text-left py-2 hover:text-white ${
              communityOpen ? "bg-[#1b2030]" : ""
            }
          ${communityOpen ? "rounded-sm" : ""}`}
            onClick={() => setCommunityOpen(!communityOpen)}
          >
            COMMUNITY
            <FaChevronDown
              className={` cursor-pointer transition-transform ${
                communityOpen ? "rotate-180" : ""
              }
            ${communityOpen ? "bg-[#1b2030]" : ""}`}
            />
          </button>
        </Link>

        <div
          className={`transition-all duration-300  overflow-hidden ${
            communityOpen ? "max-h-[250px]" : "max-h-0"
          }
          ${communityOpen ? " bg-[#1b2030]" : ""}
          ${communityOpen ? " p-2" : ""}`}
        >
          <Link to={"/community-page"}>
            <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
              Home
            </button>
          </Link>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Discussion
          </button>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Woekshop
          </button>
          <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
            Market
          </button>
          <button className="block w-full text-left text-gray-200 py-2 hover:text-white">
            Broadcast
          </button>
        </div>
        <Link to={"/about"}>
          <button className="block font-medium w-full text-left text-gray-200 py-2 hoverhover:text-white">
            ABOUT
          </button>
        </Link>
        <Link to={"/support-page"}>
          <button className="block font-medium w-full text-left text-gray-200 py-2 hover:text-white">
            SUPPORT
          </button>
        </Link>
      </div>

      {/* Mobile Right Sidebar */}
      <div
        ref={rightMenuRef}
        className={`fixed top-0 right-0 h-full bg-[#131414] shadow-md p-4 w-64 transform transition-transform duration-300 ${
          rightMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-xl mb-4 cursor-pointer"
          onClick={() => setRightMenuOpen(false)}
        >
          &times;
        </button>
        <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
          Notifications
        </button>
        <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
          Cart
        </button>
        <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
          Downloads
        </button>
        <button className="block w-full text-gray-200 text-left py-2 hover:text-white">
          Settings
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
