 'use client';
import Card from "shared/components/card";

export default function List({ courts }: { courts?: Array<any> }) {
  const handleClickItem = (id: string) => {
    console.log("Clicked court with id:", id);
  };

  console.log("", courts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courts?.map((court) => {
        return <Card key={court.id} onClick={handleClickItem} court={court} />;
      })}
    </div>
  );
}