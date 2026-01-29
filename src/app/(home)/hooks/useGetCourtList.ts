"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCourts } from "shared/requests/courts";
import { CourtQueryParams } from "shared/types/court";

const useGetCourtList = (params: CourtQueryParams) => {
  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["courts", params],
    queryFn: async ({ pageParam = 1 }) =>
      getCourts({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.data?.currentPage >= lastPage?.data?.totalPages) {
        return undefined;
      }

      return lastPage?.data?.currentPage + 1;
    },
    initialPageParam: 1,
    retry: false,
  });

  return {
    data: data,
    isLoading,
    isFetching,
    fetchNextPage,
  };
};

export default useGetCourtList;
