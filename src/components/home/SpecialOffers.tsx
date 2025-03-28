import React from "react";

const offers = [
  {
    discount: "50%",
    image:
      "https://img.freepik.com/free-photo/front-view-family-playing-videogame_23-2150573819.jpg?t=st=1743155081~exp=1743158681~hmac=92138f9328949641f3ce7793966a8fd35455d69224b8221abe095e2bc0aaf3a8&w=1380", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://img.freepik.com/free-photo/epic-gamer-room-setup_23-2151948240.jpg?t=st=1743155141~exp=1743158741~hmac=57747d206ec4441172cb411d65d93dd5de7b1e53baf122dfa841c61bbfcae879&w=1380", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://img.freepik.com/free-photo/neon-gamer-setup_23-2151948243.jpg?t=st=1743155165~exp=1743158765~hmac=e226b43cbc03d950c3042d6bacb8295bd042e769582d61d50f149733ac1ccead&w=740", // Dummy Image
  },
  {
    discount: "50%",
    image:
      "https://img.freepik.com/free-photo/neon-gamer-setup_23-2151948243.jpg?t=st=1743155165~exp=1743158765~hmac=e226b43cbc03d950c3042d6bacb8295bd042e769582d61d50f149733ac1ccead&w=740", // Dummy Image
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
