"use client";
import { useQuery } from "@tanstack/react-query";
import { getCourts } from "shared/requests/courts";
import { CourtQueryParams } from "shared/types/court";

const useGetCourtList = (param: CourtQueryParams) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["courts", param],
    queryFn: async () => getCourts(param),
  });

  return {
    courts: data?.courts,
    isLoading,
    isFetching,
  };
};

export default useGetCourtList;
