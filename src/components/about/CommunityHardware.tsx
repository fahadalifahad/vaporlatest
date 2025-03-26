
const CommunityHardware = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Join the Community Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Community</h2>
          <p className="text-lg mt-3">
            Meet new people, join groups, form clans, chat in-game and more! 
            With over 100 million potential friends (or enemies), the fun never stops.
          </p>
          <a href="#" className="text-blue-400 text-lg mt-4 hover:text-blue-300">
            Visit the Community →
          </a>
        </div>

        {/* Community Illustration */}
        <div className="relative flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1742921118~exp=1742924718~hmac=08bbec8d13dd4781c1af4061a94a99561cf8bfa18f52c26d4d41c6db0c14d266&w=1380" // Replace with actual image
            alt="Community"
            className="w-full max-w-lg opacity-80"
          />
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1742921118~exp=1742924718~hmac=08bbec8d13dd4781c1af4061a94a99561cf8bfa18f52c26d4d41c6db0c14d266&w=1380" // Replace with actual image
            alt="Community"
            className="w-full max-w-lg opacity-80"
          />
        </div>

        {/* Experience Steam Hardware Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Experience Steam Hardware</h2>
          <p className="text-lg mt-3">
            We created the Steam Deck and the Valve Index headset to make gaming on 
            the PC even better.
          </p>
          <a href="#" className="text-blue-400 text-lg mt-4 hover:text-blue-300">
            Experience Steam Hardware →
          </a>
        </div>


        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Release your Game</h2>
          <p className="text-lg mt-3">
          Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.
          </p>
          <a href="#" className="text-blue-400 text-lg mt-4 hover:text-blue-300">
            Learn About Vaporwork →
          </a>
        </div>

        {/* Community Illustration */}
        <div className="relative flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1742921118~exp=1742924718~hmac=08bbec8d13dd4781c1af4061a94a99561cf8bfa18f52c26d4d41c6db0c14d266&w=1380" // Replace with actual image
            alt="Community"
            className="w-full max-w-lg opacity-80"
          />
        </div>
        
        
      </div>
    </section>
  );
};

export default CommunityHardware;
