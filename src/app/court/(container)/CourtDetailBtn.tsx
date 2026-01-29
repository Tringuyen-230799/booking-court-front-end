"use client";
import { MdOutlineIosShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Button from "@/app/(components)/button";

const CourtDetailBtn = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="secondary" size="md" leadingIcon={MdOutlineIosShare}>
        Share
      </Button>
      <Button variant="secondary" size="md" leadingIcon={FaRegHeart}>
        Save
      </Button>
    </div>
  );
};

export default CourtDetailBtn;