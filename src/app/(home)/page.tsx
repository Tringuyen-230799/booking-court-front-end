"use client";
import Banner from "./container/Banner";
import Icon from "shared/components/Icon";
import { MdOutlineSort } from "react-icons/md";
import FilterProduct from "./container/FilterProduct";
import CourtList from "./container/CourtList";
import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 bg-background-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold">Available Courts</h2>
              <p className="text-gray-500 mt-1">
                Book instantly from top-rated venues
              </p>
            </div>
            <div className="flex gap-3">
              <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
                Filters
              </button>
              <Button variant="secondary">
                <div className="flex gap-1">
                  <Icon icon={MdOutlineSort} size="lg" />
                  Sort: Recommended
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FilterProduct />
            <CourtList />
          </div>
        </div>
      </section>
    </main>
  );
}
