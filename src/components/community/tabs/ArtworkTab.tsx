

const posts = [
  {
    id: 1,
    title: "National Geographic at 2AM",
    game: "HELLDIVERS™ 2",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    likes: 249,
    comments: 10,
    awards: 11,
  },
  {
    id: 2,
    title: "Counter-Strike 2",
    game: "Counter-Strike 2",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    likes: 406,
    comments: 12,
    awards: 49,
  },
  {
    id: 3,
    title: "REPO gameplay:",
    game: "R.E.P.O.",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    likes: 288,
    comments: 9,
    awards: 6,
  },
];

const post = {
    id: 1,
    title: "Baldur's Gate 3",
    game: "Baldur's Gate 3",
    thumbnail: "https://neonwalls.pk/cdn/shop/files/WhatsApp_Image_2024-08-19_at_18.45.41.webp?v=1724243247",
    likes: 201,
    comments: 6,
    awards: 35,
  };

const PostCard = ({ post, className }: { post: any; className?: string }) => (
  <div className={`relative bg-[#1b1b1b] rounded overflow-hidden shadow-lg flex flex-col ${className}`}>
    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
    <div className="p-2 bg-black bg-opacity-70">
      <h3 className="text-sm font-semibold">{post.title}</h3>
      <p className="text-xs text-gray-400">{post.game}</p>
      <div className="flex text-xs text-gray-400 mt-2">
        <span className="mr-2">🏆 {post.awards}</span>
        <span className="mr-2">💬 {post.comments}</span>
        <span>👍 {post.likes}</span>
      </div>
    </div>
  </div>
);

const ArtworkTab = () => {
  return (
    <>
    <div className="w-full mx-auto p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Left Side - Takes 2/3 width */}
        <div className="md:col-span-2 h-full">
          <PostCard post={posts[0]} className="h-full" />
        </div>

        {/* Right Side - Stacks 2 items */}
        <div className="flex flex-col gap-4 h-full">
          <PostCard post={posts[1]} className="h-1/2" />
          <PostCard post={posts[2]} className="h-1/2" />
        </div>
      </div>
    </div>



<div className="w-full mx-auto p-4 text-white">
<div className="bg-[#1b1b1b] rounded overflow-hidden shadow-lg">
  {/* Post Image */}
  <img src={post.thumbnail} alt={post.title} className="w-full h-76 object-cover" />

  {/* Post Details */}
  <div className="p-4 bg-black bg-opacity-70">
    <h3 className="text-lg font-semibold hover:underline cursor-pointer">{post.title}</h3>
    <p className="text-sm text-gray-400 hover:underline cursor-pointer">{post.game}</p>

    {/* Stats Section */}
    <div className="flex text-xs text-gray-400 mt-2 items-center space-x-3">
      <span>🏆 {post.awards}</span>
      <span>💬 {post.comments}</span>
      <span>👍 {post.likes}</span>
    </div>
  </div>
</div>
</div>
</>
  );
};

export default ArtworkTab;
