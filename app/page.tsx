import AnalyticsCard from "@/components/home/AnalyticsCard";
import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import ProfileCard from "@/components/home/ProfileCard";
import RightSidebar from "@/components/home/RightSidebar";
import StoriesCard from "@/components/home/StoriesCard";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

const posts = [
  {
    id: 1,
    author: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    time: "12 April at 09:28 PM",
    content:
      "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article",
    boldWords: ["ABC Company"],
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=700&h=400&fit=crop",
    likes: 3,
    hugs: 8,
    laughs: 1,
    comments: 25,
    shares: 231,
    saved: 24,
  },
  {
    id: 2,
    author: "Clara Kim",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    time: "12 April at 09:28 PM",
    content: "A Great Way To Generate All The Motivation You Need To Get Fit.",
    likes: 3,
    hugs: 8,
    laughs: 1,
    comments: 25,
    shares: 231,
    saved: 24,
  },
];

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <Topbar />

      {/* Main wrapper */}
      <main className="mt-15 md:ml-20 min-h-screen bg-page-bg">
        <div className="max-w-400 mx-auto py-6 px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr_400px] gap-6">

            {/* Left sidebar - hidden on mobile */}
            <div className="hidden lg:block space-y-4">
              <ProfileCard />
              <AnalyticsCard />
              <StoriesCard />
            </div>

            {/* Feed */}
            <div className="w-full max-w-175 mx-auto">
              <CreatePost />
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Right sidebar - hidden on mobile */}
            <div className="hidden lg:block">
              <RightSidebar />
            </div>

          </div>

        </div>
      </main>
    </>
  );
}