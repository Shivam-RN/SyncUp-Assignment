'use client'

import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { month: 'Sept', value: 30 },
  { month: 'Oct', value: 50 },
  { month: 'Nov', value: 65 },
  { month: 'Dec', value: 40 },
  { month: 'Jan', value: 55 },
  { month: 'Feb', value: 80 },
]

const data2 = [
  { month: 'Sept', value: 60 },
  { month: 'Oct', value: 40 },
  { month: 'Nov', value: 70 },
  { month: 'Dec', value: 55 },
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 65 },
]

export default function AnalyticsCard() {
  return (
    <div className="card mt-4 min-h-0">
  <div className="flex items-center justify-between mb-3">
    <h4 className="font-medium text-sm text-text-primary">Analytics</h4>
  </div>

  <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
    <span>Connections</span>
    <div className="flex gap-2">
      <button className="text-primary font-medium">1w</button>
      <button>1m</button>
      <button>3m</button>
    </div>
  </div>

  <div className="relative h-32 w-full min-w-0">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4F6EF7"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="bg-primary text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
        Analytics
      </div>
    </div>
  </div>
</div>
  )
}
