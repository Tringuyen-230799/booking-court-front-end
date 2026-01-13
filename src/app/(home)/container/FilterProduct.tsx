'use client';
import FilterPrice from "@/components/FilterPrice";
import GroupCheckbox from "@/components/GroupCheckbox";
import GroupRadioBox from "@/components/GroupRadioBox";
import Icon from "shared/components/Icon";
import { HiOutlineTicket } from "react-icons/hi";
import Rating from "@/components/rating";

export default function FilterProduct() {
  return (
    <aside className="w-full lg:w-[280px] shrink-0 space-y-6 lg:sticky lg:top-24 z-30">
      <div className="bg-white rounded-xl border border-[#e7f3eb] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Filters</h3>
          <button className="text-xs font-bold text-primary hover:text-[#0fc24a] transition-colors">
            Reset All
          </button>
        </div>
        <div className="mb-6 border-b border-[#f0f0f0] pb-6">
          <h4 className="font-bold text-sm mb-3 text-gray-700">Sport Type</h4>
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
        <div className="mb-6 border-b border-[#f0f0f0] pb-6">
          <h4 className="font-bold text-sm mb-3 text-gray-700">
            Price Range / hr
          </h4>
          <FilterPrice
            min={10}
            max={500}
            onChange={() => console.log("price")}
            value={{
              min: 10,
              max: 500,
            }}
          />
        </div>
        <div className="mb-6 border-b border-[#f0f0f0] pb-6">
          <h4 className="font-bold text-sm mb-3 text-gray-700">Amenities</h4>
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
        <div>
          <h4 className="font-bold text-sm mb-3 text-gray-700">User Rating</h4>
          <div className="space-y-2.5">
            <GroupRadioBox
              className="space-y-3"
              onChange={() => console.log("checked")}
              options={[
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-4">
                      <Rating rating={5} size="md" /> {label}
                    </div>
                  ),
                  value: "lighting",
                  label: "From 5 stars",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-4">
                      <Rating rating={4} size="md" /> {label}
                    </div>
                  ),
                  value: "lighting",
                  label: "From 4 stars",
                },
                {
                  customLabel: (label) => (
                    <div className="flex items-center gap-4">
                      <Rating rating={3} size="md" /> {label}
                    </div>
                  ),
                  value: "lighting",
                  label: "From 3 stars",
                },
              ]}
              selectedValue={"lighting"}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#e7f3eb] rounded-xl p-5 text-center mt-6 hidden lg:block border border-primary/20">
        <Icon icon={HiOutlineTicket} size="lg" variant="primary" />
        <h4 className="font-bold text-[#0d1b12]">Season Pass</h4>
        <p className="text-xs text-gray-500 mt-1 mb-3">
          Get unlimited bookings with a monthly pass starting at $99.
        </p>
        <button className="text-xs font-bold text-primary hover:underline">
          Learn More
        </button>
      </div>
    </aside>
  );
}
