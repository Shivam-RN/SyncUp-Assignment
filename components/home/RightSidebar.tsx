import { Star } from 'lucide-react'

export default function RightSidebar() {
  return (
    <div className="space-y-4">
      {/* Hire faster banner */}
      <div className="card">
        <h4 className="font-semibold text-text-primary text-lg mb-1">Hire faster with SyncUp!</h4>
        <p className="text-sm text-text-secondary mb-3">Network without limits and hire like a pro!</p>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
            alt="Hire faster"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 right-2 bg-gray-100 text-[10px] text-black px-2 py-0.5 rounded-full shadow">30% OFF</span>
        </div>
      </div>

      {/* Suggestions */}
      <div className="card">
        <h4 className="font-semibold text-primary text-lg mb-1">Suggestions</h4>
        <p className="text-sm text-text-secondary mb-3">Below courses are suggested based on your current skills & curated to help you stay updated with the current market trends.</p>
        
        {/* Course image */}
        <div className="rounded-xl overflow-hidden mb-3">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=180&fit=crop"
            alt="Course"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Course info */}
        <div>
          <h5 className="font-semibold text-text-primary text-lg">Figma: Basics</h5>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-text-secondary">Tyler Hooks</span>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium text-text-primary">4.2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
