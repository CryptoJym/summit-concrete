import { projects } from "@/lib/content";
import { JobCard } from "@/components/ui/JobCard";
import { MaterialIcon } from "@/components/ui/Icons";

interface ProjectGridProps {
  activeFilter: string;
}

export function ProjectGrid({ activeFilter }: ProjectGridProps) {
  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex-1 lg:ml-80 p-6 lg:p-12 relative z-10">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-8 border-2 border-asphalt bg-white p-4 shadow-hard">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold uppercase">
            FILTER: {activeFilter.toUpperCase()}
          </span>
          <MaterialIcon name="tune" />
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
        {filtered.map((project) => (
          <JobCard key={project.id} {...project} />
        ))}
        {/* Skeleton Loading Card */}
        <div className="border-2 border-asphalt bg-white shadow-hard break-inside-avoid animate-pulse">
          <div className="aspect-[4/3] bg-rebar/20 border-b-2 border-asphalt" />
          <div className="p-4 bg-surface space-y-3">
            <div className="h-3 bg-rebar/20 w-3/4" />
            <div className="h-6 bg-rebar/20 w-full" />
            <div className="grid grid-cols-2 gap-px bg-rebar border border-rebar">
              <div className="bg-surface p-2 h-10" />
              <div className="bg-surface p-2 h-10" />
            </div>
            <div className="h-10 bg-rebar/20" />
          </div>
          <div className="p-4 border-t-2 border-asphalt">
            <span className="font-mono text-xs text-rebar animate-pulse">LOADING_DATA_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
