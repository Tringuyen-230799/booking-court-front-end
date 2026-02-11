"use client";
import FilterPrice from "@/app/(components)/FilterPrice";
import GroupCheckbox from "@/app/(components)/GroupCheckbox";
import GroupRadioBox from "@/app/(components)/GroupRadioBox";
import Rating from "@/app/(components)/rating";
import Typography from "@/app/(components)/typography";
import Button from "@/app/(components)/button";
import TextField from "@/app/(components)/TextField";
import { FaSearch } from "react-icons/fa";
import Divider from "@/app/(components)/Divider";
import { useFilterStore } from "shared/provider/FIlterCourtProvidier";
import { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";

interface FilterProductProps {
  categories?: Array<{ id: number; name: string }>;
  amenitiesData?: Array<{ id: number; name: string }>;
}

export default function FilterProduct({
  categories = [],
  amenitiesData = [],
}: FilterProductProps) {
  const {
    search,
    setSearch,
    sportTypes,
    setSportType,
    setAmenities,
    amenities,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    resetFilters,
  } = useFilterStore((state) => state);
  const [interalsearch, setInteralsearch] = useState(search);
  const [internalPrice, setInternalPrice] = useState<{
    min: number;
    max: number;
  }>(priceRange);
  const [internalSportType, setInternalSportType] = useState<
    number[] | string[]
  >(sportTypes);

  const debounceSearch = useRef(
    debounce((value: string) => {
      setSearch(value);
    }, 1000),
  ).current;

  const debouncePrice = useRef(
    debounce((value: { min: number; max: number }) => {
      setPriceRange(value);
    }, 1000),
  ).current;

  const debounceSpotType = useRef(
    debounce((value: number[]) => {
      setSportType(value);
    }, 1000),
  ).current;
  
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInteralsearch(e.target.value);
      debounceSearch(e.target.value);
    },
    [debounceSearch],
  );

  const handleChangePrice = useCallback(
    (price: { min: number; max: number }) => {
      setInternalPrice(price);
      debouncePrice(price);
    },
    [debouncePrice],
  );

  const handeleSportTypeChange = useCallback(
    (values: number[] | string[]) => {
      setInternalSportType(values);
      debounceSpotType(values.map((value: string | number) => Number(value)));
    },
    [debounceSpotType],
  );

  const handleResetFilters = useCallback(() => {
    resetFilters();
    setInteralsearch(search);
    setInternalPrice(priceRange);
    setInternalSportType(sportTypes);
  }, [resetFilters, search, priceRange, sportTypes]);
  return (
    <aside className="w-full lg:w-70 shrink-0 space-y-6 z-modal sticky top-10">
      <div className="bg-white rounded-xl border border-[#e7f3eb] p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <Typography as="h3" variant="heading" size="xl">
            Filters
          </Typography>
          <Button variant="link" size="sm" onClick={handleResetFilters}>
            Reset All
          </Button>
        </div>
        <TextField
          leadingIcon={FaSearch}
          size="sm"
          placeholder="Seach court"
          onChange={handleSearchChange}
          value={interalsearch}
          name="search"
        />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Sport Type
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              onChange={handeleSportTypeChange}
              name="sport_type"
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
              selectedValues={internalSportType}
            />
          </div>
        </div>
        <Divider />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Price Range / hr
          </Typography>
          <FilterPrice
            min={10}
            max={1000000}
            onChange={handleChangePrice}
            value={internalPrice}
          />
        </div>
        <Divider />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Amenities
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              name="Amenities"
              options={amenitiesData.map((amenity) => ({
                label: amenity.name,
                value: amenity.id,
              }))}
              onChange={(values) => {
                const newAmenities =
                  values?.map((value: any) => Number(value)) || [];
                setAmenities(newAmenities);
              }}
              selectedValues={amenities}
            />
          </div>
        </div>

        <Divider />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            User Rating
          </Typography>
          <div className="space-y-2.5 w-full">
            <GroupRadioBox
              className="space-y-3"
              name="Rating"
              onChange={(value) => {
                const newRating = Number(value);
                setRating(newRating);
              }}
              options={[
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={5} size="md" /> {label}
                    </div>
                  ),
                  value: 5,
                  label: "",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={4} size="md" /> {label}
                    </div>
                  ),
                  value: 4,
                  label: "",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={3} size="md" /> {label}
                    </div>
                  ),
                  value: 3,
                  label: "",
                },
              ]}
              selectedValue={rating}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
