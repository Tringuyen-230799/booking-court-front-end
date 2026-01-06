export default function Loading() {
  return (
    <main className="bg-neutral-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Skeleton Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2">
          <div className="h-4 w-12 bg-neutral-300 rounded animate-pulse"></div>
          <span className="text-neutral-400">/</span>
          <div className="h-4 w-16 bg-neutral-300 rounded animate-pulse"></div>
          <span className="text-neutral-400">/</span>
          <div className="h-4 w-32 bg-neutral-300 rounded animate-pulse"></div>
        </div>
      </div>
    </main>
  );
}
