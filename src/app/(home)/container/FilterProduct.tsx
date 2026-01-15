"use client";
import FilterPrice from "shared/components/FilterPrice";
import GroupCheckbox from "shared/components/GroupCheckbox";
import GroupRadioBox from "shared/components/GroupRadioBox";
import Icon from "shared/components/Icon";
import { HiOutlineTicket } from "react-icons/hi";
import Rating from "shared/components/rating";
import Typography from "shared/components/typography";
import Button from "shared/components/button";
import TextField from "shared/components/TextField";
import { FaSearch } from "react-icons/fa";
import Divider from "shared/components/Divider";

export default function FilterProduct() {
  return (
    <aside className="w-full lg:w-70 shrink-0 space-y-6 lg:sticky lg:top-24 z-30">
      <div className="bg-white rounded-xl border border-[#e7f3eb] p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Filters</h3>
          <Button variant="link" size="sm">
            Reset All
          </Button>
        </div>
        <TextField leadingIcon={FaSearch} size="sm" placeholder="Seach court" />
        <div className="">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Sport Type
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              onChange={() => console.log("checked")}
              options={[
                {
                  label: "Tennis",
                  value: "Tennis",
                },
                {
                  label: "Basketball",
                  value: "Basketball",
                },
                {
                  label: "Football",
                  value: "Football",
                },
                {
                  label: "Badminton",
                  value: "Badminton",
                },
              ]}
              selectedValues={["Football"]}
            />
          </div>
        </div>
        <Divider />
        <div className="">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Price Range / hr
          </Typography>
          <FilterPrice
            min={0}
            max={1000000}
            onChange={() => console.log("price")}
            value={{
              min: 0,
              max: 500,
            }}
          />
        </div>
        <Divider />
        <div className="">
          <Typography as="h4" variant="heading" size="sm" color="muted">
            Amenities
          </Typography>
          <div className="space-y-2.5">
            <GroupCheckbox
              options={[
                { label: "Indoor Court", value: "indoor_court" },
                { label: "Outdoor Court", value: "outdoor_court" },
                { label: "Lighting", value: "lighting" },
                {
                  label: "Equipment Rental",
                  value: "equipment_rental",
                },
                { label: "Parking", value: "parking" },
                { label: "Showers", value: "showers" },
              ]}
              onChange={() => console.log("checked")}
              selectedValues={["indoor_court"]}
            />
          </div>
        </div>
        <Divider />
        <div>
          <Typography as="h4" variant="heading" size="sm" color="muted">
            User Rating
          </Typography>
          <div className="space-y-2.5 w-full">
            <GroupRadioBox
              className="space-y-3"
              onChange={() => console.log("checked")}
              options={[
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={5} size="md" /> {label}
                    </div>
                  ),
                  value: "5_stars",
                  label: "",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={4} size="md" /> {label}
                    </div>
                  ),
                  value: "4_stars",
                  label: "",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-2">
                      <Rating rating={3} size="md" /> {label}
                    </div>
                  ),
                  value: "3_stars",
                  label: "",
                },
              ]}
              selectedValue={"4_stars"}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#e7f3eb] rounded-xl p-5 text-center mt-6 hidden lg:block border border-primary/20">
        <Icon icon={HiOutlineTicket} size="lg" variant="primary" />
        <h4 className="font-bold text-[#0d1b12]">Season Pass</h4>
        <p className="text-sm text-gray-500 mt-1 mb-3">
          Get unlimited bookings with a monthly pass starting at $99.
        </p>
        <button className="text-sm font-bold text-primary hover:underline">
          Learn More
        </button>
      </div>
    </aside>
  );
}
