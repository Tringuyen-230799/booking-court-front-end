import { Court } from "shared/types/court";
import Button from "../button";

interface CardProps {
  onClick?: (id: string) => void;
  court: Court;
}

export default function Card({ court, onClick }: CardProps) {
  const { address, id, price, title, imageUrl, rating } = court;

  return (
    <div className="min-w-70 flex flex-col rounded-xl overflow-hidden border border-[#e7f3eb] bg-white hover:shadow-lg transition-all">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute top-3 right-3 bg-white  text-xs font-bold px-2 py-1 rounded shadow flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-500 text-sm">
            star
          </span>{" "}
          {rating ? rating.toFixed(1) : "N/A"}
        </div>
        <div
          className="w-full h-full bg-cover bg-center"
          data-alt="Outdoor street basketball court"
          style={
            imageUrl ? { backgroundImage: `url("${imageUrl}")` } : undefined
          }
        ></div>
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{address}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">Icon</span>{" "}
              {address}
            </p>
          </div>
          <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
            {title}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t   flex items-center justify-between">
          <div>
            <span className="block text-xs text-gray-500">Starting from</span>
            <span className="font-bold text-lg">
              {price}
              <span className="text-sm font-normal text-gray-500">/hr</span>
            </span>
          </div>
          <Button
            variant="primary"
            onClick={onClick ? () => onClick(String(id)) : undefined}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
