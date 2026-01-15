import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";

interface CheckboxOption {
  label: string;
  value: string | number;
  count?: number;
  customLabel?: (label?: string) => React.ReactNode;
}

interface GroupCheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value"
  > {
  options: CheckboxOption[];
  selectedValues: string[] | number[] | undefined;
  onChange: (value: string[] | number[]) => void;
  className?: string;
}

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({
  options,
  selectedValues,
  onChange,
  className,
  ...other
}) => {
  const setValues = new Set<string>(
    selectedValues?.map((value: string | number) => String(value))
  );

  const handleChange = (value: string) => {
    if (setValues.has(value)) {
      setValues.delete(value);
    } else {
      setValues.add(value);
    }
    onChange([...setValues]);
  };

  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option, index) => (
        <label
          key={option.value?.toString() + index}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            {...other}
            checked={setValues.has(String(option.value))}
            className="w-4 cursor-pointer h-4 rounded border-gray-300 focus:ring-primary accent-primary bg-transparent"
            type="checkbox"
            onChange={() => handleChange(option.value?.toString())}
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
