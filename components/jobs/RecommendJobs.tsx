import {
  Star,
  MapPin,
  Building2,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
  },
  {
    id: 2,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
  },
  {
    id: 3,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
  },
  {
    id: 4,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    time: "24 min. ago",
  },
];

function CompanyIcon() {
  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
      <div className="w-full h-full grid grid-cols-2 grid-rows-2">
        <div className="bg-pink-400" />
        <div className="bg-blue-400" />
        <div className="bg-green-400" />
        <div className="bg-yellow-400" />
      </div>
    </div>
  );
}

export default function RecommendedJobs() {
  return (
  <div className="card w-full">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-text-primary text-base">
        Recommended Jobs
      </h3>
      <button className="text-text-muted">
        <MoreHorizontal size={16} />
      </button>
    </div>

    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
      Today
    </p>

    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-[#EEEEEE] rounded-2xl p-4"
        >
          {/* Top Section */}
          <div className="flex items-start gap-3">
            <CompanyIcon />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text-primary truncate">
                {job.title}
              </p>

              <p className="text-xs text-text-secondary truncate">
                {job.company}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-text-muted">

                <div className="flex items-center gap-1">
                  <Star
                    size={10}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span>{job.rating} Trusted</span>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin size={10} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Building2 size={10} />
                  <span>{job.type}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 text-xs text-text-muted">
            <div className="flex items-center gap-1">
              <Star size={10} className="text-yellow-400 fill-yellow-400" />
              <span>{job.rating} Trusted</span>
            </div>
            <span>{job.time}</span>
          </div>

        </div>
      ))}
    </div>

    {/* Footer */}
    <button className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-primary transition-colors mt-4 w-full justify-center border-t border-gray-100 pt-4">
      View all posts <ArrowRight size={14} />
    </button>

  </div>
)
}
