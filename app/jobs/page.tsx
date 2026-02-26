import StatCard from '@/components/jobs/StatCard'
import VacancyStats from '@/components/jobs/VacancyStats'
import JobApplicationStatus from '@/components/jobs/JobApplicationStatus'
import { ChevronDown } from 'lucide-react'
import RecommendedJobs from '@/components/jobs/RecommendJobs'
import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'

export default function JobsPage() {
  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="mt-15 md:ml-20 min-h-screen bg-page-bg">
        <div className="max-w-400 mx-auto px-4 md:px-6 py-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-text-primary flex items-center gap-2">
                Welcome back, Julie 👋
              </h1>
              <p className="text-text-muted text-sm mt-1">
                Here&apos;s what you need to focus on today
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50 transition">
                Last 30 Days <ChevronDown size={14} />
              </button>

              <button className="btn-primary px-4 py-2 text-sm font-semibold">
                Search Job
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            <StatCard title="Active Jobs" value="03" change="+5 from yesterday" color="blue" />
            <StatCard title="Jobs In Progress" value="03" change="+5 from yesterday" color="orange" />
            <StatCard title="Shortlisted" value="03" change="+5 from yesterday" color="green" />
            <StatCard title="On Hold" value="03" change="+5 from yesterday" color="red" />
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">

            <div className="min-w-0 space-y-6">
              <VacancyStats />
              <JobApplicationStatus />
            </div>

            <div className="min-w-0">
              <RecommendedJobs />
            </div>

          </div>

        </div>
      </main>
    </>
  )
}