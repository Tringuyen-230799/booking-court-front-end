import { cn } from "../../shared/utils/cn";
import Typography from "../typography";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md";
  className?: string;
}

const getVariantStyles = (
  variant: "primary" | "secondary" | "success" | "warning" | "error"
) => {
  const styles = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };
  return styles[variant];
};

const getSizeStyles = (size: "xs" | "sm" | "md") => {
  const styles = {
    xs: "px-1.5 py-0.5 text-xs",
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-sm",
  };
  return styles[size];
};

export default function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center flex-nowrap justify-center rounded font-bold uppercase tracking-wider",
        getVariantStyles(variant),
        getSizeStyles(size),
        className
      )}
    >
      <Typography as='div' className="text-nowrap font-bold" color="inherit" variant="action" size="sm">
        {children}
      </Typography>
    </div>
  );
}
