import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const allGames = [
  { image: "https://via.placeholder.com/300x150", title: "iRacing", price: "$5.49 USD" },
  { image: "https://via.placeholder.com/300x150", title: "Stardew Valley", price: "$6.99 USD" },
  { image: "https://via.placeholder.com/300x150", title: "Satisfactory", price: "$9.09 USD", discount: "30%", oldPrice: "$12.99" },
  { image: "https://via.placeholder.com/300x150", title: "Cataclismo", price: "$9.74 USD", discount: "35%", oldPrice: "$14.99" },
  { image: "https://via.placeholder.com/300x150", title: "Celeste", price: "$4.99 USD" },
  { image: "https://via.placeholder.com/300x150", title: "Hollow Knight", price: "$7.49 USD" },
  { image: "https://via.placeholder.com/300x150", title: "Dead Cells", price: "$9.99 USD", discount: "20%", oldPrice: "$12.49" },
  { image: "https://via.placeholder.com/300x150", title: "Terraria", price: "$3.99 USD" },
];

export default function UnderPrice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Group items based on screen size
  const slides = [];
  for (let i = 0; i < allGames.length; i += itemsPerSlide) {
    slides.push(allGames.slice(i, i + itemsPerSlide));
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden mt-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium text-white">Under $10 USD</h1>
        <div className="space-x-2">
          <button className="border-[1px] border-gray-400 hover:border-white px-2 py-1 text-sm rounded-lg text-white">
            UNDER $10 USD
          </button>
          <button className="border-[1px] border-gray-400 hover:border-white px-2 py-1 text-sm rounded-lg text-white">
            UNDER $5 USD
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        {slides[currentIndex].map((game, idx) => (
          <div key={idx} className="relative bg-gray-900 rounded-lg overflow-hidden w-1/2 sm:w-1/4">
            <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-2">
              {game.discount && (
                <span className="bg-green-500 text-black px-2 py-1 text-xs font-bold mr-2">
                  {game.discount}
                </span>
              )}
              {game.oldPrice && <span className="text-gray-400 line-through mr-1">{game.oldPrice}</span>}
              <span className="text-white font-bold">{game.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-white text-xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-white text-xl" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
