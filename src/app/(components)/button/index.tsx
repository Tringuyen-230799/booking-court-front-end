"use client";
import { ButtonHTMLAttributes } from "react";
import Typography, { TypographyProps } from "../typography";
import Icon, { IconProps } from "../Icon";
import { cn } from "shared/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  leadingIcon?: IconProps["icon"];
  endingIcon?: IconProps["icon"];
}

const getVariantStyles = (
  variant: "primary" | "secondary" | "outline" | "link",
) => {
  const styles = {
    primary: "bg-primary text-[#0d1b12] shadow-sm font-bold",
    secondary: "bg-white text-[#0d1b12] hover:bg-[#d5eadd] ",
    outline:
      "border-1 border-neutral-300 text-secondary hover:bg-white",
    link: "bg-transparent text-primary underline px-0 hover:text-[#0d1b12] shadow-none !p-0",
  };
  return styles[variant];
};

const getSizeStyles = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
  const styles = {
    xs: "py-2 px-3 text-xs min-w-[64px]",
    sm: "py-2 px-4 text-sm min-w-[72px]",
    md: "py-3 px-5 text-sm min-w-[84px]",
    lg: "py-4 px-6 text-base min-w-[96px]",
    xl: "py-5 px-10 text-lg min-w-[112px]",
  };
  return styles[size];
};

const getIconSize = (
  buttonSize: "xs" | "sm" | "md" | "lg" | "xl",
): IconProps["size"] => {
  const iconSizeMap = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  } as const;
  return iconSizeMap[buttonSize];
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  onClick,
  leadingIcon,
  endingIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold leading-normal tracking-[0.015em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);
  const iconSize = getIconSize(size);

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles,
        variantStyles,
        fullWidth && "w-full",
        className,
        "items-center",
        "flex",
      )}
      onClick={() => onClick && onClick()}
      {...props}
    >
      {leadingIcon && (
        <Icon
          icon={leadingIcon}
          size={iconSize}
          variant="inherit"
          className="mr-1"
        />
      )}
      <Typography
        variant="action"
        size={sizeStyles as TypographyProps["size"]}
        className="font-bold"
        color="inherit"
      >
        {children}
      </Typography>
      {endingIcon && (
        <Icon
          icon={endingIcon}
          size={iconSize}
          variant="inherit"
          className="ml-1"
        />
      )}
    </button>
  );
}
