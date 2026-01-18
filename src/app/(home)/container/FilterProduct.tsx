"use client";
import FilterPrice from "shared/components/FilterPrice";
import GroupCheckbox from "shared/components/GroupCheckbox";
import GroupRadioBox from "shared/components/GroupRadioBox";
import Rating from "shared/components/rating";
import Typography from "shared/components/typography";
import Button from "shared/components/button";
import TextField from "shared/components/TextField";
import { FaSearch } from "react-icons/fa";
import Divider from "shared/components/Divider";
import { useCounterStore } from "shared/provider/FIlterCourProvidier";
import { useFilterUrl } from "../hooks/useFilterUrl";

export default function FilterProduct() {
  const {
    search,
    setSearch,
    sportType,
    setSportType,
    setAmenities,
    amenities,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    retsetFilters,
    isIndoor,
    setIsIndoor,
    isHalfCourt,
    setIsHalfCourt,
  } = useCounterStore((state) => state);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    updateURL({
      search,
    });
  };

  const { updateURL, handleResetFilters } = useFilterUrl({
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
  });

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
          onKeyDown={(e) => e.key === "Enter" && updateURL()}
          value={search}
          name="search"
        />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Sport Type
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              onChange={(values) => {
                const newSportType =
                  values?.map((value: any) => Number(value)) || [];
                setSportType(newSportType);
                updateURL({ sportType: newSportType });
              }}
              name="sport_type"
              options={[
                {
                  label: "Tennis",
                  value: 11,
                },
                {
                  label: "Basketball",
                  value: 12,
                },
                {
                  label: "Football",
                  value: 13,
                },
                {
                  label: "Badminton",
                  value: 14,
                },
              ]}
              selectedValues={sportType}
            />
          </div>
        </div>
        <Divider />
        {/* <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Indoor / Outdoor
          </Typography>
          <div className="space-y-2.5">
            <GroupRadioBox
              name="IndoorOutdoor"
              options={[
                { label: "Indoor", value: "true" },
                { label: "Outdoor", value: "false" },
              ]}
              onChange={(value) => {
                const newIsIndoor = value === "true" ? true : false;
                setIsIndoor(newIsIndoor);
                updateURL({ isIndoor: newIsIndoor });
              }}
              selectedValue={isIndoor ? "true" : "false"}
            />
          </div>
        </div>
        <Divider /> */}
{/* 
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Half / Full Court
          </Typography>
          <div className="space-y-2.5">
            <GroupRadioBox
              name="HalfFullCourt"
              options={[
                { label: "Half Court", value: "true" },
                { label: "Full Court", value: "false" },
              ]}
              onChange={(value) => {
                const newIsHalfCourt = value === "true" ? true : false;
                setIsHalfCourt(newIsHalfCourt);
                updateURL({ isHalfCourt: newIsHalfCourt });
              }}
              selectedValue={isHalfCourt ? "true" : "false"}
            />
          </div>
        </div>

        <Divider /> */}
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Price Range / hr
          </Typography>
          <FilterPrice
            min={10}
            max={1000000}
            onChange={(newPriceRange) => {
              setPriceRange(newPriceRange);
              updateURL({ priceRange: newPriceRange });
            }}
            value={priceRange}
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
              options={[
                { label: "Lighting", value: 13 },
                {
                  label: "Equipment Rental",
                  value: 14,
                },
                { label: "Parking", value: 15 },
                { label: "Showers", value: 16 },
              ]}
              onChange={(values) => {
                const newAmenities =
                  values?.map((value: any) => Number(value)) || [];
                setAmenities(newAmenities);
                updateURL({ amenities: newAmenities });
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
                updateURL({ rating: newRating });
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
      {/* <div className="bg-[#e7f3eb] rounded-xl p-5 text-center mt-6 hidden lg:block border border-primary/20">
        <Icon icon={HiOutlineTicket} size="lg" variant="primary" />
        <h4 className="font-bold text-[#0d1b12]">Season Pass</h4>
        <p className="text-sm text-gray-500 mt-1 mb-3">
          Get unlimited bookings with a monthly pass starting at $99.
        </p>
        <button className="text-sm font-bold text-primary hover:underline">
          Learn More
        </button>
      </div> */}
    </aside>
  );
}
