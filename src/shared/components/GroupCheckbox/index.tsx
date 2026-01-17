import React from "react";
import { cn } from "shared/utils/cn";
import Checkbox from "../Checkbox";

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

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      setValues.add(value);
    } else {
      setValues.delete(value);
    }
    onChange([...setValues]);
  };

  return (
    <div className={cn("space-y-2.5", className)}>
      {options.map((option, index) => (
        <Checkbox
          key={option.value?.toString() + index}
          {...other}
          label={option.label}
          checked={setValues.has(String(option.value))}
          onChange={(checked) => handleChange(option.value?.toString(), checked)}
          count={option.count}
          customLabel={option.customLabel}
        />
      ))}
    </div>
  );
};

export default GroupCheckbox;
