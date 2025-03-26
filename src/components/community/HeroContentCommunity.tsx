
const popularHubs = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "Counter-Strike 2", description: "166 new guides this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "No Man's Sky", description: "9 new artwork this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "Ghost of Tsushima DIRECTOR'S CUT", description: "19 new artwork this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "MXGP - The Official Motocross Videogame", description: "6 new screenshots this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "Pathfinder: Wrath of the Righteous", description: "1 new artwork this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "Monster Hunter Wilds", description: "129 new artwork this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "Metro Exodus", description: "17 new artwork this week" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s", title: "KINGDOM HEARTS -HD 1.5+2.5 ReMIX-", description: "2 new guides this week" }
];

const HeroContentCommunity = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto mt-10 text-white p-4">
      <h1 className="text-3xl font-semibold">Community Activity</h1>
      <p className="text-gray-400 mt-1">Community and official content for all games and software on Steam.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Side (Popular Hubs) - Hidden on Small Devices */}
        <div className="hidden lg:block col-span-2 bg-[#2a475e] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">POPULAR HUBS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularHubs.map((hub, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={hub.image} alt={hub.title} className="w-10 h-10 rounded" />
                <div>
                  <p className="font-semibold">{hub.title}</p>
                  <p className="text-sm text-gray-300">{hub.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Search Fields) */}
        <div className="bg-[#2a475e] p-4 rounded-lg flex justify-between  md:flex-col space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">FIND HUBS</h2>
            <input 
              type="text" 
              placeholder="Search for products" 
              className="w-full p-2 bg-[#1b2838] text-white rounded focus:outline-none"
            />
          </div>
          <hr className="border-gray-600" />
          <div>
            <h2 className="text-lg font-semibold mb-2">FIND PEOPLE</h2>
            <input 
              type="text" 
              placeholder="Search for friends" 
              className="w-full p-2 bg-[#1b2838] text-white rounded focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentCommunity;
