import { useState } from "react";
import { FaPlay } from "react-icons/fa";

type Stream = {
  id: number;
  title: string;
  viewers: string;
  streamer: string;
  thumbnail: string;
  videoUrl: string;
};

const liveStreams: Stream[] = [
  {
    id: 1,
    title: "Dune: Awakening",
    viewers: "5,422 viewers",
    streamer: "Dopamine",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    videoUrl: "/about.mp4",
  },
  {
    id: 2,
    title: "FragPunk",
    viewers: "1,438 viewers",
    streamer: "DouyuTV - Faker",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    videoUrl:
      "https://videocdn.cdnpk.net/videos/59671a15-035a-4b13-9531-818f65b8fcc9/horizontal/previews/clear/large.mp4?token=exp=1742967948~hmac=3d799ddd72c515c3d1d59140b54553f02642a85aeea2282271270a690c3116af",
  },
  {
    id: 3,
    title: "Cities: Skylines",
    viewers: "1,269 viewers",
    streamer: "livecontentsteam10",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    videoUrl: "/about.mp4",
  },
  {
    id: 4,
    title: "Nordhold",
    viewers: "742 viewers",
    streamer: "Lomaster",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    videoUrl:
      "https://videocdn.cdnpk.net/videos/59671a15-035a-4b13-9531-818f65b8fcc9/horizontal/previews/clear/large.mp4?token=exp=1742967948~hmac=3d799ddd72c515c3d1d59140b54553f02642a85aeea2282271270a690c3116af",
  },
];

const LiveStreamsTab = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlaying(id);
  };

  return (
    <div className="w-full mx-auto p-2 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {liveStreams.map((stream) => (
          <div key={stream.id} className="relative bg-[#2a475e] rounded overflow-hidden shadow-lg">
            {playing === stream.id ? (
              <video
                src={stream.videoUrl}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                controls
              />
            ) : (
              <div className="relative cursor-pointer" onClick={() => handlePlay(stream.id)}>
                <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            )}

            {/* Stream Info */}
            <div className="p-2 bg-black bg-opacity-70">
              <h3 className="text-sm font-semibold">{stream.title}</h3>
              <p className="text-xs text-gray-400">{stream.viewers}</p>
              <p className="text-xs text-gray-500">{stream.streamer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveStreamsTab;
