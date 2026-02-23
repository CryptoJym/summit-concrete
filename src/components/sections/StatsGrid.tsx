import { statsGrid } from "@/lib/content";
import { StatCard } from "@/components/ui/StatCard";

export function StatsGrid() {
  return (
    <section className="bg-surface border-b-2 border-asphalt">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x-2 divide-asphalt border-b-2 border-asphalt">
        {statsGrid.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
