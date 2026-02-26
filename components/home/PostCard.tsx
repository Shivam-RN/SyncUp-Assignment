import {
  MoreHorizontal,
  ThumbsUp,
  Laugh,
  FileText,
  Share2,
  Bookmark,
  Paperclip,
  Smile,
  Image as ImageIcon,
} from "lucide-react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  boldWords?: string[];
  likes: number;
  hugs: number;
  laughs: number;
  comments: number;
  shares: number;
  saved: number;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const renderContent = (text: string, boldWords?: string[]) => {
    if (!boldWords || boldWords.length === 0) return text;

    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    boldWords.forEach((word) => {
      const idx = remaining.indexOf(word);
      if (idx === -1) return;

      parts.push(remaining.slice(0, idx));
      parts.push(
        <strong key={keyIdx++} className="font-semibold text-text-primary">
          {word}
        </strong>
      );

      remaining = remaining.slice(idx + word.length);
    });

    parts.push(remaining);
    return parts;
  };

  return (
    <div className="card mt-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.author}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-text-primary">
              {post.author}
            </p>
            <p className="text-xs text-text-muted">{post.time}</p>
          </div>
        </div>

        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-text-secondary leading-relaxed mb-3">
        {renderContent(post.content, post.boldWords)}
      </p>

      {/* Image */}
      {post.image && (
        <div className="rounded-xl overflow-hidden mb-3 bg-gray-100">
          <img
            src={post.image}
            alt="Post"
            className="w-full aspect-video object-cover"
          />
        </div>
      )}

      {/* Reactions */}
      <div className="flex items-center justify-between py-2 border-t border-gray-100 gap-2 flex-wrap">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors">
            <ThumbsUp size={15} />
            <span className="text-xs">{post.likes}</span>
          </button>

          <button className="flex items-center gap-1.5 text-text-muted hover:text-orange-400 transition-colors">
            <Smile size={15} />
            <span className="text-xs">{post.hugs}</span>
          </button>

          <button className="flex items-center gap-1.5 text-text-muted hover:text-yellow-400 transition-colors">
            <Laugh size={15} />
            <span className="text-xs">{post.laughs}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-text-muted text-xs">
          <button className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap">
            <FileText size={13} />
            {post.comments} Comments
          </button>

          <button className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap">
            <Share2 size={13} />
            {post.shares} Shares
          </button>

          <button className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap">
            <Bookmark size={13} />
            {post.saved} Saved
          </button>
        </div>
      </div>

      {/* Comment input */}
      <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="You"
          className="w-7 h-7 rounded-full object-cover shrink-0"
        />

        <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
          <input
            type="text"
            placeholder="Write your comment..."
            className="flex-1 text-xs text-text-secondary placeholder-text-muted bg-transparent focus:outline-none"
          />

          <div className="flex items-center gap-1.5 text-text-muted">
            <button className="hover:text-primary transition-colors">
              <Paperclip size={13} />
            </button>

            <button className="hover:text-primary transition-colors">
              <Smile size={13} />
            </button>

            <button className="hover:text-primary transition-colors">
              <ImageIcon size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}