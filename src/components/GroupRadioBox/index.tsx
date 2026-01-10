import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";

interface RatingOption {
  label: string;
  value: string;
  customLabel?: (label: string) => React.ReactNode;
}

interface GroupRadioBoxProps {
  options: RatingOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const GroupRadioBox: React.FC<GroupRadioBoxProps> = ({
  options,
  selectedValue,
  onChange,
  className,
}) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            className="w-4 h-4 border-gray-300 text-primary focus:ring-primary bg-transparent"
            name="rating"
            type="radio"
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />

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
