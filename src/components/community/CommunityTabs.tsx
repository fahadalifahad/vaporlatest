import { useState } from "react";
import AllTab from "./tabs/AllTab";
import ScreenshotTab from "./tabs/ScreenshotTab";
import LiveStreamsTab from "./tabs/LiveStreamTab";
import GuidesTab from "./tabs/GuidesTab";
import ReviewsTab from "./tabs/ReviewsTab";
import WorkshopTab from "./tabs/WorkshopTab";
import ArtworkTab from "./tabs/ArtworkTab";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "All", component: <AllTab /> },
  { name: "Screenshots", component: <ScreenshotTab /> },
  { name: "Artwork", component: <ArtworkTab /> },
  { name: "Broadcasts", component: <LiveStreamsTab /> },
  { name: "Videos", component: <LiveStreamsTab /> },
  { name: "Workshop", component: <WorkshopTab /> },
  { name: "News", component: null },
  { name: "Guides", component: <GuidesTab /> },
  { name: "Reviews", component: <ReviewsTab /> },
];

const CommunityTab = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewing, setViewing] = useState("MOST POPULAR");
  const navigate = useNavigate(); // Use React Router navigation

  const handleTabClick = (tabName: string) => {
    if (tabName === "News") {
      navigate("/"); // Redirect to homepage
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className=" w-full max-w-6xl mx-auto text-white p-2">
      {/* Tabs for large screens */}
      <div className="hidden sm:flex border-b border-gray-500 space-x-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === tab.name
                ? "bg-black border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Dropdown for small screens */}
      <div className="sm:hidden relative">
        <button
          className="w-full px-4 py-2 text-sm font-semibold bg-black border border-gray-500 rounded focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {activeTab} ▼
        </button>
        {isDropdownOpen && (
          <div className="absolute w-full bg-[#2a475e] rounded mt-1 shadow-lg z-10">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={() => {
                  setActiveTab(tab.name);
                  setIsDropdownOpen(false);
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center space-x-2 mt-4">
        <span className="text-gray-400">Viewing</span>
        <button
          className={`px-3 py-1 text-sm rounded ${
            viewing === "MOST POPULAR"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-800"
          }`}
          onClick={() => setViewing("MOST POPULAR")}
        >
          MOST POPULAR
        </button>
        <button
          className={`px-3 py-1 text-sm border border-gray-500 rounded ${
            viewing === "MOST RECENT"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-800"
          }`}
          onClick={() => setViewing("MOST RECENT")}
        >
          MOST RECENT
        </button>
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.name === activeTab)?.component || (
          <p className="text-gray-400"></p>
        )}
      </div>
    </div>
  );
};

export default CommunityTab;
