import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  [
    { name: "ROGUE-LIKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "SURVIVAL", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "VISUAL NOVEL", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "STORY-RICH", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
  ],
  [
    { name: "FPS", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "RPG", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "STRATEGY", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "HORROR", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
  ],
  [
    { name: "PUZZLE", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "RACING", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "FIGHTING", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "SIMULATION", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
  ],
  [
    { name: "SPORTS", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "ADVENTURE", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "PLATFORMER", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "MMO", image: "https://encrypted-tbn0.gstatic.com/images?q=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
  ],
  [
    { name: "SANDBOX", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "CARD GAME", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "TURN-BASED", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
    { name: "VR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xjmsq3WPYqLQ2NdcZALhZlc-z0hQuuMJbyjy6XwnOwC6hpn3L93Cg4FIOWAVsOpcAc&usqp=CAU" },
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
    <div className="relative w-full max-w-5xl mx-auto pt-6">
      <h2 className="text-white text-xl mb-4">BROWSE BY CATEGORY</h2>
      <div className="relative flex items-center overflow-hidden">
        <button
          className="absolute left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 transition-transform duration-500">
          {categories[currentIndex].map((category, idx) => (
            <div
              key={idx}
              className="relative group mx-auto w-60 h-40 bg-blue-400 rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className=" object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
              <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full opacity-90 group-hover:translate-y-[20px] transition-all duration-300">
                {category.name}
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {categories.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 mx-1 rounded-full ${idx === currentIndex ? "bg-white" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
}