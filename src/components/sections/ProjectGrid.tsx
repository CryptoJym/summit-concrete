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
      </div>

      {/* Load More */}
      <div className="mt-16 flex justify-center pb-8">
        <button className="bg-transparent border-2 border-asphalt px-12 py-4 font-display text-lg font-bold tracking-wide hover:bg-asphalt hover:text-primary hover:shadow-hard hover:-translate-y-1 transition-all uppercase flex items-center gap-2">
          <MaterialIcon name="refresh" className="animate-spin" />
          Load More Entries
        </button>
      </div>
    </div>
  );
}
