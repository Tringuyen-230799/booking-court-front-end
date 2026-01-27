import Typography, { TypographyProps } from "shared/components/typography";
import { cn } from "shared/utils/cn";


interface BookingTitleProps {
  title: string | React.ReactNode;
  value: string | React.ReactNode;
  className?: string;
  titleSize?: TypographyProps["size"];
  valueSize?: TypographyProps["size"];
  titleClassName?: string;
  valueClassName?: string;
  titleProps?: Pick<TypographyProps, "size" | "variant" | "color">;
  valueProps?: Pick<TypographyProps, "size" | "variant" | "color">;
}

const BookingTitle = ({
  title,
  value,
  className,
  titleSize = "xs",
  valueSize = "md",
  titleClassName,
  valueClassName,
  titleProps = {},
  valueProps = {},
}: BookingTitleProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {typeof title === "string" ? (
        <Typography
          variant={titleProps.variant ?? "action"}
          color={titleProps.color ?? "muted"}
          size={titleProps.size ?? titleSize}
          className={titleClassName}
        >
          {title}
        </Typography>
      ) : (
        (title as React.ReactNode)
      )}
      <Typography
        variant={valueProps.variant ?? "action"}
        color={valueProps.color ?? "default"}
        size={valueProps.size ?? valueSize}
        className={valueClassName}
      >
        {value}
      </Typography>
    </div>
  );
};

export default BookingTitle;
