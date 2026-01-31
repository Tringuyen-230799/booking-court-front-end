"use client";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/app/(components)/button";
import Icon from "@/app/(components)/Icon";
import Typography from "@/app/(components)/typography";
import { MdSportsBasketball } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { cn } from "shared/utils/cn";
import Select from "@/app/(components)/Select";
import { formatDate } from "date-fns";
import Modal from "@/app/(components)/Modal";
import Schedule from "shared/components/Schedule";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface BookingModalProps {
  onClose: () => void;
  open: boolean;
  periods: string[];
}

const BookingModal = ({ open, onClose, periods }: BookingModalProps) => {
  if (!open) return null;

  const dated = formatDate(new Date(), "MMMM dd, yyyy");

  return (
    <Modal
      title="Bookings"
      subtitle="Select your time"
      isCloseable
      onClose={onClose}
      open={open}
      cancelBtn={{
        label: "Cancel",
        onClick: onClose,
      }}
      confirmBtn={{
        label: "Book",
        onClick: () => {},
      }}
      leftFooterContent={
        <div className="">
          <div className="flex items-baseline gap-2">
            <Typography size="xs" variant="body" color="muted">
              Total for 90 mins:
            </Typography>
            <Typography size="xl" variant="heading">
              750.000₫
            </Typography>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Icon icon={IoMdInformationCircleOutline} size="sm" />
            <Typography size="xs" variant="body" color="muted">
              Price includes gear setup for Tennis
            </Typography>
          </div>
        </div>
      }
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-4">
          <section>
            <SectionTitle
              order={1}
              title="Choose your sport"
              className="mb-2"
            />
            <GroupSport />
          </section>
          <section>
            <div className="flex items-center justify-between mb-4">
              <SectionTitle title="Schedule Details" order={2} />
              <div className="flex items-center gap-4">
                <Icon
                  icon={FaChevronLeft}
                  size="sm"
                  className="cursor-pointer"
                  variant="muted"
                />
                <Typography variant="action" color="default">
                  {dated}
                </Typography>
                <Icon
                  icon={FaChevronRight}
                  size="sm"
                  className="cursor-pointer"
                  variant="muted"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <Typography
                  as="label"
                  variant="action"
                  size="sm"
                  color="muted"
                  className="uppercase block"
                >
                  Start time
                </Typography>
                <Select
                  options={[
                    { label: "08:00 AM ", value: "8:00" },
                    { label: "08:30 AM", value: "08:30" },
                  ]}
                  value={"8:00"}
                  size="sm"
                  placeholder="Select start time"
                />
              </div>
              <div className="space-y-1">
                <Typography
                  as="label"
                  variant="action"
                  size="sm"
                  color="muted"
                  className="uppercase block"
                >
                  Duration
                </Typography>
                <Select
                  options={[
                    { label: "30 mins", value: "30" },
                    { label: "1 hours", value: "60" },
                    { label: "1.5 hours", value: "90" },
                  ]}
                  value={"60"}
                  size="sm"
                  placeholder="Select duration"
                />
              </div>
            </div>
            <Schedule periods={periods} name="Court A - Tennis Availability" />
          </section>
        </div>
      </div>
    </Modal>
  );
};

const SectionTitle = ({
  title,
  order,
  className,
}: {
  title: string;
  order: number;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="size-6 bg-primary rounded-full flex items-center justify-center">
        <Typography variant="action" color="default" className="">
          {order}
        </Typography>
      </div>
      <Typography as="h3" variant="action" color="default">
        {title}
      </Typography>
    </div>
  );
};

const GroupSport = () => {
  const arr = new Array(5);
  return (
    <div className="flex gap-2 w-full overflow-x-auto pb-1">
      {arr.fill(0).map((_, index) => (
        <div key={index} className="max-w-35 min-w-36">
          <Button variant="outline" size="sm" className="w-full">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2 text-white">
              <Icon icon={MdSportsBasketball} size="lg" variant="inherit" />
            </div>
            <Typography
              as="span"
              variant="action"
              color="default"
              className="block"
            >
              Tennis
            </Typography>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BookingModal;
