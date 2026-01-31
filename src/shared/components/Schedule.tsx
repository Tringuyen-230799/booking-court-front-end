import Typography from "@/app/(components)/typography";
import { cn } from "shared/utils/cn";

interface ScheduleProps {
  periods: string[];
  containerClassName?: string;
  styles?: React.CSSProperties;
  name?: string;
}

const Schedule = ({
  periods,
  containerClassName,
  styles,
  name,
}: ScheduleProps) => {
  const options =
    periods.map((time, index) => ({
      value: time,
      isHasSelected: index / 2 == 0,
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
    </div>
  );
};

export default Schedule;
