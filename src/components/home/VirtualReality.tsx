import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  [
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "iRacing",
      price: "$5.49 USD",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Stardew Valley",
      price: "$6.99 USD",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Satisfactory",
      price: "$9.09 USD",
      discount: "30%",
      oldPrice: "$12.99",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Cataclismo",
      price: "$9.74 USD",
      discount: "35%",
      oldPrice: "$14.99",
    },
  ],
  [
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Cyberpunk 2077",
      price: "$29.99 USD",
      discount: "50%",
      oldPrice: "$59.99",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Half-Life: Alyx",
      price: "$49.99 USD",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Beat Saber",
      price: "$24.99 USD",
    },
    {
      image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380",
      title: "Superhot VR",
      price: "$19.99 USD",
    },
  ],
];

export default function VirtualReality() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden mt-4">
      {/* Title & Browse All Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium text-white">VIRTUAL REALITY</h1>
        <button className="border-[1px] border-gray-400 hover:border-white px-4 py-1 rounded-lg text-white">
          Browse All
        </button>
      </div>

      {/* Game Grid (Responsive) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {slides[currentIndex].map((game, idx) => (
          <div key={idx} className="relative bg-gray-900 rounded-lg overflow-hidden">
            <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-2">
              {game.discount && (
                <span className="bg-green-500 text-black px-2 py-1 text-xs font-bold mr-2">
                  {game.discount}
                </span>
              )}
              {game.oldPrice && (
                <span className="text-gray-400 line-through mr-1">
                  {game.oldPrice}
                </span>
              )}
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

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
