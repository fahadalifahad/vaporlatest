import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiSteam } from "react-icons/si";

const HeroContentAbout = () => {
  

  return (
    <section className="flex max-w-5xl mt-10 md:mt-0 h-screen mx-auto flex-col md:flex-row items-center justify-between px-6 md:px-16  text-white">
      {/* Left Content */}
      <div className="md:w-1/2 px-6 md:text-left">
        <div className="flex items-center gap-2 mb-2">
          <SiSteam className="text-4xl" />
          <h2 className="text-3xl font-bold">VAPOR</h2>
        </div>
        <p className="text-lg mb-6">
          Steam is the ultimate destination for playing, discussing, and creating games.
        </p>
        <div className="flex items-center gap-6 mb-6">
          <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-xs">ONLINE</span>
            
          </div>
          <p className="text-2xl font-bold">34,683,560</p>
          </div>
          <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span className="text-xs">PLAYING NOW</span>
            
          </div>
          <p className="text-2xl font-bold">34,683,560</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          INSTALL VAPOR <FaWindows />
        </button>
        <p className="text-sm mt-4 flex items-center gap-2">
          Also available on: <FaApple /> <FaLinux /> <SiSteam />
        </p>
      </div>

      {/* Right Video */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
      <video className="w-full max-w-lg rounded-lg shadow-lg" autoPlay loop muted playsInline poster="/video-thumbnail.jpg">
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Learn More */}
      {/* <div className="w-full text-center mt-8">
        <button onClick={handleScroll} className="text-blue-500 hover:text-blue-700 text-lg">
          Learn More
        </button>
      </div> */}
    </section>
  );
};

export default HeroContentAbout;
