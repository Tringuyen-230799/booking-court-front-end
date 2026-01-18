import { FilterCourState } from "shared/stores/useFilterCourt";
import { request } from "shared/utils/request";

type CourtsFilters = Partial<FilterCourState>;

export const getCourts = async (filters?: CourtsFilters) => {
  // Convert filters to params object
  const params: Record<string, any> = {};

  if (filters) {
    // Add search parameter
    if (filters.search && filters.search.trim() !== "") {
      params.search = filters.search;
    }

    // Add sport type parameters
    if (filters.sportType && filters.sportType.length > 0) {
      params.sportType = Array.isArray(filters.sportType)
        ? filters.sportType
        : [filters.sportType];
    }

    // Add amenities parameters
    if (filters.amenities && filters.amenities.length > 0) {
      params.amenities = Array.isArray(filters.amenities)
        ? filters.amenities
        : [filters.amenities];
    }

    // Add price range parameters
    if (filters.priceRange) {
      params.minPrice = filters.priceRange.min;
      params.maxPrice = filters.priceRange.max;
    }

    // Add rating parameter
    if (filters.rating !== undefined) {
      params.rating = filters.rating;
    }

    // Add boolean filters
    if (filters.isIndoor !== undefined) {
      params.isIndoor = filters.isIndoor;
    }

    if (filters.isHalfCourt !== undefined) {
      params.isHalfCourt = filters.isHalfCourt;
    }
  }

  console.log("params ", params);

  return request.get("/courts", { params });
};
