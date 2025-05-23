import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Velocity Rush",
    description:
      "Experience the ultimate racing simulation with next-gen graphics and physics. Compete in global tournaments and customize your dream vehicles.",
    discount: "33% OFF",
    price: "$39.99",
    oldPrice: "$59.99",
    buttonText: "Buy Now",
    image: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005788.jpg?t=st=1743154935~exp=1743158535~hmac=e90d8e4bfe13243669cafb6de53268f0b5666ab0c11e52e7af640088448761aa&w=1380", // Dummy Image URL
  },
  {
    title: "CyberQuest",
    description:
      "Dive into a futuristic cyber world, complete quests, and uncover the secrets of the neon city.",
    discount: "50% OFF",
    price: "$29.99",
    oldPrice: "$59.99",
    buttonText: "Buy Now",
    image: "https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714209.jpg?t=st=1743154982~exp=1743158582~hmac=55c9c190d5fe300f6a2cc188afeaa8fe07e084c2b3102d66e00bf5671be45df6&w=826", // Dummy Image URL
  },
  {
    title: "Galactic Wars",
    description:
      "Explore the vast galaxy, battle space invaders, and become the ultimate intergalactic warrior.",
    discount: "40% OFF",
    price: "$49.99",
    oldPrice: "$79.99",
    buttonText: "Buy Now",
    image: "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1743154970~exp=1743158570~hmac=f9750a5cb09938488dce23404881c55d0415baa549b80bc9a3dd1eef443baba2&w=1380", // Dummy Image URL
  },
];

const HeroContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="flex-1 mt-10 bg-[#131414] flex items-center justify-center">
      <div className="relative w-full">
        {/* Image Background */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={slides[currentIndex].image}
            alt="Game"
            className="w-full h-96 object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 text-white">
          <h1 className="text-3xl font-bold">{slides[currentIndex].title}</h1>
          <p className="mt-2 text-gray-300">{slides[currentIndex].description}</p>
          <div className="mt-4 flex items-center space-x-3">
            <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
              {slides[currentIndex].discount}
            </span>
            <span className="text-xl font-semibold">{slides[currentIndex].price}</span>
            <span className="text-gray-400 line-through">{slides[currentIndex].oldPrice}</span>
          </div>
          <div className=" flex  gap-2">
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            {slides[currentIndex].buttonText}
          </button>
          <button className="mt-4 bg-white px-4 py-2 rounded text-black">
            Add to cart
          </button>
          <button className="mt-4 bg-white px-4 py-2 rounded text-black">
            Add to wishlist
          </button>
          </div>
        </div>

        {/* Left and Right Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={goToPrevious}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={goToNext}
        >
          <FaChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroContent;
