import { Send } from 'lucide-react'

export default function CreatePost() {
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="You"
          className="w-9 h-9 rounded-full object-contain shrink-0"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 text-sm text-text-secondary placeholder-text-muted bg-transparent focus:outline-none"
        />
        <button className="text-primary hover:text-primary-dark transition-colors">
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}
