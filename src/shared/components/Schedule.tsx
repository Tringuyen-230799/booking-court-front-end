import Typography from "@/app/(components)/typography";
import { useCallback } from "react";
import { ResponseBookingCourtDetail } from "shared/types/bookings";
import { cn } from "shared/utils/cn";
import { convertHoursMinutesFormat } from "shared/utils/dates";

interface ScheduleProps {
  periods: any[];
  containerClassName?: string;
  styles?: React.CSSProperties;
  name?: string;
  schedules: ResponseBookingCourtDetail;
}

const Schedule = ({
  periods,
  containerClassName,
  styles,
  name,
  schedules,
}: ScheduleProps) => {
  const statusStyles: Record<keyof typeof BOOKING_STATUS & undefined, string> =
    {
      PENDING_PAYMENT: "bg-yellow-500",
      CONFIRMED: "bg-blue-500",
      COMPLETED: "bg-green-500",
      CANCELLED: "bg-red-500",
      EXPIRED: "bg-gray-500",
      undefined: "bg-gray-200",
    };

  // Map the schedules to determine the status of each time period (1)
  // Create Function to compare time periods with schedules (2)
  // Loop all the schedules to find the matching time period
  // If found, get the status from the schedule
  // If not found, status is undefined (available)

  const scheduleMap = new Map<string, any>();
  schedules.forEach((schedule) => {
    scheduleMap.set(schedule.id, {
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      status: schedule.status,
    });
  });

  const getBookingTheStatus = useCallback(
    (schedule: Map<string, any>, currentTime: Date) => {
      for (const keys of schedule.keys()) {
        const period = schedule.get(keys);
        const periodStartTime = new Date(period?.startTime);
        const periodEndTime = new Date(period?.endTime);
        if (currentTime >= periodStartTime && currentTime <= periodEndTime) {
          return period?.status;
        }
      }
    },
    [],
  );

  const options =
    periods.map((time: Date) => ({
      value: convertHoursMinutesFormat(time),
      status: getBookingTheStatus(scheduleMap, time),
    })) || [];

  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
      <div className="flex justify-between items-center">
        {name && (
          <Typography
            variant="action"
            size="sm"
            color="muted"
            className="uppercase"
          >
            {name}
          </Typography>
        )}
        <div className="flex gap-4">
          <Typography
            variant="action"
            size="sm"
            color="muted"
            className="uppercase flex items-center gap-1.5"
          >
            <div className="size-2 rounded-full bg-primary" />
            AVAILABLE
          </Typography>
          <Typography
            variant="action"
            size="sm"
            color="muted"
            className="uppercase flex items-center gap-1.5"
          >
            <div className="size-2 rounded-full bg-neutral-300" />
            BOOKED
          </Typography>
        </div>
      </div>
      <div className="relative pt-6 pb-2 overflow-x-auto" style={{ ...styles }}>
        <div
          className={cn(
            "flex items-end gap-1 min-w-150 h-12",
            containerClassName,
          )}
        >
          {options.map((option) => (
            <div
              key={option?.value}
              className="flex flex-col items-center min-w-20"
            >
              <div
                className={cn(
                  "w-full h-8 bg-neutral-300 rounded-sm",
                  statusStyles[option.status] as keyof typeof BOOKING_STATUS,
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
    </div>
  );
};

export default Schedule;
