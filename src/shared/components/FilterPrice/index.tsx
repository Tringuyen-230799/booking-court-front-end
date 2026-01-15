import React, { useEffect, useState } from "react";
import { formatVND } from "shared/utils/common";

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

  useEffect(() => {
    setLocalMin(value.min);
    setLocalMax(value.max);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberFormatted = e.target.value.replace(/[^0-9]/g, "");
    if (isNaN(Number(numberFormatted))) {
      setLocalMin(min);
      return;
    }
    const newMin = Math.max(min, Math.min(max, Number(numberFormatted)));
    setLocalMin(newMin);
    onChange({ min: newMin, max: localMax });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberFormatted = e.target.value.replace(/[^0-9]/g, "");
    if (!Number(numberFormatted)) {
      setLocalMax(max);
      return;
    }
    const newMax = Math.max(min, Math.min(max, Number(numberFormatted)));
    setLocalMax(newMax);
    onChange({ min: localMin, max: newMax });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberFormatted = e.target.value.replace(/[^0-9]/g, "");
    const newValue = Number(numberFormatted);
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
            value={localMin === 0 ? localMin : formatVND(localMin)}
            inputMode="numeric"
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
            value={localMax === 0 ? localMax : formatVND(localMax)}
            onChange={handleMaxChange}
            inputMode="numeric"
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
