import { MoreHorizontal, UserPlus, MessageCircle } from 'lucide-react'

const stories = [
  { id: 1, name: 'Rakesh Sharma', role: 'Front-end Developer', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: 'Rakesh Sharma', role: 'Front-end Developer', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 3, name: 'Rakesh Sharma', role: 'Front-end Developer', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
]

export default function StoriesCard() {
  return (
    <div className="card mt-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-sm text-text-primary">Sosmed Stories</h4>
        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id}>
            <div className="flex items-center gap-3 mb-2">
              <img src={story.avatar} alt={story.name} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-text-primary leading-tight">{story.name}</p>
                <p className="text-xs text-text-muted">{story.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors flex-1 justify-center">
                <UserPlus size={12} />
                Follow
              </button>
              <button className="flex items-center gap-1.5 border border-gray-200 text-text-secondary text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors flex-1 justify-center">
                <MessageCircle size={12} />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
