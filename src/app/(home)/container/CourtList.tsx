'use client';
import Icon from "shared/components/Icon";
import { IoIosArrowDown } from "react-icons/io";
import Card from "shared/components/card";
import Button from "shared/components/button";

interface CourtListProps {
  courts?: Array<any>;
}

export default function CourtList({ courts }: CourtListProps) {
  return (
    <div className="flex-1 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
      <div className="mt-12 flex justify-center flex-col items-center gap-4">
        <List courts={courts} />
        <div className="self-start flex justify-center w-full">
          <Button
            variant="secondary"
            className="rounded-full"
            size="lg"
            onClick={() => {}}
          >
            <div className="flex gap-1 items-center">
              Load More Courts
              <Icon icon={IoIosArrowDown} size="sm" />
            </div>
          </Button>
        </div>
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
