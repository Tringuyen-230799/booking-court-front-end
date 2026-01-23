"use client";
import Icon from "shared/components/Icon";
import BookingTitle from "./BookingTitle";
import {
  FaBorderAll,
  FaRulerCombined,
  FaSnowflake,
  FaShower,
  FaWifi,
} from "react-icons/fa6";
import Button from "shared/components/button";
import Typography from "shared/components/typography";
import { IconType } from "react-icons";
import { useCallback, useState } from "react";

const amenitiesData = [
  {
    title: FaBorderAll,
    value: "Maple Hardwood",
  },
  {
    title: FaRulerCombined,
    value: "NBA Standard Size",
  },
  {
    title: FaSnowflake,
    value: "Air conditioning",
  },
  {
    title: FaShower,
    value: "Showers",
  },
  {
    title: FaWifi,
    value: "Free parking",
  },
  {
    title: FaWifi,
    value: "Water fountain",
  },
  {
    title: FaWifi,
    value: "Water fountain",
  },
];

const CourtAmenities = () => {
  const REQUIRE_SHOW_ITEM = 6;
  const [showAll, setShowAll] = useState(false);
  const requireShowItem = amenitiesData.length > REQUIRE_SHOW_ITEM;
  const [itemsToShow, setItemsToShow] = useState(
    requireShowItem === true ? REQUIRE_SHOW_ITEM : 0,
  );

  const handelShowAll = useCallback(() => {
    setShowAll(true);
    setItemsToShow(0);
  }, []);

  return (
    <section>
      <Typography as="h2" variant="heading" size="xl" className="mb-3">
        What this place offers
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-4">
        {amenitiesData
          .slice(0, itemsToShow === 0 ? undefined : itemsToShow)
          .map((item, idx) => (
            <BookingTitle
              key={idx}
              title={<Icon icon={item.title as IconType} variant="secondary" />}
              value={item.value}
              className="flex-row items-center gap-3"
              valueProps={{
                color: "default",
                size: "md",
                variant: "body",
              }}
            />
          ))}
      </div>
      {requireShowItem && !showAll && (
        <div className="mt-6">
          <Button variant="outline" size="md" onClick={handelShowAll}>
            Show all {amenitiesData.length - REQUIRE_SHOW_ITEM} amenities
          </Button>
        </div>
      )}
    </section>
  );
};

export default CourtAmenities;
