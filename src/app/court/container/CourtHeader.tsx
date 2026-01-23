import Typography from "shared/components/typography";
import CourtDetailBtn from "./CourtDetailBtn";
import Icon from "shared/components/Icon";
import Badge from "shared/components/badge";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const CourtHeader = () => {
  return (
    <>
      <div className="flex-1 w-full flex justify-between">
        <Typography as="h1" variant="heading" size="xl">
          Downtown Hoop District - Court A
        </Typography>
        <CourtDetailBtn />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
        <div className="flex items-center gap-1 text-yellow-500">
          <Icon icon={FaStar} size="xs" />
          <Typography as="span" variant="action" size="md">
            4.9
          </Typography>
          <Typography as="span" variant="action" size="sm" color="muted">
            (128 reviews)
          </Typography>
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-1">
          <Icon icon={FaMapMarkerAlt} size="xs" variant="muted" />
          <Typography variant="action" size="sm" color="default">
            123 Sport Ave, Metro City
          </Typography>
        </div>
        <span className="hidden sm:inline">•</span>

        <div className="flex gap-6 items-center">
          <Typography variant="action" size="sm" color="default">
            Indoor
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