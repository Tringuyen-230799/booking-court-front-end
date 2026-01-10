"use client";
import Select from "shared/components/Select";
import { FaBasketballBall } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/button";
import Icon from "shared/components/Icon";

export default function Banner() {
  return (
    <section className="relative">
      <div
        className="w-full flex flex-col items-center justify-center min-h-125 px-4 py-20 bg-cover bg-center bg-no-repeat relative"
        data-alt="Action shot of a tennis player serving on a bright court"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrBfskpvyQMJqTMq1Ml5Tc-k6zaGb0VEXffhoqlwmSTnEyByBVYyP4ypgAtCS-uTI2cK1HrvXsrPM-CFP1hZFY7wOCdS5fDsfH1Dzm7zJNj40zQ2z1lSA4f3t0pHn0Oe1eYh0tdkXRUxBoEzmLmaMlv5sh1X1Qt3dIj7zWmUtgdL5TUeErNsLNfFCRe4DyCLgcnYe6hHBW3A6-IVycGFUjWGTjMKeSUQkf3PRy_CLxLUl0wT9Mu7VnnzOgwVzqXMdgT6w_eFp2vCw")',
        }}
      >
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] w-full items-center text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
            Find Your Court.
            <br />
            <span className="text-primary">Play Your Game.</span>
          </h1>
          <h2 className="text-white/90 text-lg font-normal leading-relaxed max-w-150 drop-shadow-sm">
            Search hundreds of top-rated sports facilities near you.
          </h2>
          <div className="mt-8 w-full bg-white p-3 rounded-xl shadow-xl flex flex-col md:flex-row md:gap-2 items-center">
            <div className="relative w-full md:w-[30%] border-b md:border-b-0 md:border-r border-[#e7f3eb]">
              <Select
                value={"basketball"}
                options={[
                  {
                    value: "basketball",
                    label: "Basketball",
                    customLabel: (label) => (
                      <div className="flex gap-2 items-center">
                        <Icon icon={FaBasketballBall} /> {label}
                      </div>
                    ),
                  },
                  { value: "tennis", label: "Tennis" },
                  { value: "badminton", label: "Badminton" },
                  { value: "squash", label: "Squash" },
                  { value: "padel", label: "Padel" },
                ]}
                placeholder="Select sport..."
                onChange={(value) => console.log("Selected sport:", value)}
              />
            </div>
            <div className="relative w-full md:w-[40%] border-b md:border-b-0 border-[#e7f3eb]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon icon={FaMapMarkerAlt} />
              </div>
              <input
                className="w-full h-12 md:h-14 pl-10 pr-4 bg-transparent border-none focus:ring-0 text-sm font-medium placeholder:text-gray-400 text-[#0d1b12]"
                placeholder="Enter city or venue..."
                type="text"
              />
            </div>
            <div className="relative w-full md:w-[20%]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon icon={FaCalendarAlt} />
              </div>
              <input
                className="w-full h-12 md:h-14 pl-10 pr-4 bg-transparent border-none focus:ring-0 text-sm font-medium text-[#0d1b12] placeholder:text-gray-400"
                type="date"
              />
            </div>
            <div className="w-full md:w-[15%] flex justify-end pr-2">
              <Button variant="primary">
                <Icon icon={FaSearch} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
