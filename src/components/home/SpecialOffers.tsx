import React from "react";

const offers = [
  {
    discount: "50%",
    image:
      "https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg", // Dummy Image
  },
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="p-2 bg-[#131414] text-white mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Special Offers</h2>
        <a
          href="#"
          className="text-blue-500 font-medium text-sm hover:underline"
        >
          See all
        </a>
      </div>

      {/* Grid Layout with Responsive Columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={offer.image}
              alt="Offer"
              className="w-full h-44 object-cover opacity-70"
            />
            {/* Discount Badge */}
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {offer.discount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};




export default SpecialOffers;
