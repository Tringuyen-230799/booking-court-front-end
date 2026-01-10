import { FaStar, FaRegStar } from "react-icons/fa";
import Icon from "shared/components/Icon";
import { cn } from "shared/utils/cn";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: "xs" | "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = "sm",
  showValue = false,
  className,
  readonly = true,
  onRatingChange,
}: RatingProps) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  const handleStarClick = (starIndex: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const renderStar = (index: number, filled: boolean) => {
    return (
      <button
        key={index}
        type="button"
        className={cn(
          "focus:outline-none",
          !readonly && "hover:scale-110 transition-transform cursor-pointer",
          readonly && "cursor-pointer",
          'flex items-center'
        )}
        onClick={() => handleStarClick(index)}
        disabled={readonly}
      >
        <Icon
          icon={filled ? FaStar : FaRegStar}
          size={size}
          variant={filled ? "warning" : "muted"}
        />
      </button>
    );
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center gap-1">
        {/* Filled stars */}
        {Array.from({ length: filledStars }, (_, index) =>
          renderStar(index, true)
        )}
        
        {/* Half star (if needed) */}
        {hasHalfStar && (
          <div className="relative">
            <Icon icon={FaRegStar} size={size} variant="muted" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Icon icon={FaStar} size={size} variant="warning" />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }, (_, index) =>
          renderStar(filledStars + (hasHalfStar ? 1 : 0) + index, false)
        )}
      </div>
      
      {/* Rating value */}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-gray-600">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}