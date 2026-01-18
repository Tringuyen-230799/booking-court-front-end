"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface UseFilterUrlParams {
  search: string;
  setSearch: (search: string) => void;
  sportType: number[] | string[];
  setSportType: (sportType: number[]) => void;
  amenities: number[] | string[];
  setAmenities: (amenities: number[]) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (priceRange: { min: number; max: number }) => void;
  rating: number;
  setRating: (rating: number) => void;
  isIndoor: boolean;
  setIsIndoor: (isIndoor: boolean) => void;
  isHalfCourt: boolean;
  setIsHalfCourt: (isHalfCourt: boolean) => void;
  retsetFilters?: () => void;
}

export const useFilterUrl = (filterStore: UseFilterUrlParams) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);
  const isUpdatingUrl = useRef(false);

  const {
    search,
    setSearch,
    sportType,
    setSportType,
    amenities,
    setAmenities,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    isIndoor,
    setIsIndoor,
    isHalfCourt,
    setIsHalfCourt,
    retsetFilters,
  } = filterStore;

  // Sync store with URL only on initial mount
  useEffect(() => {
    // Only sync from URL to store on initial mount or after reset
    if (isInitialMount.current && !isUpdatingUrl.current) {
      const urlFilters = {
        search: searchParams.get("search") || "",
        sportType: searchParams.getAll("sportType").map(Number).filter(Boolean),
        amenities: searchParams.getAll("amenities").map(Number).filter(Boolean),
        priceRange: {
          min: Number(searchParams.get("minPrice")) || 10,
          max: Number(searchParams.get("maxPrice")) || 1000000,
        },
        rating: Number(searchParams.get("rating")) || 4,
        isIndoor: searchParams.has("isIndoor")
          ? searchParams.get("isIndoor") === "true"
          : true,
        isHalfCourt: searchParams.has("isHalfCourt")
          ? searchParams.get("isHalfCourt") === "true"
          : false,
      };

      setSearch(urlFilters.search);
      setSportType(urlFilters.sportType);
      setAmenities(urlFilters.amenities);
      setPriceRange(urlFilters.priceRange);
      setRating(urlFilters.rating);
      setIsIndoor(urlFilters.isIndoor);
      setIsHalfCourt(urlFilters.isHalfCourt);
      
      isInitialMount.current = false;
    }
    
    // Reset the updating flag after URL change completes
    if (isUpdatingUrl.current) {
      isUpdatingUrl.current = false;
    }
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = (overrides: Partial<UseFilterUrlParams> = {}) => {
    isUpdatingUrl.current = true;
    const params = new URLSearchParams();

    // Use override values if provided, otherwise use current state
    const currentValues = {
      search: overrides.search ?? search,
      sportType: overrides.sportType ?? sportType,
      amenities: overrides.amenities ?? amenities,
      priceRange: overrides.priceRange ?? priceRange,
      rating: overrides.rating ?? rating,
      isIndoor: overrides.isIndoor ?? isIndoor,
      isHalfCourt: overrides.isHalfCourt ?? isHalfCourt,
    };

    if (currentValues.search) params.set("search", currentValues.search);
    (currentValues.sportType as number[]).forEach((type) => params.append("sportType", String(type)));
    (currentValues.amenities as number[]).forEach((amenity) => params.append("amenities", String(amenity)));
    if (currentValues.priceRange.min > 10) params.set("minPrice", String(currentValues.priceRange.min));
    if (currentValues.priceRange.max < 1000000)
      params.set("maxPrice", String(currentValues.priceRange.max));
    if (currentValues.rating !== 4) params.set("rating", String(currentValues.rating));
    if (currentValues.isIndoor !== undefined) params.set("isIndoor", String(currentValues.isIndoor));
    if (currentValues.isHalfCourt !== undefined)
      params.set("isHalfCourt", String(currentValues.isHalfCourt));
    
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  // Reset filters and clear URL
  const handleResetFilters = () => {
    isInitialMount.current = true; // Allow sync from URL after reset
    retsetFilters?.();
    router.push("/", { scroll: false });
  };

  return {
    updateURL,
    handleResetFilters,
  };
};
