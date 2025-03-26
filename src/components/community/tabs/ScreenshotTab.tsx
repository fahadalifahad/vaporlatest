
import { FaThumbsUp, FaComment, FaAward } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    title: "Batman: Arkham Asylum GOTY Edition",
    likes: 211,
    comments: 0,
    awards: 176,
    large: true,
  },
  {
    id: 2,
    image: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    title: "Saints Row IV",
    likes: 186,
    comments: 1,
    awards: 147,
    large: false,
  },
  {
    id: 3,
    image: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    title: "No Man's Sky",
    likes: 162,
    comments: 3,
    awards: 132,
    large: false,
  },
];

const ScreenshotTab = () => {
  return (
    <div className="w-full mx-auto p-2 text-white space-y-4">
      <div className="grid gap-4">
        {/* Full-width Image */}
        <div className="relative bg-[#2a475e] rounded overflow-hidden shadow-lg">
          <img
            src={reviews[0].image}
            alt={reviews[0].title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold">{reviews[0].title}</h3>
            <div className="flex space-x-2 text-xs text-gray-300">
              <div className="flex items-center space-x-1">
                <FaThumbsUp /> <span>{reviews[0].likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComment /> <span>{reviews[0].comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaAward className="text-yellow-500" /> <span>{reviews[0].awards}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Images in Row (for md+), Stacked on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.slice(1).map((review) => (
            <div
              key={review.id}
              className="relative bg-[#2a475e] rounded overflow-hidden shadow-lg"
            >
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold">{review.title}</h3>
                <div className="flex space-x-2 text-xs text-gray-300">
                  <div className="flex items-center space-x-1">
                    <FaThumbsUp /> <span>{review.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaComment /> <span>{review.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaAward className="text-yellow-500" /> <span>{review.awards}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotTab;
