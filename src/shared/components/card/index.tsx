"use client";
import { Court } from "shared/types/court";
import Button from "../button";
import Badge from "../badge";
import Icon from "shared/components/Icon";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Typography from "../typography";

interface CardProps {
  onClick?: (id: string) => void;
  court: Court;
}

export default function Card({ court, onClick }: CardProps) {
  const { address, id, hourlyPrice, name, images, rating, categories } = court;

  return (
    <div className="max-w-80 min-w-70 cursor-pointer flex flex-col rounded-lg overflow-hidden border border-[#e7f3eb] bg-white hover:shadow-lg transition-all">
      <div className="relative h-48 bg-gray-200">
        {!rating ? null : (
          <div className="absolute top-3 right-3 z-50 bg-white px-2 py-1 rounded shadow flex items-center gap-1">
            <Typography
              variant="action"
              size="sm"
              className="font-semibold flex items-center gap-1"
            >
              <Icon icon={FaStar} size="xs" variant="primary" />
              {rating}
            </Typography>
          </div>
        )}
        <div className="w-full h-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center hover:scale-125 transition-all duration-700"
            data-alt="Outdoor street basketball court"
            style={
              images
                ? { backgroundImage: `url("${images[0].imageUrl}")` }
                : undefined
            }
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 gap-2">
        <div className="w-full">
          <Badge variant="primary" size="xs">
            {categories?.[0]?.name}
          </Badge>
          <Typography as='h3' className="truncate" variant="heading" size="lg">
            {name}
          </Typography>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-1 w-full">
          <Icon icon={FaMapMarkerAlt} size="xs" />
          <Typography as="span" variant="action" color="muted" size="md">
            {address}
          </Typography>
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
          <div>
            <Typography as="p" variant="body" color="muted" size="xs">
              Starting from
            </Typography>
            <Typography variant="action" color="default" size="lg">
              ${hourlyPrice}
            </Typography>
            <Typography variant="action" color="muted">
              /hr
            </Typography>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={onClick ? () => onClick(String(id)) : undefined}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
