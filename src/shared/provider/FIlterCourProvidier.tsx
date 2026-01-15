"use client";
import { type ReactNode, createContext, useState, useContext } from "react";
import { useStore } from "zustand";

import {
  type FilterCourtStore,
  createFilterCourtStore,
} from "shared/stores/useFilterCourt";

export type FilterCourtApi = ReturnType<typeof createFilterCourtStore>;

export const FilterCourtContext = createContext<FilterCourtApi | undefined>(
  undefined
);

export interface FilterStoreProviderProps {
  children: ReactNode;
}

export const FilterStoreProvider = ({ children }: FilterStoreProviderProps) => {
  const [store] = useState(() => createFilterCourtStore());
  return (
    <FilterCourtContext.Provider value={store}>
      {children}
    </FilterCourtContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: FilterCourtStore) => T
): T => {
  const filterCourtsStoreContext = useContext(FilterCourtContext);
  if (!filterCourtsStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(filterCourtsStoreContext, selector);
};
