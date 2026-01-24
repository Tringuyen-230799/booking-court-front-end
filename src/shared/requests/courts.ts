import { CourtQueryParams, CourtResponse } from "shared/types/court";
import { request } from "shared/utils/request";

export const getCourts = async (filters?: CourtQueryParams) => {
  return await request.get("/courts", { params: filters });
};

export const getCourtCategories = async () => {
  return await request.get("/courts/categories");
};

export const getCourtAmentites = async () => {
  return await request.get("/courts/amenities");
};

export const getCourtDetails = async (slug: string): Promise<CourtResponse> => {
  const data = await request.get(`/courts/${slug}`);
  return data.court;
};
