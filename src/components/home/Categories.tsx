import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  [
    { name: "ROGUE-LIKE", image: "https://via.placeholder.com/150" },
    { name: "SURVIVAL", image: "https://via.placeholder.com/150" },
    { name: "VISUAL NOVEL", image: "https://via.placeholder.com/150" },
    { name: "STORY-RICH", image: "https://via.placeholder.com/150" },
  ],
  [
    { name: "FPS", image: "https://via.placeholder.com/150" },
    { name: "RPG", image: "https://via.placeholder.com/150" },
    { name: "STRATEGY", image: "https://via.placeholder.com/150" },
    { name: "HORROR", image: "https://via.placeholder.com/150" },
  ],
  [
    { name: "PUZZLE", image: "https://via.placeholder.com/150" },
    { name: "RACING", image: "https://via.placeholder.com/150" },
    { name: "FIGHTING", image: "https://via.placeholder.com/150" },
    { name: "SIMULATION", image: "https://via.placeholder.com/150" },
  ],
  [
    { name: "SPORTS", image: "https://via.placeholder.com/150" },
    { name: "ADVENTURE", image: "https://via.placeholder.com/150" },
    { name: "PLATFORMER", image: "https://via.placeholder.com/150" },
    { name: "MMO", image: "https://via.placeholder.com/150" },
  ],
  [
    { name: "SANDBOX", image: "https://via.placeholder.com/150" },
    { name: "CARD GAME", image: "https://via.placeholder.com/150" },
    { name: "TURN-BASED", image: "https://via.placeholder.com/150" },
    { name: "VR", image: "https://via.placeholder.com/150" },
  ],
];

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 px-1">
      <h2 className="text-white text-xl mb-4 text-center md:text-left">
        BROWSE BY CATEGORY
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          className="absolute left-2 md:left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full transition-transform duration-500">
          {categories[currentIndex].map((category, idx) => (
            <div
              key={idx}
              className="relative group w-full max-w-[180px] mx-auto bg-blue-400 rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
              <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full opacity-90 group-hover:translate-y-[10px] transition-all duration-300">
                {category.name}
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 md:right-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {categories.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 mx-1 rounded-full ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-600"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
