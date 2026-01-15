import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";
import { tv } from "tailwind-variants";

interface RatingOption {
  label: string;
  value: string;
  customLabel?: (label: string) => React.ReactNode;
}

interface GroupRadioBoxProps{
  options: RatingOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
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

const GroupRadioBox: React.FC<GroupRadioBoxProps> = ({
  options,
  selectedValue,
  onChange,
  className,
  color = "primary",
  size = "md",
}) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option, index) => (
        <label
          key={option.value + index}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            type="radio"
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
            name="name"
          />
          <span
            className={cn(radio({
              color,
              size,
              checked: selectedValue === option.value,
            }))}
          >
            {selectedValue === option.value && (
              <span className="w-3 h-3 rounded-full bg-primary absolute left-1/2 -translate-x-[50%]"></span>
            )}
          </span>
          {option.customLabel && option.customLabel(option.label) ? (
            <Typography variant="action" size="sm" color="muted">
              {option.customLabel(option.label)}
            </Typography>
          ) : (
            <Typography variant="action" size="sm" color="muted">
              {option.label}
            </Typography>
          )}
        </label>
      ))}
    </div>
  );
};

export default GroupRadioBox;
