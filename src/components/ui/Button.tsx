import Link from "next/link";

type ButtonVariant = "primary" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary border-2 border-asphalt text-asphalt shadow-hard hover:shadow-hard-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-x-0 active:translate-y-0 active:shadow-none",
  dark: "bg-asphalt border-2 border-asphalt text-primary hover:text-white shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  outline:
    "bg-transparent border-2 border-asphalt text-asphalt hover:bg-asphalt hover:text-primary hover:shadow-hard hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-6 text-sm",
  md: "h-12 px-8 text-base",
  lg: "h-16 px-10 text-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all duration-0 cursor-pointer select-none";
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
