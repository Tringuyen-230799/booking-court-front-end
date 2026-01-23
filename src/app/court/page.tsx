import Breadcrumb from "shared/components/breadcrumb";
import Link from "next/link";
import CourtGallery from "./container/CourtGallery";
import CourtHeader from "./container/CourtHeader";
import Typography from "shared/components/typography";
import CourtBooking from "./container/CourtBooking";
import CourtAmenities from "./container/CourtAmenities";
import Divider from "shared/components/Divider";

interface PageProps {
  params: { slug: string };
}

export default async function CourtDetail({ params }: PageProps) {
  const { slug } = params;

  // This runs on the server - loading.tsx shows during this time
  // const court = await getCourtBySlug(slug);
  const court = {};

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
            <h2 className="text-xl font-bold text-red-800 mb-2">
              Court Not Found
            </h2>
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
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Courts", href: "/court" },
            // { label: court.title, isCurrentPage: true },
          ]}
        />

        <CourtHeader />

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
                  color="default"
                >
                  Experience the best of Metro City basketball at the Downtown
                  Hoop District. Court A features a newly resurfaced maple
                  hardwood floor, professional-grade glass backboards, and
                  breakaway rims. Whether youre running a full-court 5v5 league
                  game or just working on your jump shot, this facility offers
                  the premium experience you need.
                </Typography>
                <Typography
                  variant="body"
                  as="p"
                  className="mb-4"
                  size="md"
                  color="default"
                >
                  The facility is climate-controlled year-round and includes
                  access to locker rooms with showers. Balls and scrimmage bibs
                  are available at the front desk (ID required).
                </Typography>
              </div>
            </section>
            <Divider className="mt-5 mb-4"/>
            <CourtAmenities />
            <Divider className="my-7"/>
          </div>
          <CourtBooking />
        </div>
      </div>
    </main>
  );
}
