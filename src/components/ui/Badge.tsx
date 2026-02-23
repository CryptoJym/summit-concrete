type BadgeVariant = "yellow" | "dark" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  yellow: "bg-primary text-asphalt border-asphalt",
  dark: "bg-asphalt text-primary border-asphalt",
  outline: "bg-transparent text-asphalt border-asphalt",
};

export function Badge({
  children,
  variant = "yellow",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block font-mono text-xs font-bold uppercase tracking-widest px-2 py-1 border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
