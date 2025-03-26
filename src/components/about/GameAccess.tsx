
import { motion } from "framer-motion";

// Function to generate random floating animation
const floatingAnimation : any = {
  y: ["0px", "15px", "-15px", "0px"], // Moves up and down
  x: ["0px", "10px", "-10px", "0px"], // Moves side to side
  transition: {
    duration: 4, // Animation duration
    ease: "easeInOut",
    repeat: Infinity, // Infinite loop
    repeatType: "reverse",
  },
};

const GameAccess = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden ">
      {/* Floating Game Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "top-20 left-10 w-20" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "top-28 left-1/3 w-24" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "top-60 right-10 w-28" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "bottom-40 right-60 w-20" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "bottom-5 right-5 w-24" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "bottom-60 left-20 w-24" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "bottom-5 left-5 w-20" },
          { src: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg", className: "top-10 right-10 w-28" },
        ].map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt="Game Image"
            className={`absolute ${image.className}`}
            animate={floatingAnimation}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center max-w-2xl z-10">
        <h2 className="text-4xl font-bold">Access Games Instantly</h2>
        <p className="text-lg mt-3">
          With nearly 30,000 games from AAA to indie and everything in between. Enjoy exclusive deals, 
          automatic game updates, and other great perks.
        </p>
        <a href="#" className="text-blue-400 text-lg mt-4 inline-block hover:text-blue-300">
          Browse the Store →
        </a>
      </div>
    </section>
  );
};

export default GameAccess;
