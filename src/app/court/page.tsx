import Card from "shared/components/card";
import { getCourts } from "./request";

export default async function Page() {
  const courts = await getCourts();

  console.log(courts);
  // const handleClickItem = useCallback(
  //   (id: string) => {
  //     // Convert title to slug for URL
  //     const court = courts.find((court) => court.id === id);
  //     if (court) {
  //       const slug = court.title.toLowerCase().replace(/\s+/g, "-");
  //       router.push(`/court/${slug}`);
  //     }
  //   },
  //   [courts, router]
  // );

  return (
    <div className="flex overflow-hidden justify-center w-full items-center">
      <div className="flex gap-2 max-w-350 overflow-hidden">
        {courts.map((court) => {
          return (
            <Card key={court.id} onClick={() => {}} court={court} />
          );
        })}
      </div>
    </div>
  );
}
