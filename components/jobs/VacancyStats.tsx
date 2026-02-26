'use client'

import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'
import { ChevronDown } from 'lucide-react'

const data = [
  { month: 'Jan', applications: 620, interviews: 480, rejected: 0 },
  { month: 'Feb', applications: 580, interviews: 350, rejected: 0 },
  { month: 'Mar', applications: 700, interviews: 420, rejected: 0 },
  { month: 'Apr', applications: 830, interviews: 530, rejected: 0 },
  { month: 'May', applications: 760, interviews: 470, rejected: 0 },
  { month: 'Jun', applications: 640, interviews: 530, rejected: 0 },
  { month: 'Jul', applications: 580, interviews: 490, rejected: 0 },
  { month: 'Aug', applications: 620, interviews: 540, rejected: 0 },
  { month: 'Sep', applications: 660, interviews: 400, rejected: 0 },
  { month: 'Oct', applications: 700, interviews: 420, rejected: 0 },
  { month: 'Nov', applications: 680, interviews: 380, rejected: 0 },
  { month: 'Dec', applications: 640, interviews: 360, rejected: 0 },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number; name: string }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-xs">
        <p className="text-text-muted mb-2">August 22, 2025</p>
        <div className="flex gap-4">
          {payload.map((entry, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.name === 'applications' ? '#4F6EF7' : '#22C55E' }} />
              <span className="font-bold text-sm text-text-primary">{entry.value}</span>
              <span className="text-text-muted capitalize">{entry.name === 'applications' ? 'Application Sent' : 'Interviews'}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

export default function VacancyStats() {
  const [showApplications, setShowApplications] = useState(true)
  const [showInterviews, setShowInterviews] = useState(true)
  const [showRejected, setShowRejected] = useState(false)

  return (
  <div className="card">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">

      <h3 className="font-semibold text-text-primary text-base">
        Vacancy Stats
      </h3>

      {/* Toggles + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Application */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              Application Sent
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showApplications ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowApplications(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showApplications ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

          {/* Interviews */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              Interviews
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showInterviews ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowInterviews(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showInterviews ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

          {/* Rejected */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              Rejected
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showRejected ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowRejected(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showRejected ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

        </div>

        {/* Filter button */}
        <button className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-text-secondary hover:bg-gray-50">
          This Year <ChevronDown size={14} />
        </button>

      </div>
    </div>

    {/* Chart */}
    <div className="h-56 sm:h-64 lg:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
          />

          <Tooltip content={<CustomTooltip />} />

          {showApplications && (
            <Line
              type="monotone"
              dataKey="applications"
              stroke="#4F6EF7"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#4F6EF7" }}
            />
          )}

          {showInterviews && (
            <Line
              type="monotone"
              dataKey="interviews"
              stroke="#22C55E"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#22C55E" }}
            />
          )}

          {showRejected && (
            <Line
              type="monotone"
              dataKey="rejected"
              stroke="#EF4444"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#EF4444" }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Legend */}
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-xs text-text-secondary">
          Application Sent
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-xs text-text-secondary">
          Interviews
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <span className="text-xs text-text-secondary">
          Rejected
        </span>
      </div>
    </div>

  </div>
)
}
