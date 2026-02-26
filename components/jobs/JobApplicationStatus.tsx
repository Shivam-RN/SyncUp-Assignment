'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const applications = [
  {
    id: 1,
    title: 'Jr. Front-end Developer',
    company: 'Microsoft',
    logo: '🪟',
    appliedOn: '08/08/2023',
    status: 'In-progress',
  },
  {
    id: 2,
    title: 'Senior Back-end Developer',
    company: 'Google',
    logo: '🔍',
    appliedOn: '24/07/2023',
    status: 'Applied',
  },
  {
    id: 3,
    title: 'UI/UX designer',
    company: 'Meta',
    logo: '♾️',
    appliedOn: '01/05/2023',
    status: 'Offered',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Meta',
    logo: '♾️',
    appliedOn: '23/05/2024',
    status: 'Rejected',
  },
]

const statusStyles: Record<string, string> = {
  'In-progress': 'bg-yellow-50 text-yellow-600 border border-yellow-200',
  'Applied': 'bg-purple-50 text-purple-600 border border-purple-200',
  'Offered': 'bg-green-50 text-green-600 border border-green-200',
  'Rejected': 'bg-red-50 text-red-600 border border-red-200',
}

const companyLogos: Record<string, string> = {
  Microsoft: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/48px-Microsoft_logo.svg.png',
  Google: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png',
  Meta: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/120px-Meta_Platforms_Inc._logo.svg.png',
}

export default function JobApplicationStatus() {
  const [showNew, setShowNew] = useState(true)
  const [showInProgress, setShowInProgress] = useState(true)
  const [showPending, setShowPending] = useState(false)

  return (
  <div className="card mt-4">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">

      <h3 className="font-semibold text-text-primary text-base">
        Job Application Status
      </h3>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-4">

          {/* New */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              New
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showNew ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowNew(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showNew ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

          {/* In Progress */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              In Progress
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showInProgress ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowInProgress(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showInProgress ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

          {/* Pending */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs sm:text-sm text-text-secondary">
              Pending Task
            </span>
            <div
              className={`w-9 h-5 rounded-full relative transition-colors ${
                showPending ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => setShowPending(v => !v)}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  showPending ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>

        </div>

        {/* Sort Button */}
        <button className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-text-secondary hover:bg-gray-50">
          Sort By <ChevronDown size={14} />
        </button>

      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-150 w-full">

        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-xs font-semibold text-text-secondary pb-3 pr-4">
              Job title
            </th>
            <th className="text-left text-xs font-semibold text-text-secondary pb-3 pr-4">
              Company
            </th>
            <th className="text-left text-xs font-semibold text-text-secondary pb-3 pr-4">
              Applied on
            </th>
            <th className="text-left text-xs font-semibold text-text-secondary pb-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr
              key={app.id}
              className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
            >
              <td className="py-3 pr-4">
                <span className="text-sm font-medium text-text-primary">
                  {app.title}
                </span>
              </td>

              <td className="py-3 pr-4">
                <div className="flex items-center gap-2">
                  <img
                    src={companyLogos[app.company]}
                    alt={app.company}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-text-secondary">
                    {app.company}
                  </span>
                </div>
              </td>

              <td className="py-3 pr-4">
                <span className="text-sm text-text-muted">
                  {app.appliedOn}
                </span>
              </td>

              <td className="py-3">
                <span
                  className={clsx(
                    "text-xs font-medium px-3 py-1 rounded-full",
                    statusStyles[app.status]
                  )}
                >
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>
)
}
