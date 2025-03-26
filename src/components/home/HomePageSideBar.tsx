

const HomePageSidebar = () => {
  return (
    <div className="left-0 mt-20 h-full w-64  text-white p-4 overflow-y-auto">
      {/* Steam Gift Card Section */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/200x80"
          alt="Steam Gift Cards"
          className="w-full rounded-md"
        />
        <p className="text-sm text-blue-400 font-medium mt-2">VAPOR GIFT CARDS</p>
        <p className="text-xs font-medium text-gray-400 mt-2">Give the Gift of Game</p>
      </div>

      {/* Recently Viewed */}
      <div className="mb-6">
        <h3 className=" text-xs font-semibold mb-2">RECENTLY VIEWED</h3>
        <p className=" hover:text-white text-gray-300 py-2 rounded-md text-sm cursor-pointer">
          Assassin’s Creed Shadows
        </p>
      </div>

      {/* Recommended */}
      <div className="mb-6">
        <h3 className=" text-xs font-semibold mb-2">RECOMMENDED</h3>
        <ul className="space-y-2">
          <li className="hover:text-white text-gray-300 cursor-pointer text-sm">By Friends</li>
          <li className="hover:text-white text-gray-300 cursor-pointer text-sm">By Curators</li>
          <li className="hover:text-white text-gray-300 cursor-pointer text-sm">Tags</li>
        </ul>
      </div>

      {/* Browse Categories */}
      <div className="mb-6">
        <h3 className="text-white text-xs font-semibold mb-2">BROWSE CATEGORIES</h3>
        <ul className="space-y-2">
          {["Top Sellers", "New Releases", "Upcoming", "Specials", "VR Titles", "Controller-Friendly", "Great on Deck"].map((category) => (
            <li key={category} className="hover:text-white text-gray-300 cursor-pointer text-sm">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Browse by Genre */}
      <div>
        <h3 className="text-white  text-xs font-semibold mb-2">BROWSE BY GENRE</h3>
        <ul className="space-y-2">
          {[
            "Free To Play",
            "Early Access",
            "Action",
            "Adventure",
            "Casual",
            "Indie",
            "Massively Multiplayer",
            "Racing",
            "RPG",
            "Simulation",
            "Sports",
            "Strategy",
          ].map((genre) => (
            <li key={genre} className="hover:text-white text-gray-300 cursor-pointer text-sm">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePageSidebar;
