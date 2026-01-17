import { BACK_END_API_URL } from "shared/constant/request";

export const getCourts = async () => {
  const res = await fetch(`${BACK_END_API_URL}/courts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courts");
  }

  return res.json();
};
