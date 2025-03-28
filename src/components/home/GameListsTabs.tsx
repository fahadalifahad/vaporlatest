import { useState } from "react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const gameCategories: Data = {
  "New & Trending": [
    {
      id: 1,
      title: "Atelier Yumia",
      description: "Exploration, Collectathon, Hack and Slash, JRPG",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />, <FaApple key="mac" />],
      releaseDate: "21 Mar, 2025",
      oldPrice: "$58.29",
      newPrice: "$50.99",
      discount: "-10%",
      tags: ["Action", "Anime", "3D"],
    },
    {
      id: 2,
      title: "BLEACH Rebirth of Souls",
      description: "Action, Anime, 3D Fighter, 3D",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />, <FaLinux key="linux" />],
      releaseDate: "21 Mar, 2025",
      oldPrice: "$59.99",
      newPrice: "$51.99",
      discount: "-15%",
      tags: ["Action", "Anime", "Fighting"],
    },
  ],
  "Top Seller": [
    {
      id: 3,
      title: "Mudborne: Frog Management Sim",
      description: "Casual, Simulation, Education, Farming Sim",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />],
      releaseDate: "20 Mar, 2025",
      oldPrice: "$4.49",
      newPrice: "$4.04",
      discount: "-10%",
      tags: ["Casual", "Farming", "Simulation"],
    },
  ],
  "Popular Upcoming": [
    {
      id: 4,
      title: "Atelier Yumia",
      description: "Exploration, Collectathon, Hack and Slash, JRPG",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />, <FaApple key="mac" />],
      releaseDate: "21 Mar, 2025",
      tags: ["Action", "Anime", "3D"],
    },
  ],
  Special: [
    {
      id: 5,
      title: "Atelier Yumia",
      description: "Exploration, Collectathon, Hack and Slash, JRPG",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />, <FaApple key="mac" />],
      releaseDate: "21 Mar, 2025",
      oldPrice: "$58.29",
      newPrice: "$50.99",
      discount: "-10%",
      tags: ["Action", "Anime", "3D"],
    },
  ],
  "Trending Free": [
    {
      id: 6,
      title: "Atelier Yumia",
      description: "Exploration, Collectathon, Hack and Slash, JRPG",
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      os: [<FaWindows key="win" />, <FaApple key="mac" />],
      releaseDate: "21 Mar, 2025",
      newPrice: "Free",
      tags: ["Action", "Anime", "3D"],
    },
  ],
};

interface Data {
  [key: string]: any; // Index signature
  "New & Trending": any;
  "Top Seller": any;
  "Popular Upcoming": any;
  "Special": any;
  "Trending Free": any;
}

const dummyScreenshots = [
  "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
  "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
  "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
  "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
];

const GameListTabs = () => {
  const [activeTab, setActiveTab] = useState("New & Trending");
  const games = gameCategories[activeTab];

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden flex flex-col mt-4">
      {/* Tabs */}
      <div className="flex bg-[#1f2937] text-white p-0 rounded-md">
        {Object.keys(gameCategories).map((category) => (
          <button
            key={category}
            className={`px-1 py- text-sm font-semibold rounded-md ${
              activeTab === category ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Game List */}
        <div className="w-full md:w-2/3 bg-[#263544] p-4">
          <div className="space-y-1">
            {games.length > 0 ? (
              games.map((game:any) => (
                <div key={game.id} className="flex flex-col sm:flex-row items-center sm:items-start border-b p-2">
                  {/* Game Image */}
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-24 h-16 rounded-md"
                  />
                  {/* Game Details */}
                  <div className="sm:ml-4 flex-1 text-center sm:text-left">
                    <h3 className="text-white text-md font-medium">
                      {game.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{game.description}</p>
                    {/* OS Icons */}
                    <div className="flex justify-center sm:justify-start gap-2 mt-1 text-gray-300">
                      {game.os}
                    </div>
                    {/* Tags */}
                    <div className="flex justify-center sm:justify-start gap-2 mt-1 flex-wrap">
                      {game.tags.map((tag:any, index:number) => (
                        <span
                          key={index}
                          className="bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Price & Discount */}
                  {game.newPrice !== "Free" &&
                    activeTab !== "Popular Upcoming" && (
                      <span className="bg-green-500 text-black font-bold px-2 py-1 my-2 text-xs rounded-md">
                        {game.discount}
                      </span>
                    )}

                  <div className="text-right">
                    {game.oldPrice && (
                      <p className="text-gray-400 line-through text-xs">
                        {game.oldPrice}
                      </p>
                    )}
                    <p className="text-white text-sm font-bold">
                      {game.newPrice || "Coming Soon"}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {game.releaseDate}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">No games available</p>
            )}
          </div>
          <button className="mt-4 flex justify-center sm:justify-start text-white text-sm font-semibold py-2 items-center ">
            See More:{" "}
            <p className=" ml-2 border-[1px] border-gray-400 p-1 rounded-md hover:border-white">
              {activeTab}
            </p>
          </button>
        </div>

        {/* Right Side - Game Preview */}
        {games.length > 0 && (
          <div className="w-1/3 bg-[#263544] p-4  hidden md:block">
            <h2 className="text-white text-lg font-bold mb-2">
              {games[0].title}
            </h2>
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {games[0].tags.map((tag:any, index:number) => (
                <span
                  key={index}
                  className="bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Reviews Button */}
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md mb-3">
              Mixed (144) Reviews
            </button>
            {/* Game Screenshots */}
            <div className="grid grid-cols-1 gap-2">
              {dummyScreenshots.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Screenshot"
                  className="w-56 h-28 rounded-md mx-auto"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameListTabs;
