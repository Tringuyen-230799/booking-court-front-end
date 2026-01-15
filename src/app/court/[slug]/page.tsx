import Breadcrumb from "shared/components/breadcrumb";
import Link from "next/link";
// import { Court } from "shared/types/court";

// Server-side function to simulate async data fetching
// async function getCourtBySlug(slug: string): Promise<Court | null> {
//   // Simulate server delay (this triggers loading.tsx)
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // Find court by matching slug with title
//   const court = mockCourts.find(c => 
//     c.title.toLowerCase().replace(/\s+/g, '-') === slug
//   );
  
//   return court || null;
// }

interface PageProps {
  params: { slug: string };
}

export default async function CourtDetail({ params }: PageProps) {
  const { slug } = params;
  
  // This runs on the server - loading.tsx shows during this time
  // const court = await getCourtBySlug(slug);
  const court = {}

  if (!court) {
    return (
      <main className="bg-neutral-100 min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Courts", href: "/court" },
              { label: "Not Found", isCurrentPage: true },
            ]}
          />
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <div className="text-red-500 text-6xl mb-4">🏀</div>
            <h2 className="text-xl font-bold text-red-800 mb-2">Court Not Found</h2>
            <p className="text-red-600 mb-4">The court {slug} doesnt exist.</p>
            <Link
              href="/court"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
            >
              Browse All Courts
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-neutral-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Courts", href: "/court" },
            // { label: court.title, isCurrentPage: true },
          ]}
        />
        {/* Server-Rendered Content */}
        
      
      </div>
    </main>
  );
}
