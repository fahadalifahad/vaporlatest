import { FaAngleRight } from "react-icons/fa";
const HeroContentSupport = () => {
    const menuItems = [
        "Games, Software, etc.",
        "Purchases",
        "My Account",
        "Trading, Gifting, Market and Steam Points",
        "Steam Client",
        "Steam Community",
        "Steam Hardware",
      ];
  return (
    <>
    <section className=" max-w-6xl mx-auto text-white py-10 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold">Vapor Support</h2>
      <p className="text-lg text-blue-400 mt-1">
        What do you need help with, <span className="font-semibold">Account Name</span>
      </p>

      {/* Support Box */}
      <div className="border border-yellow-500 mt-6 p-6 md:p-2 bg-[#0d2a45]">
        <h3 className="text-blue-400 text-sm font-semibold">
          HAVING TROUBLE ACCESSING A STEAM COMMUNITY FEATURE?
        </h3>
        <p className="text-gray-300 text-xs mt-2">
          New accounts are limited from using all of Steam’s community features. You’ll have access
          to all of Steam’s features once you’ve spent <span className="font-semibold text-xs">$5.00 USD</span> in the Steam store or
          added <span className="font-semibold text-xs">$5.00 USD</span> to your Steam Wallet. Some of the features that you won't be
          able to access are:
        </p>

        {/* Feature List */}
        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1 text-xs">
          <li>Adding friends on Steam</li>
          <li>Buying or Selling items on the Steam Community Market</li>
          <li>Creating a Group on Steam Community</li>
          <li>Creating user reviews or rating artwork, screenshots, workshop content, or Greenlight submissions</li>
          <li>Using Friends chat in your Browser or on a Mobile device</li>
        </ul>

        {/* Additional Info */}
        <p className="text-blue-400 mt-4 font-semibold text-sm">Additional info...</p>

        {/* Progress Bar */}
        <div className="mt-3 text-xs">
          <p className="text-gray-300">Amount Spent on Steam: <span className="text-white">$0.00 / $5.00 USD</span></p>
          <div className="w-full bg-gray-700 rounded-lg h-2 mt-1">
            <div className="bg-blue-500 h-2 rounded-lg" style={{ width: "0%" }}></div>
          </div>
        </div>
      </div>
    </section>

<section className=" text-white max-w-6xl mx-auto py-10 md:px-16 px-6 flex flex-col items-center">
{/* Support Menu */}
<div className="w-full">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="flex justify-between items-center bg-[#3a4a5a] hover:bg-[#4a5a6a] p-4 my-1 rounded cursor-pointer transition"
    >
      <span>{item}</span>
      <FaAngleRight className="text-gray-300" />
    </div>
  ))}
</div>

{/* Search Input */}
<div className="w-full max-w-2xl mt-6">
  <input
    type="text"
    placeholder="Search issues, features, and games"
    className="w-full bg-[#2d3a4a] text-gray-300 italic py-3 px-4 rounded outline-none border border-gray-500 focus:border-blue-400"
  />
</div>
</section>
</>

  );
};

export default HeroContentSupport;
