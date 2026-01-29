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
import { eachMinuteOfInterval, formatDate } from "date-fns";
import Modal from "@/app/(components)/Modal";

interface BookingModalProps {
  onClose: () => void;
  open: boolean;
}

const BookingModal = ({ open, onClose }: BookingModalProps) => {
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
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-neutral-500">Total for 90 mins:</span>
            <span className="text-2xl font-black text-neutral-900">
              750.000₫
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="material-symbols-outlined text-[14px]">info</span>
            <span>Price includes gear setup for Tennis</span>
          </div>
        </div>
      }
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-8">
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
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Court A - Tennis Availability
                </span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500">
                    <span className="size-2 rounded-full bg-primary"></span>{" "}
                    AVAILABLE
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500">
                    <span className="size-2 rounded-full bg-neutral-300"></span>{" "}
                    BOOKED
                  </div>
                </div>
              </div>
              <BookingSchedule />
            </div>
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
    <div className="flex gap-4 w-full overflow-x-auto pb-1">
      {arr.fill(0).map((_, index) => (
        <div key={index} className="max-w-35 min-w-36">
          <Button variant="outline" size="lg" className="w-full">
            <div className="w-13 h-13 rounded-full bg-primary flex items-center justify-center mb-2 text-white">
              <Icon icon={MdSportsBasketball} size="xl" variant="inherit" />
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

const BookingSchedule = () => {
  const date = eachMinuteOfInterval(
    {
      start: new Date(2014, 9, 14, 6, 0),
      end: new Date(2014, 9, 14, 24, 0),
    },
    {
      step: 30,
    },
  );

  const timeIntervals = date.map((d) => {
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  });

  const options = timeIntervals.map((time, index) => ({
    value: time,
    isHasSelected: index / 2 == 0,
  }));

  return (
    <div className="relative pt-6 pb-2 overflow-x-auto">
      <div className="flex items-end gap-1 min-w-150 h-12">
        {options.map((option) => (
          <div
            key={option?.value}
            className="flex flex-col items-center min-w-20"
          >
            <div
              className={cn(
                "w-full h-8 bg-neutral-300 rounded-sm",
                option?.isHasSelected && "bg-primary",
              )}
            />
            <Typography
              variant="action"
              size="xs"
              color="muted"
              className="mt-2"
            >
              {option?.value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingModal;
