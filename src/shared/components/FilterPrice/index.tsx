import React, { useState } from "react";

interface FilterPriceProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

const FilterPrice: React.FC<FilterPriceProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  const [localMin, setLocalMin] = useState(value.min);
  const [localMax, setLocalMax] = useState(value.max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setLocalMin(min);
      return;
    }
    const newMin = Math.max(min, Math.min(max, Number(e.target.value)));
    setLocalMin(newMin);
    onChange({ min: newMin, max: localMax });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number(e.target.value)) {
      setLocalMax(max);
      return;
    }
    const newMax = Math.max(min, Math.min(max, Number(e.target.value)));
    setLocalMax(newMax);
    onChange({ min: localMin, max: newMax });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue < localMin) {
      setLocalMin(newValue);
      onChange({ min: newValue, max: localMax });
    } else {
      setLocalMax(newValue);
      onChange({ min: localMin, max: newValue });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-full text-primary">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px]">
            đ
          </span>
          <input
            className="w-full bg-primary/10 pl-6 pr-2 py-2 text-sm  rounded-lg focus:ring-primary border-primary border-2 focus:border-primary text-right outline-none  no-spinner"
            placeholder="Min"
            type="text"
            pattern="[0-9]*"
            value={localMin}
            onChange={handleMinChange}
          />
        </div>
        <span className="text-gray-400 font-medium">-</span>
        <div className="relative w-full text-primary">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px]">
            đ
          </span>
          <input
            className="w-full bg-primary/10 pl-6 pr-2 py-2 text-sm  rounded-lg focus:ring-primary border-primary border-2 focus:border-primary text-right outline-none  no-spinner"
            placeholder="Max"
            type="text"
            pattern="[0-9]*"
            value={localMax}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      <input
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary custom-range"
        max={max}
        min={min}
        type="range"
        value={localMax}
        onChange={handleRangeChange}
        style={
          {
            "--progress": ((localMax - min) / (max - min)) * 100,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export default FilterPrice;
