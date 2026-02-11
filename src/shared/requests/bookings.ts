import { BookingsRequestParams, ResponseBookingCourtDetail } from "shared/types/bookings";
import { request } from "shared/utils/request";

export const getBookingCourtDetails = async (slug: string, params: BookingsRequestParams): Promise<ResponseBookingCourtDetail> => {
  return await request.get(`/bookings/${slug}`, { params });
};
