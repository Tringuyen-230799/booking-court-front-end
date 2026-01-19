import Banner from "./container/Banner";
import FilterProduct from "./container/FilterProduct";
import CourtList from "./container/CourtList";

export default async function Home() {
  return (
    <main>
      <Banner />
      <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 bg-background-light">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FilterProduct />
            <CourtList />
          </div>
        </div>
      </section>
    </main>
  );
}
