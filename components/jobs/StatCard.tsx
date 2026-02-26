import { TrendingUp } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  color: 'blue' | 'orange' | 'green' | 'red'
}

const barColors = {
  blue: ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8'],
  orange: ['#FDE68A', '#FCD34D', '#F59E0B', '#D97706', '#B45309'],
  green: ['#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D'],
  red: ['#FCA5A5', '#F87171', '#EF4444', '#DC2626', '#B91C1C'],
}

function MiniBarChart({ color }: { color: keyof typeof barColors }) {
  const colors = barColors[color]
  const heights = [40, 60, 80, 55, 70, 45, 85, 65]
  return (
    <div className="flex items-end gap-0.5 h-10">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-sm"
          style={{
            height: `${h}%`,
            backgroundColor: colors[i % colors.length],
            opacity: 0.8 + (i / heights.length) * 0.2
          }}
        />
      ))}
    </div>
  )
}

export default function StatCard({ title, value, change, color }: StatCardProps) {
  return (
    <div className="card flex-1 min-h-38 flex items-center">
      <div className="flex items-start justify-between w-full">
        <div>
          <p className="text-lg font-semibold text-black mb-1">{title}</p>
          <p className="text-2xl font-bold text-text-primary">{value}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp size={12} className="text-green-500" />
            <span className="text-xs text-text-muted">{change}</span>
          </div>
        </div>
      </div>
      <div className='relative top-5 right-5'>
        <MiniBarChart color={color} />
      </div>
    </div>
  )
}
