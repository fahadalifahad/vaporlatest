const UpdatesOffers = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden mt-2 px-2">
      <h2 className="text-white text-xl font-semibold mb-4">UPDATES AND OFFERS</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left Section - Square Enix Sale */}
        <div className="bg-black p-4 flex flex-col relative w-full sm:w-1/2">
          <div className="grid grid-cols-4 grid-rows-4 gap-1">
            {/* Dummy Images Grid */}
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="w-28 h-16">
                  <img
                    src="https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380"
                    alt="Game Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-white text-lg font-bold">SQUARE ENIX PUBLISHER SALE</h3>
            <p className="text-gray-400 text-sm">WEEKEND DEAL</p>
          </div>
          <div className="bg-green-500 text-black text-center font-semibold px-2 py-1 mt-2 inline-block">
            Up to -90%
          </div>
        </div>

        {/* Right Section - Assassin's Creed Shadows */}
        <div className="relative bg-red-700 p-4 flex flex-col items-center w-full sm:w-1/2">
          <div className="w-full h-60">
            <img
              src="https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380"
              alt="Assassin's Creed Shadows"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-bold mt-4 sm:mt-16">ASSASSIN'S CREED SHADOWS</h3>
          <button className="bg-yellow-600 text-black font-bold px-4 py-2 mt-2">
            NOW AVAILABLE
          </button>
          <div className="text-white mt-2">$50.99 USD</div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesOffers;
