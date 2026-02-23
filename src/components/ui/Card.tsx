interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`border-2 border-asphalt bg-white shadow-hard ${
        hover
          ? "transition-all duration-100 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-hard-hover"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
