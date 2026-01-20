"use client";
import Icon from "shared/components/Icon";
import { IoIosArrowDown } from "react-icons/io";
import Card from "shared/components/card";
import Button from "shared/components/button";
import { useCounterStore } from "shared/provider/FIlterCourProvidier";
import useGetCourtList from "../hooks/useGetCourtList";
import LoadingMore from "shared/components/LoadingMore";

export default function CourtList() {
  const { search, sportType, amenities, priceRange, rating } = useCounterStore(
    (state) => state,
  );

  const { data, isLoading, isFetching, fetchNextPage } = useGetCourtList({
    search,
    sportType,
    amenities,
    min: priceRange?.min || 0,
    max: priceRange?.max || 0,
    rating,
    limit: 25,
  });

  const courts = data?.pages.flatMap((page) => page.data?.contents);
  const total = data?.pages[0]?.data?.totalCount || 0;

  const isStillHaveMore = courts && courts.length < total;

  const handleLoadMore = () => {
    if (isLoading || isFetching) return;
    fetchNextPage();
  };

  if (isLoading) {
    return <CourtSkeleton />;
  }

  return (
    <div className="flex-1 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
      <div className="flex justify-center flex-col items-center gap-4">
        <List courts={courts || []} />
        {!isFetching && isStillHaveMore && (
          <div className="self-start flex justify-center w-full mt-6">
            <Button
              variant="secondary"
              className="rounded-full"
              size="lg"
              onClick={() => handleLoadMore()}
            >
              <div className="flex gap-1 items-center">
                Load More Courts
                <Icon icon={IoIosArrowDown} size="sm" />
              </div>
            </Button>
          </div>
        )}
        {isFetching && <LoadingMore />}
      </div>
    </div>
  );
}

function List({ courts }: { courts?: Array<any> }) {
  const handleClickItem = (id: string) => {
    console.log("Clicked court with id:", id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courts?.map((court) => {
        return <Card key={court.id} onClick={handleClickItem} court={court} />;
      })}
    </div>
  );
}

function CourtSkeleton() {
  return (
    <div className="flex w-full flex-wrap gap-6 justify-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="">
          <div className="w-[320px] h-80 bg-neutral-200 rounded-lg animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
