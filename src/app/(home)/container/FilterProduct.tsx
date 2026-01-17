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
  };

  return (
    <aside className="w-full lg:w-70 shrink-0 space-y-6 z-modal sticky top-10">
      <div className="bg-white rounded-xl border border-[#e7f3eb] p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <Typography as="h3" variant="heading" size="xl">
            Filters
          </Typography>
          <Button variant="link" size="sm" onClick={retsetFilters}>
            Reset All
          </Button>
        </div>
        <TextField
          leadingIcon={FaSearch}
          size="sm"
          placeholder="Seach court"
          onChange={handleSearchChange}
          value={search}
          name="search"
        />
        <div className="space-y-1">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Sport Type
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              onChange={(values) =>
                setSportType(values?.map((value: any) => Number(value)) || [])
              }
              name="sport_type"
              options={[
                {
                  label: "Tennis",
                  value: 1,
                },
                {
                  label: "Basketball",
                  value: 2,
                },
                {
                  label: "Football",
                  value: 3,
                },
                {
                  label: "Badminton",
                  value: 4,
                },
              ]}
              selectedValues={sportType}
            />
          </div>
        </div>
        <Divider />
        <div className="space-y-1">
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
              onChange={(value) => setIsIndoor(value === "true" ? true : false)}
              selectedValue={isIndoor ? "true" : "false"}
            />
          </div>
        </div>
        <Divider />

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
              onChange={(value) =>
                setIsHalfCourt(value === "true" ? true : false)
              }
              selectedValue={isHalfCourt ? "true" : "false"}
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
            onChange={setPriceRange}
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
                { label: "Lighting", value: 3 },
                {
                  label: "Equipment Rental",
                  value: 4,
                },
                { label: "Parking", value: 5 },
                { label: "Showers", value: 6 },
              ]}
              onChange={(values) =>
                setAmenities(values?.map((value: any) => Number(value)) || [])
              }
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
              onChange={(value) => setRating(Number(value))}
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
