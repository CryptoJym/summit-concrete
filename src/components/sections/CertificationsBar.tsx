import { certifications } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export function CertificationsBar() {
  return (
    <div className="w-full max-w-[960px] px-4 md:px-0 mt-16">
      <h5 className="text-sm font-bold uppercase tracking-widest text-asphalt mb-6 border-l-4 border-primary pl-4">
        Certified Execution
      </h5>
      <div className="border-y-2 border-asphalt grid grid-cols-2 md:grid-cols-4">
        {certifications.map((cert, i) => (
          <div
            key={cert.label}
            className={`h-32 flex flex-col items-center justify-center gap-2 p-4 grayscale hover:grayscale-0 hover:bg-primary transition-colors cursor-help group ${
              i < certifications.length - 1 ? "border-r border-asphalt" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-asphalt" : ""}`}
          >
            <MaterialIcon name={cert.icon} className="text-4xl group-hover:text-asphalt" />
            <span className="font-mono text-xs font-bold">{cert.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between text-xs font-mono text-rebar uppercase">
        <span>&copy; {new Date().getFullYear()} Summit Concrete</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
}
