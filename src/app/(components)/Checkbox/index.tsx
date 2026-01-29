import React from "react";
import Typography from "../typography";
import { cn } from "shared/utils/cn";

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "checked" | "type"
  > {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  count?: number;
  customLabel?: (label?: string) => React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
  count,
  customLabel,
  ...other
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer group", className)}>
      <input
        {...other}
        checked={checked}
        className="w-4 cursor-pointer h-4 rounded border-gray-300 focus:ring-primary accent-primary bg-transparent"
        type="checkbox"
        onChange={handleChange}
      />
      {customLabel && customLabel(label) ? (
        customLabel(label)
      ) : (
        <Typography variant="action" size="sm" color="muted">
          {label}
        </Typography>
      )}
      {count !== undefined && (
        <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
          <Typography variant="action" size="sm" color="muted">
            {count}
          </Typography>
        </span>
      )}
    </label>
  );
};

export default Checkbox;