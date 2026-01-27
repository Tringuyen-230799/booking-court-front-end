"use server";
import Breadcrumb from "shared/components/breadcrumb";
import Link from "next/link";
import CourtGallery from "../container/CourtGallery";
import CourtHeader from "../container/CourtHeader";
import Typography from "shared/components/typography";
import CourtBooking from "../container/CourtBooking";
import CourtAmenities from "../container/CourtAmenities";
import Divider from "shared/components/Divider";
import { getCourtDetails } from "shared/requests/courts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourtDetail({ params }: PageProps) {
  const { slug } = await params;

  const court = await getCourtDetails(slug);

  const { description, facilities } = court || {};
  const amenities = facilities?.map((facility) => facility?.name) || [];

  if (!court) {
    return <EmptyPage />;
  }

  return (
    <main className="bg-neutral-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Courts", href: "/court" },
            { label: court.name, isCurrentPage: true },
          ]} 
        />

        <CourtHeader court={court} />

        <CourtGallery
          containerStyles={{ maxWidth: 1280 }}
          containerClassName="mb-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-2">
            <section className="w-full">
              <Typography as="h2" variant="heading" size="xl">
                About this court
              </Typography>
              <div className="">
                <Typography
                  variant="body"
                  as="p"
                  className="mb-4"
                  size="md"
                  color={description ? "default" : "muted"}
                >
                  {description || 'No description available for this court.'}
                </Typography>
              </div>
            </section>
            <Divider className="mt-5 mb-4" />
            <CourtAmenities amentites={amenities} />
            <Divider className="my-7" />
          </div>
          <CourtBooking />
        </div>
      </div>
    </main>
  );
}

const EmptyPage = () => {
  return (
    <main className="bg-neutral-100 min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <div className="text-red-500 text-6xl mb-4">🏀</div>
        <h2 className="text-xl font-bold text-red-800 mb-2">Court Not Found</h2>
        <p className="text-red-600 mb-4">The court doesnt exist.</p>
        <Link
          href="/court"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
        >
          Browse All Courts
        </Link>
      </div>
    </main>
  );
};
