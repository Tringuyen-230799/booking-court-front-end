"use client";
import { ButtonHTMLAttributes } from "react";
import Typography, { TypographyProps } from "../typography";
import { cn } from "shared/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const getVariantStyles = (
  variant: "primary" | "secondary" | "outline" | "link"
) => {
  const styles = {
    primary: "bg-primary text-[#0d1b12] shadow-sm font-bold",
    secondary: "bg-white text-[#0d1b12] hover:bg-[#d5eadd] ",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-[#0d1b12]",
    link: "bg-transparent text-primary underline px-0 hover:text-[#0d1b12] shadow-none !p-0",
  };
  return styles[variant];
};

const getSizeStyles = (size: "xs" | "sm" | "md" | "lg") => {
  const styles = {
    xs: "h-8 px-3 text-xs min-w-[64px]",
    sm: "h-9 px-4 text-sm min-w-[72px]",
    md: "h-10 px-5 text-sm min-w-[84px]",
    lg: "h-12 px-8 text-base min-w-[96px]",
  };
  return styles[size];
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold leading-normal tracking-[0.015em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles,
        variantStyles,
        fullWidth && "w-full",
        className
      )}
      onClick={() => onClick && onClick()}
      {...props}
    >
      <Typography
        variant="action"
        size={sizeStyles as TypographyProps["size"]}
        className="font-bold"
        color="inherit"
      >
        {children}
      </Typography>
    </button>
  );
}
