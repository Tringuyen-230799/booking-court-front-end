import React from "react";
import { cn } from "shared/utils/cn";
import RadioBox from "../RadioBox";

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
        <RadioBox
          key={option.value?.toString() + index}
          {...other}
          label={option.label}
          checked={selectedValue === option.value}
          onChange={() => onChange(option.value?.toString())}
          size={size}
          color={color}
          customLabel={option.customLabel}
        />
      ))}
    </div>
  );
};

export default GroupRadioBox;
