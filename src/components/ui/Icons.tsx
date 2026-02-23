interface MaterialIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function MaterialIcon({
  name,
  className = "",
  size,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={size ? { fontSize: `${size}px` } : undefined}
    >
      {name}
    </span>
  );
}
