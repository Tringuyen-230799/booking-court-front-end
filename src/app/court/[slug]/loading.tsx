export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-12 skeleton-block"></div>
          <div className="h-4 w-2 skeleton-block"></div>
          <div className="h-4 w-16 skeleton-block"></div>
          <div className="h-4 w-2 skeleton-block"></div>
          <div className="h-4 w-32 skeleton-block"></div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div className="flex-1">
          <div className="h-10 w-3/4 skeleton-block mb-3 rounded-lg"></div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-4 w-24 skeleton-block"></div>
            <div className="h-4 w-32 skeleton-block"></div>
            <div className="h-4 w-16 skeleton-block rounded-full"></div>
            <div className="h-4 w-24 skeleton-block rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-24 skeleton-block rounded-lg"></div>
          <div className="h-10 w-24 skeleton-block rounded-lg"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
        <div className="md:col-span-2 md:row-span-2 skeleton-block rounded-none"></div>
        <div className="skeleton-block hidden md:block rounded-none"></div>
        <div className="skeleton-block hidden md:block rounded-none"></div>
        <div className="skeleton-block hidden md:block rounded-none"></div>
        <div className="skeleton-block hidden md:block rounded-none"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="h-8 w-48 skeleton-block mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 w-full skeleton-block"></div>
              <div className="h-4 w-full skeleton-block"></div>
              <div className="h-4 w-3/4 skeleton-block"></div>
              <div className="h-4 w-full skeleton-block mt-8"></div>
              <div className="h-4 w-5/6 skeleton-block"></div>
            </div>
          </section>
          <section className="border-t border-neutral-200 pt-10">
            <div className="h-8 w-56 skeleton-block mb-8"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-24 skeleton-block"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-28 skeleton-block"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-24 skeleton-block"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-20 skeleton-block"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-24 skeleton-block"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 skeleton-block rounded-full"></div>
                <div className="h-4 w-24 skeleton-block"></div>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-12 w-48 skeleton-block rounded-lg"></div>
            </div>
          </section>
          <section className="border-t border-neutral-200 pt-10">
            <div className="h-8 w-44 skeleton-block mb-6"></div>
            <div className="w-full h-[320px] skeleton-block rounded-xl"></div>
            <div className="mt-4 h-4 w-64 skeleton-block"></div>
          </section>
          <section className="border-t border-neutral-200 pt-10 pb-10">
            <div className="h-8 w-64 skeleton-block mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 skeleton-block rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 skeleton-block"></div>
                    <div className="h-3 w-16 skeleton-block"></div>
                  </div>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="h-3 w-full skeleton-block"></div>
                  <div className="h-3 w-5/6 skeleton-block"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 skeleton-block rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 skeleton-block"></div>
                    <div className="h-3 w-16 skeleton-block"></div>
                  </div>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="h-3 w-full skeleton-block"></div>
                  <div className="h-3 w-4/6 skeleton-block"></div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-12 w-full md:w-48 skeleton-block rounded-lg"></div>
            </div>
          </section>
        </div>
        <div className="lg:col-span-1 relative">
          <div className="sticky top-24">
            <div className="bg-surface-light rounded-xl border border-neutral-200 shadow-xl p-6">
              <div className="flex items-end justify-between mb-8">
                <div className="h-8 w-32 skeleton-block"></div>
                <div className="h-6 w-24 skeleton-block"></div>
              </div>
              <div className="border border-neutral-200 rounded-lg mb-6 overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-neutral-200 h-16 skeleton-block rounded-none opacity-50"></div>
                  <div className="p-4 h-16 skeleton-block rounded-none opacity-50"></div>
                </div>
              </div>
              <div className="mb-8">
                <div className="h-4 w-24 skeleton-block mb-4"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-9 skeleton-block"></div>
                  <div className="h-9 skeleton-block"></div>
                  <div className="h-9 skeleton-block"></div>
                  <div className="h-9 skeleton-block"></div>
                  <div className="h-9 skeleton-block"></div>
                  <div className="h-9 skeleton-block"></div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <div className="h-4 w-32 skeleton-block"></div>
                  <div className="h-4 w-12 skeleton-block"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-24 skeleton-block"></div>
                  <div className="h-4 w-12 skeleton-block"></div>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex justify-between">
                  <div className="h-5 w-20 skeleton-block"></div>
                  <div className="h-5 w-16 skeleton-block"></div>
                </div>
              </div>
              <div className="h-14 w-full skeleton-block rounded-lg"></div>
              <div className="mx-auto mt-4 h-3 w-32 skeleton-block"></div>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="h-4 w-32 skeleton-block"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
