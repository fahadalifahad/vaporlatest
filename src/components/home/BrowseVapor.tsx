export default function BrowseVapor() {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden mt-6">
      <h2 className="text-xl font-medium text-white mb-3">BROWSE VAPOR</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["NEW RELEASES", "SPECIALS", "FREE GAMES", "BY USER TAGS"].map((text, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 text-white font-semibold py-3 rounded-md w-full"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
