import { Pencil } from 'lucide-react'

export default function ProfileCard() {
  return (
    <div className="card">
      {/* Avatar + name */}
      <div className="flex flex-col items-center text-center pb-4 border-b border-gray-100">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 ring-blue-50">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Minnie Armstrong"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-text-primary text-base">Minnie Armstrong</h3>
        <p className="text-text-secondary text-sm mt-0.5">UI / UX Designer</p>
      </div>

      {/* Progress */}
      <div className="pt-4 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary">75% Completed</span>
          <button className="flex items-center gap-1 text-xs text-primary font-medium">
            <Pencil size={11} />
            Update profile
          </button>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-primary to-green-400 rounded-full" style={{ width: '75%' }} />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 pt-4">
        <button className="btn-outline flex-1 text-xs py-2">View Full Profile</button>
        <button className="btn-outline flex-1 text-xs py-2">Share Profile</button>
      </div>
    </div>
  )
}
