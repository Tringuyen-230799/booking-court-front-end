import Banner from "../../shared/components/layout/Banner";
import FilterProduct from "shared/components/FilterProduct";
import CourtList from "../court/(container)/CourtList";
import { getCourtAmentites, getCourtCategories } from "shared/requests/courts";

export default async function Home() {
  const [categories, amentites] = await Promise.allSettled([
    getCourtCategories(),
    getCourtAmentites(),
  ]);

  const categoriesData =
    categories.status === "fulfilled" ? categories?.value : [];
  const amenitiesData =
    amentites.status === "fulfilled" ? amentites?.value : [];

  return (
    <main>
      <Banner />
      <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 bg-background-light">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FilterProduct
              categories={categoriesData}
              amenitiesData={amenitiesData}
            />
            <CourtList />
          </div>
        </div>
      </section>
    </main>
  );
}
