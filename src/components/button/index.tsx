'use client';
import { ButtonHTMLAttributes } from "react";
import Typography from "../typography";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const getVariantStyles = (variant: "primary" | "secondary" | "outline") => {
  const styles = {
    primary: "bg-primary text-[#0d1b12] shadow-sm",
    secondary:
      "bg-secondary text-[#0d1b12] hover:bg-[#d5eadd] ",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-[#0d1b12]",
  };
  return styles[variant];
};

export default function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 -4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = getVariantStyles(variant);
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${widthStyles} ${className}`}
      onClick={() => onClick && onClick()}
      {...props}
    >
      <Typography variant="action" size="md">
        {children}
      </Typography>
    </button>
  );
}
