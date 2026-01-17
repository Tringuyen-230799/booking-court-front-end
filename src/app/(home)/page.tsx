import Banner from "./container/Banner";
import FilterProduct from "./container/FilterProduct";
import CourtList from "./container/CourtList";
import { getCourts } from "shared/requests/courts";

export default async function Home() {
  const courts = await getCourts();

  return (
    <main>
      <Banner />
      <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 bg-background-light">
        <div className="max-w-[1440px] mx-auto">
          {/* <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold">Available Courts</h2>
              <p className="text-gray-500 mt-1">
                Book instantly from top-rated venues
              </p>
            </div>
          </div> */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FilterProduct />
            <CourtList courts={courts?.courts} />
          </div>
        </div>
      </section>
    </main>
  );
}
