import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";
import { tv } from "tailwind-variants";

interface RadioBoxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "checked" | "type"
  > {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  customLabel?: (label: string) => React.ReactNode;
}

const radio = tv({
  base: "w-5 h-5 rounded-full border-2 relative flex items-center justify-center transition-colors cursor-pointer",
  variants: {
    color: {
      primary: "border-primary",
      secondary: "border-purple-500",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    checked: {
      true: "border-primary bg-primary/10",
      false: "border-gray-300 bg-transparent",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    checked: false,
  },
});

const RadioBox: React.FC<RadioBoxProps> = ({
  label,
  checked,
  onChange,
  className,
  color = "primary",
  size = "md",
  customLabel,
  ...other
}) => {
  return (
    <label className={cn("flex items-center gap-3 cursor-pointer group", className)}>
      <input
        {...other}
        type="radio"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={cn(
          radio({
            color,
            size,
            checked,
          })
        )}
      >
        {checked && (
          <span className="w-3 h-3 rounded-full bg-primary absolute left-1/2 -translate-x-[50%]"></span>
        )}
      </span>
      {customLabel && customLabel(label) ? (
        <Typography variant="action" size="sm" color="muted">
          {customLabel(label)}
        </Typography>
      ) : (
        <Typography variant="action" size="sm" color="muted">
          {label}
        </Typography>
      )}
    </label>
  );
};

export default RadioBox;