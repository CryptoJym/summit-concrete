import Link from "next/link";
import { MaterialIcon } from "./Icons";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  type: "metric" | "action";
  href?: string;
}

export function StatCard({
  label,
  value,
  description,
  type,
  href,
}: StatCardProps) {
  const content = (
    <>
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs font-bold opacity-60">{label}</span>
        <MaterialIcon
          name={type === "action" ? "arrow_forward" : "arrow_outward"}
          className="group-hover:rotate-45 transition-transform duration-300"
        />
      </div>
      <h3 className={`font-bold mb-2 ${type === "action" ? "text-3xl" : "text-4xl"}`}>
        {value}
      </h3>
      <p className="font-mono text-sm opacity-70 uppercase">{description}</p>
    </>
  );

  const baseClasses = `p-8 group cursor-pointer transition-colors duration-0 ${
    type === "action"
      ? "bg-asphalt text-cured hover:bg-primary hover:text-asphalt"
      : "hover:bg-white"
  }`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
