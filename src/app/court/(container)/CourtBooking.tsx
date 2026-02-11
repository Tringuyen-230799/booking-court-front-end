"use client";
import Icon from "@/app/(components)/Icon";
import { FaBasketballBall } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import Typography from "@/app/(components)/typography";
import { useCallback, useState } from "react";
import BookingModal from "shared/components/booking/BookingModal";
import Button from "@/app/(components)/button";
import { ResponseBookingCourtDetail } from "shared/types/bookings";
import BookingTitle from "shared/components/booking/BookingTitle";

const CourtBooking = ({
  periods,
  schedules,
}: {
  periods: any[];
  schedules: ResponseBookingCourtDetail;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <BookingModal
        onClose={handleCloseModal}
        open={isOpen}
        periods={periods}
        schedules={schedules}
      />
      <div className="lg:col-span-1 relative">
        <div className="sticky top-24 space-y-6">
          <div className="bg-surface-light rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden transition-all">
            <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <Typography
                    variant="heading"
                    color="default"
                    size="lg"
                    className="text-3xl"
                  >
                    150.000₫
                  </Typography>
                  <Typography variant="action" color="muted" size="md">
                    / 30 min
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon={FaBasketballBall} variant="primary" size="sm" />
                  <Typography variant="action" color="primary" size="md">
                    Basketball Special Rate
                  </Typography>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <Section onOpenModal={handleOpenModal} />
              <FareBreakdownPanel />
              <Button className="w-full" onClick={handleOpenModal}>
                Book Now
              </Button>
              <Typography
                as="p"
                size="xs"
                color="muted"
                variant="action"
                className="text-center"
              >
                Instant confirmation. <br /> Secure payment via local banks or
                E-wallets.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <div
      onClick={onOpenModal}
      className="grid grid-cols-1 border border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 hover:bg-neutral-50 transition-all"
    >
      <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
        <BookingTitle title="Date" value="Nov 14, 2023" />
        <Icon icon={TbEdit} size="lg" />
      </div>
      <div className="grid grid-cols-2">
        <div className="p-4 border-r border-neutral-200 flex flex-col">
          <BookingTitle title="Start Time" value="18:00" />
        </div>
        <div className="p-4 flex flex-col">
          <BookingTitle title="Duration" value=" 1.5 Hours" />
        </div>
      </div>
    </div>
  );
};

const FareBreakdownPanel = () => {
  return (
    <div className="space-y-2">
      <Typography as="h4" variant="heading" color="muted" size="sm">
        Fare Breakdown
      </Typography>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <BookingTitle
            title="150.000₫ x 3 sessions"
            value="450.000₫"
            titleSize="sm"
            titleClassName="border-b border-dotted"
            className="flex-row justify-between w-full items-center"
          />
        </div>
        <div className="flex justify-between items-center">
          <BookingTitle
            title="Service Fee"
            value="25.000₫"
            titleSize="sm"
            titleClassName="border-b border-dotted"
            className="flex-row justify-between w-full items-center"
          />
        </div>
        <div className="pt-5 border-t border-neutral-100 flex justify-between items-center">
          <Typography variant="action" color="default" size="lg">
            Total price
          </Typography>

          <Typography
            variant="heading"
            color="primary"
            size="lg"
            className="text-2xl"
          >
            475.000₫
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CourtBooking;
