import Typography from "@/app/(components)/typography";
import CourtDetailBtn from "./CourtDetailBtn";
import Icon from "@/app/(components)/Icon";
import Badge from "@/app/(components)/badge";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CourtResponse } from "shared/types/court";

interface CourtHeaderProps {
  court: Omit<
    CourtResponse,
    | "description"
    | "categories"
    | "facilities"
    | "images"
    | "createdAt"
    | "updatedAt"
  >;
}

const CourtHeader = ({ court }: CourtHeaderProps) => {
  const { name, rating, address, isIndoor } = court;
  return (
    <>
      <div className="flex-1 w-full flex justify-between">
        <Typography as="h1" variant="heading" size="xl">
          {name}
        </Typography>
        <CourtDetailBtn />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
        <div className="flex items-center gap-1 text-yellow-500">
          <Icon icon={FaStar} size="xs" />
          <Typography as="span" variant="action" size="md">
            {rating?.toFixed(1) || "N/A"}
          </Typography>
          <Typography as="span" variant="action" size="sm" color="muted">
            (128 reviews)
          </Typography>
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-1">
          <Icon icon={FaMapMarkerAlt} size="xs" variant="muted" />
          <Typography variant="action" size="sm" color="default">
            {address}
          </Typography>
        </div>
        <span className="hidden sm:inline">•</span>

        <div className="flex gap-6 items-center">
          <Typography variant="action" size="sm" color="default">
            {isIndoor ? "Indoor" : "Outdoor"}
          </Typography>

          <Badge variant="success" size="xs">
            Instant Book
          </Badge>
        </div>
      </div>
    </>
  );
};

export default CourtHeader;
