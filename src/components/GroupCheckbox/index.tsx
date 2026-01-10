import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";

interface CheckboxOption {
  label: string;
  value: string;
  count?: number;
  customLabel?: (label?: string) => React.ReactNode;
}

interface GroupCheckboxProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
  className?: string;
}

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({
  options,
  selectedValues,
  onChange,
  className
}) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            checked={selectedValues.includes(option.value)}
            className="w-4 cursor-pointer h-4 rounded border-gray-300 focus:ring-primary accent-primary bg-transparent"
            type="checkbox"
            onChange={() => onChange(option.value)}
          />
          {option.customLabel && option.customLabel(option.label) ? (
            option.customLabel(option.label)
          ) : (
            <Typography variant="action" size="sm" color="muted">
              {option.label}
            </Typography>
          )}
          {option.count !== undefined && (
            <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              <Typography variant="action" size="sm" color="muted">
                {option.count}
              </Typography>
            </span>
          )}
        </label>
      ))}
    </div>
  );
};

export default GroupCheckbox;
