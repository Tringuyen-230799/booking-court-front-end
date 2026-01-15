import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";
import { tv } from "tailwind-variants";

interface RatingOption {
  label: string;
  value: string | number;
  customLabel?: (label: string) => React.ReactNode;
}

interface GroupRadioBoxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value"
  > {
  options: RatingOption[];
  selectedValue: string | number;
  onChange: (value: string | number) => void;
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
  ...other
}) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option, index) => (
        <label
          key={option.value?.toString() + index}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            {...other}
            type="radio"
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value?.toString())}
            className="sr-only"
          />
          <span
            className={cn(
              radio({
                color,
                size,
                checked: selectedValue === option.value,
              })
            )}
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
