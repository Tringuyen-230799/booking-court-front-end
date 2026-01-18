import { FilterCourState } from "shared/stores/useFilterCourt";

type CourtsFilters = Partial<FilterCourState>;

interface SearchParams {
  search?: string;
  sportType?: string | string[] | number[];
  amenities?: string | string[] | number[];
  minPrice?: string;
  maxPrice?: string;
  rating?: string;
  isIndoor?: string;
  isHalfCourt?: string;
}

interface FilterSearchParams {
  filters: CourtsFilters;
  hasFilters: boolean;
}

export const getFiltersFromSearchParams = (
  searchParams: SearchParams,
): FilterSearchParams => {
  // Convert search params to filter format
  const filters: CourtsFilters = {
    search: searchParams.search || "",
    sportType: searchParams.sportType
      ? Array.isArray(searchParams.sportType)
        ? searchParams.sportType.map(Number)
        : [Number(searchParams.sportType)]
      : [],
    amenities: searchParams.amenities
      ? Array.isArray(searchParams.amenities)
        ? searchParams.amenities.map(Number)
        : [Number(searchParams.amenities)]
      : [],
    priceRange: {
      min: searchParams.minPrice ? Number(searchParams.minPrice) : 0,
      max: searchParams.maxPrice ? Number(searchParams.maxPrice) : 100000,
    },
    rating: searchParams.rating ? Number(searchParams.rating) : 4,
    isIndoor: searchParams.isIndoor
      ? searchParams.isIndoor === "true"
      : undefined,
    isHalfCourt: searchParams.isHalfCourt
      ? searchParams.isHalfCourt === "true"
      : undefined,
  };

  // Check if there are actual filter values (not defaults)
  const hasFilters = Boolean(
    (filters.search && filters.search.trim() !== "") ||
    (filters.sportType && filters.sportType.length > 0) ||
    (filters.amenities && filters.amenities.length > 0) ||
    searchParams.minPrice ||
    searchParams.maxPrice ||
    searchParams.rating ||
    searchParams.isIndoor ||
    searchParams.isHalfCourt,
  );

  return {
    filters: hasFilters ? filters : {},
    hasFilters,
  };
};
