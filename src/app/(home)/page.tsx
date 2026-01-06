import Typography from "@/components/typography";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div
          className="w-full flex flex-col items-center justify-center min-h-125 px-4 py-20 bg-cover bg-center bg-no-repeat relative"
          data-alt="Action shot of a tennis player serving on a bright court"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrBfskpvyQMJqTMq1Ml5Tc-k6zaGb0VEXffhoqlwmSTnEyByBVYyP4ypgAtCS-uTI2cK1HrvXsrPM-CFP1hZFY7wOCdS5fDsfH1Dzm7zJNj40zQ2z1lSA4f3t0pHn0Oe1eYh0tdkXRUxBoEzmLmaMlv5sh1X1Qt3dIj7zWmUtgdL5TUeErNsLNfFCRe4DyCLgcnYe6hHBW3A6-IVycGFUjWGTjMKeSUQkf3PRy_CLxLUl0wT9Mu7VnnzOgwVzqXMdgT6w_eFp2vCw")',
          }}
        />
        <Typography variant="heading" size="lg" className="text-primary">Game On. Book Your Court Instantly.</Typography>
      </section>
    </main>
  );
}
