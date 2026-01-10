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
  const { address, id, price, title, imageUrl, rating, category } = court;

  return (
    <div className="max-w-80 min-w-70 cursor-pointer flex flex-col rounded-lg overflow-hidden border border-[#e7f3eb] bg-white hover:shadow-lg transition-all">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute top-3 right-3 z-50 bg-white px-2 py-1 rounded shadow flex items-center gap-1">
          <Typography
            variant="action"
            size="sm"
            className="font-semibold flex items-center gap-1"
          >
            <Icon icon={FaStar} size="xs" variant="warning" />
            {rating}
          </Typography>
        </div>
        <div className="w-full h-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center hover:scale-125 transition-all duration-700"
            data-alt="Outdoor street basketball court"
            style={
              imageUrl ? { backgroundImage: `url("${imageUrl}")` } : undefined
            }
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2">
            <Typography className="truncate" variant="heading" size="xs">
              {title}
            </Typography>
          </div>
          <div className="w-full flex justify-end">
            <Badge variant="primary" size="xs">
              {category}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-1 w-full">
          <Icon icon={FaMapMarkerAlt} size="xs" />
          <Typography as="p" variant="action" color="muted" size="md">
            {address}
          </Typography>
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
          <div>
            <Typography as="p" variant="body" color="muted" size="xs">
              Starting from
            </Typography>
            <Typography variant="action" color="default" size="lg">
              ${price}
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
