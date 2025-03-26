
const games = [
  {
    id: 1,
    title: "Spirit Reforged",
    category: "tModLoader",
    thumbnail:
      "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
  },
  {
    id: 2,
    title: "Stelliferous",
    category: "Garry's Mod",
    thumbnail:
      "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
  },
  {
    id: 3,
    title: "[Time Variation] Alone",
    category: "Wallpaper Engine",
    thumbnail:
      "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
  },
];

const WorkshopTab = () => {
  return (
    <div className="w-full mx-auto p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`relative bg-[#1b1b1b] rounded overflow-hidden shadow-lg ${
              index === 2 ? "md:col-span-2" : ""
            }`}
          >
            <img src={game.thumbnail} alt={game.title} className="w-full h-60 object-cover" />
            <div className="p-2 bg-black bg-opacity-70">
              <h3 className="text-sm font-semibold">{game.title}</h3>
              <p className="text-xs text-gray-400">{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopTab;
