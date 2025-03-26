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
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    title: "Dark Arena",
    thumbnails: [
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    ],
    price: "$39.99",
    platforms: [<FaApple />],
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
    title: "Space Invaders",
    thumbnails: [
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
    ],
    price: "$9.99",
    platforms: [<FaWindows />, <FaApple />, <FaLinux />],
  },
  {
    image: "https://via.placeholder.com/500x300?text=Game+5",
    title: "Pixel Racers",
    thumbnails: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    price: "$14.99",
    platforms: [<FaWindows />],
  },
  {
    image: "https://via.placeholder.com/500x300?text=Game+6",
    title: "Zombie Wars",
    thumbnails: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    price: "$29.99",
    platforms: [<FaApple />, <FaLinux />],
  },
  {
    image: "https://via.placeholder.com/500x300?text=Game+7",
    title: "Magic Kingdom",
    thumbnails: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    price: "$4.99",
    platforms: [<FaWindows />, <FaApple />, <FaLinux />],
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
    title: "Dragon Slayer",
    thumbnails: [
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/054/628/719/small/a-tiger-running-on-rocks-in-the-wild-photo.jpg",
    ],
    price: "Free To Play",
    platforms: [<FaWindows />],
  },
  {
    image: "https://via.placeholder.com/500x300?text=Game+9",
    title: "Battle Royale",
    thumbnails: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    price: "$24.99",
    platforms: [<FaApple />],
  },
  {
    image: "https://via.placeholder.com/500x300?text=Game+10",
    title: "Rogue Warriors",
    thumbnails: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    price: "$12.99",
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
    <h1 className="text-white text-2xl font-medium mt-4 max-w-5xl mx-auto pb-4">FEATURED AND RECOMMENDED</h1>
    <div className="relative w-full max-w-5xl mx-auto bg-[#1b2838] p-4 rounded-md overflow-hidden">
      <div className="flex">
        {/* Left Image */}
        <img
          src={slides[currentIndex].image}
          alt="Slide Image"
          className="w-2/3 h-80 object-cover rounded-md"
        />

        {/* Right Content */}
        <div className="w-1/3 p-4 text-white flex flex-col justify-between">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>

          {/* Thumbnails Grid (2x2) */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {slides[currentIndex].thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt="Thumbnail"
                className="w-full h-20 object-cover rounded-sm"
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

      {/* Slide Dots */}
      <div className="absolute  bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
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
