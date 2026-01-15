import React from "react";
import { cn } from "shared/utils/cn";
import Icon, { IconProps } from "../Icon";
import Typography from "../typography";

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  leadingIcon?: IconProps["icon"];
  endIcon?: IconProps["icon"];
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  size = "md",
  leadingIcon,
  endIcon,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <Typography variant="action" size="sm">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </Typography>
      )}
      <div className="relative flex items-center">
        {leadingIcon && (
          <span className="absolute left-3 flex items-center pointer-events-none text-gray-400">
            <Icon icon={leadingIcon} size="sm" />
          </span>
        )}
        <input
          type="text"
          className={cn(
            sizeClasses[size],
            leadingIcon ? "pl-9" : "",
            endIcon ? "pr-10" : "",
            "w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          )}
          {...props}
        />
        {endIcon && (
          <span className="absolute right-3 flex items-center pointer-events-none text-gray-400">
            <Icon icon={endIcon} size="sm" />
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;
