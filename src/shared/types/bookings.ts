export interface BookingsRequestParams {
  date?: string;
}

export type BookingStatus =
  | "PENDING_PAYMENT"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED"
  | "EXPIRED";

export type ResponseBookingCourtDetail = Array<{
  id: string;
  bookingReference: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
}>;
