
import { FaComments, FaGamepad, FaBroadcastTower, FaWrench, FaMobileAlt, FaClock, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";

const features = [
  {
    icon: <FaComments size={40} />,
    title: "Steam Chat",
    description:
      "Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.",
  },
  {
    icon: <FaGamepad size={40} />,
    title: "Game Hubs",
    description:
      "Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.",
  },
  {
    icon: <FaBroadcastTower size={40} />,
    title: "Steam Broadcast",
    description:
      "Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.",
  },
  {
    icon: <FaWrench size={40} />,
    title: "Steam Workshop",
    description:
      "Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Available on Mobile",
    description:
      "Access Steam anywhere from your iOS or Android device with the Steam mobile app.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Early Access to Games",
    description:
      "Discover, play, and get involved with games as they evolve. Be the first to see what’s coming and become part of the process.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Multilingual",
    description:
      "Creating a global community is important to us, that's why our client supports 28 languages and counting.",
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: "Purchases Made Easy",
    description:
      "Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.",
  },
  {
    icon: <FaBroadcastTower size={40} /> ,
    title: "Controller Support",
    description:
      "Steam encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers.",
  },
];

const FeaturesSection = () => {
  return (
    <>
    <section className=" max-w-5xl mx-auto text-white py-16 px-6 md:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Features</h2>
        <p className="text-lg mt-3 text-gray-300">
          We are constantly working to bring new updates and features to Steam, such as:
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex cursor-pointer hover:shadow-sm shadow-amber-100 rounded-xl flex-col items-center text-center">
            <div className="bg-gray-700 rounded-full p-4 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="bg-[#0f172a] max-w-5xl mx-auto text-white py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
    {/* Left Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold">And so much more...</h2>
      <p className="text-gray-300 mt-2">
        Earn achievements, read reviews, explore custom recommendations, and more.
      </p>
    </div>

    {/* Right Content */}
    <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
      {/* Install Button */}
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg transition">
        INSTALL VAPOR <FaWindows size={20} />
      </button>

      {/* Available On Icons */}
      <div className="mt-3 text-gray-400 text-sm flex items-center gap-3">
        <span>Also available on:</span>
        <FaApple size={18} />
        <FaSteam size={18} />
        <FaGlobe size={18} />
      </div>
    </div>
  </section>
  </>
  );
};

export default FeaturesSection;
