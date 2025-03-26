import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWindows, FaApple, FaLinux } from "react-icons/fa";

const slides = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s",
    title: "Cyber Legends",
    thumbnails: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s",
    ],
    price: "$19.99",
    platforms: [<FaWindows />, <FaApple />],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcc67rPkHyBTuSJXdclnCk2Wmvx4M3aL4xHw&s",
    title: "Fantasy Quest",
    thumbnails: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcc67rPkHyBTuSJXdclnCk2Wmvx4M3aL4xHw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcc67rPkHyBTuSJXdclnCk2Wmvx4M3aL4xHw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcc67rPkHyBTuSJXdclnCk2Wmvx4M3aL4xHw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcc67rPkHyBTuSJXdclnCk2Wmvx4M3aL4xHw&s",
    ],
    price: "Free To Play",
    platforms: [<FaWindows />, <FaLinux />],
  },
];

export default function FeatureRecommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <h1 className="text-white text-2xl font-medium mt-4 max-w-5xl mx-auto pb-4 text-center md:text-left">
        FEATURED AND RECOMMENDED
      </h1>
      <div className="relative w-full max-w-5xl mx-auto bg-[#1b2838] p-4 rounded-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <img
            src={slides[currentIndex].image}
            alt="Slide Image"
            className="w-full md:w-2/3 h-56 md:h-80 object-cover rounded-md"
          />

          {/* Right Content */}
          <div className="w-full md:w-1/3 p-4 text-white flex flex-col justify-between">
            <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 mt-4">
              {slides[currentIndex].thumbnails.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt="Thumbnail"
                  className="w-full h-12 md:h-20 object-cover rounded-sm"
                />
              ))}
            </div>

            <hr className="border-gray-600 my-2" />

            <h3 className="text-lg font-semibold">Now Available</h3>
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded self-start">
              Top Seller
            </span>

            {/* Price + Icons */}
            <div className="flex justify-between items-center mt-auto">
              <p className="text-sm">{slides[currentIndex].price}</p>
              <div className="flex gap-2 text-lg">
                {slides[currentIndex].platforms.map((icon, idx) => (
                  <span key={idx}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-xl" />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
