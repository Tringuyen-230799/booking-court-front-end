"use client";
import { createStore } from "zustand/vanilla";

interface PriceRange {
  min: number;
  max: number;
}

export type FilterCourState = {
  search: string;
  sportType: number[] | string[];
  amenities: number[] | string[];
  priceRange: PriceRange;
  rating: number;
};

export type FilterCourActions = {
  setSearch: (search: string) => void;
  setSportType: (sportType: number[] | string[]) => void;
  setAmenities: (amenities: number[] | string[]) => void;
  setPriceRange: (priceRange: PriceRange) => void;
  setRating: (rating: number) => void;
  resetFilters: () => void;
};

export type FilterCourtStore = FilterCourState & FilterCourActions;

export const defaultInitState: FilterCourState = {
  search: "",
  sportType: [],
  amenities: [],
  priceRange: { min: 0, max: 100000 },
  rating: 4,
};

export const createFilterCourtStore = () => {
  return createStore<FilterCourtStore>()((set) => ({
    ...defaultInitState,
    setSearch: (search: string) => set({ search }),
    setSportType: (sportType: number[]) => set({ sportType }),
    setAmenities: (amenities: number[]) => set({ amenities }),
    setPriceRange: (priceRange: PriceRange) => set({ priceRange }),
    setRating: (rating: number) => set({ rating }),
    resetFilters: () => {
      set({ ...defaultInitState });
    },
  }));
};
