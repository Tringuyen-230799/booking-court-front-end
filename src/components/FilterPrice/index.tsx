import React, { useState } from "react";

interface FilterPriceProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

const FilterPrice: React.FC<FilterPriceProps> = ({ min, max, value, onChange }) => {
  const [localMin, setLocalMin] = useState(value.min);
  const [localMax, setLocalMax] = useState(value.max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(min, Math.min(max, Number(e.target.value)));
    setLocalMin(newMin);
    onChange({ min: newMin, max: localMax });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            $
          </span>
          <input
            className="w-full pl-6 pr-2 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary text-right outline-none"
            placeholder="Min"
            type="number"
            value={localMin}
            onChange={handleMinChange}
          />
        </div>
        <span className="text-gray-400 font-medium">-</span>
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            $
          </span>
          <input
            className="w-full pl-6 pr-2 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary text-right outline-none"
            placeholder="Max"
            type="number"
            value={localMax}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      <input
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        max={max}
        min={min}
        type="range"
        value={localMax}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default FilterPrice;