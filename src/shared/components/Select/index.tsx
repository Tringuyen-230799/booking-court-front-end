"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { IconType } from "react-icons";
import { cn } from "shared/utils/cn";
import Icon from "../Icon";
import Typography from "@/components/typography";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  customLabel?: (label: string) => React.ReactNode;
}

interface SelectProps {
  options: SelectOption[];
  value?: string | string[];
  placeholder?: string;
  onChange?: (value: string | string[]) => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  isMulti?: boolean;
  isClearable?: boolean;
  noOptionsMessage?: string;
  maxMenuHeight?: number;
  leadingIcon?: IconType;
  leadingIconVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "muted"
    | "inherit";
}

const selectSizes = {
  sm: "h-10 text-sm px-3",
  md: "h-12 md:h-14 text-sm px-4",
  lg: "h-16 text-base px-5",
};

const selectVariants = {
  default: "bg-transparent",
  filled: "bg-gray-50 border border-gray-200",
  outlined: "bg-white border border-gray-300",
};

export default function Select({
  options,
  value,
  placeholder = "Select an option...",
  onChange,
  disabled = false,
  className,
  size = "md",
  variant = "default",
  isMulti = false,
  isClearable = false,
  leadingIcon,
  leadingIconVariant = "inherit",
  noOptionsMessage = "No options",
  maxMenuHeight = 200,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);

  // Convert single value to array for consistent handling
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  // Get selected option labels for display
  const getSelectedLabel = () => {
    if (selectedValues.length === 0) return placeholder;
    if (!isMulti) {
      const selected = options.find((opt) => opt.value === selectedValues[0]);
      return selected?.label || "";
    }
    return `${selectedValues.length} selected`;
  };

  // Handle option selection
  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;

    let newValue: string | string[];

    if (isMulti) {
      const newValues = selectedValues.includes(option.value)
        ? selectedValues.filter((v) => v !== option.value)
        : [...selectedValues, option.value];
      newValue = newValues;
    } else {
      newValue = option.value;
      setIsOpen(false);
    }

    onChange?.(newValue);
    setHighlightedIndex(-1);
  };

  // Handle clear
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(isMulti ? [] : "");
  };

  // Render leading icon
  const renderLeadingIcon = () => {
    if (!leadingIcon) return null;

    const iconSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";

    return (
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon icon={leadingIcon} variant={leadingIconVariant} size={iconSize} />
      </div>
    );
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        setIsOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && options[highlightedIndex]) {
          handleSelect(options[highlightedIndex]);
        }
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderContent = () => {
    return (
      <>
        {isMulti && selectedValues.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {selectedValues.slice(0, 2).map((val) => {
              const option = options.find((opt) => opt.value === val);
              return (
                <span
                  key={val}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                >
                  {option?.label}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const newValues = selectedValues.filter((v) => v !== val);
                      onChange?.(newValues);
                    }}
                    className="hover:bg-primary/20 rounded"
                  >
                    <Icon icon={FaTimes} size="xs" />
                  </button>
                </span>
              );
            })}
            {selectedValues.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{selectedValues.length - 2} more
              </span>
            )}
          </div>
        )}
        {(!isMulti || selectedValues.length === 0) && (
          <Typography
            variant="action"
            size="sm"
            as='div'
            className={cn(
              "truncate",
              selectedValues.length === 0 && "text-gray-400"
            )}
            color="primary-content"
          >
            {getSelectedLabel()}
          </Typography>
        )}
      </>
    );
  };

  return (
    <div className="relative" ref={selectRef}>
      {/* Main Select Button */}
      <div
        className={cn(
          "relative w-full flex items-center justify-between cursor-pointer transition-all border border-neutral-400",
          "focus:outline-none focus:ring-1 focus:ring-primary/20 rounded-lg",
          selectSizes[size],
          selectVariants[variant],
          disabled && "opacity-50 cursor-not-allowed",
          isOpen && "ring-1 ring-primary/20",
          leadingIcon && "pl-10", // Add extra left padding when leading icon exists
          className
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Leading Icon */}
        {renderLeadingIcon()}

        <div
          className={cn(
            "flex-1 flex items-center gap-2 min-w-0",
            leadingIcon && "ml-1" // Add small margin when icon is present
          )}
        >
          {/* Adding leading Icon */}
          {renderContent()}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1">
          {isClearable && selectedValues.length > 0 && (
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              tabIndex={-1}
            >
              <Icon icon={FaTimes} size="sm" variant="muted" />
            </button>
          )}
          <Icon
            icon={FaChevronDown}
            size="sm"
            variant="muted"
            className={cn("transition-transform", isOpen && "rotate-180")}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 right-0 z-50 mt-1",
            "bg-white border border-gray-200 rounded-lg shadow-lg",
            "overflow-y-scroll",
            "p-1"
          )}
          style={{ maxHeight: maxMenuHeight }}
        >
          <div className="overflow-auto max-h-full">
            {options.length === 0 ? (
              <div className="px-3 py-2 text-gray-500 text-center">
                {noOptionsMessage}
              </div>
            ) : (
              options.map((option, index) => {
                const isSelected = selectedValues.includes(option.value);

                return (
                  <div
                    key={option.value + index}
                    className={cn(
                      "px-3 py-2 cursor-pointer transition-colors rounded-sm",
                      "flex items-center justify-between hover:bg-primary duration-300",
                      isSelected && "bg-primary/10 text-primary",
                      option.disabled && "opacity-50 cursor-not-allowed"
                    )}
                    onClick={() => handleSelect(option)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    {option.customLabel ? (
                      <Typography variant="body" size="sm" as='div'>
                        {option.customLabel(option.label)}
                      </Typography>
                    ) : (
                      <>
                        <Typography as="div" variant="body" size="sm">
                          {option.label}
                        </Typography>
                        {isSelected && isMulti && (
                          <Icon icon={FaTimes} size="xs" />
                        )}
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
