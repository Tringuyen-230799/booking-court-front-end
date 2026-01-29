import { CSSProperties } from "react";
import Typography from "@/app/(components)/typography";
import { cn } from "shared/utils/cn";

interface CourtGalleryProps {
  containerStyles?: CSSProperties;
  containerClassName?: string;
}

interface SubImagesProps {
  images: string[];
  itemShow?: number;
}

export default function CourtGallery({
  containerStyles,
  containerClassName,
}: CourtGalleryProps) {
  const galleryImageUrls = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJxhDx0yQ3edWogcgiaFkLoaeVXw2-NHa_8x1MKeWMAk-6n2Q3YpmE1TqDvgwNgp8GrrM3Ql5XUbTp9YavjNAZJhjRPM87AGpF2XMXWUSbaqXkSsQw3UOfTTZDSAYndVn7P1jjpVkWdZ7ZeFPjYsueew4laddXYRvFqbhVaJIjoqvJZilcaq40bodmwLe9UMfk-YyEQekOCZBLjiu8jxqXpyWArliiC3qwk3e8D_MmGTXtYnPgrLHxxLEQLERx_HbAFKgUH3gSlrk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDlla3FT--v8U97b33ulvk4KtXoTe5aAAy-7wUSc-aqilhRqX2of58eUy9s5MFBfO2raqLcoy6QEYL41QUd65GBdL_4NzuLWxvrmq8CweKiiwNIu5DIy1tOvKWC9l7iKlSO1CuOZwxJqCGo3Tvw2kV7E7-LH_wu9VcNgyRas1p1CGoizwPZc9EMPu_JEXk0bZ_I02kRxJDyoSj3LTQvEcmcxTbWCIgKrSbbcn63IexyIOd8g8pE-spNd40laYFCobtwAejFavqPg4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBsUMmjK-FPL6KUJ9lyz7CG6GGUSM-asRPp_EYK8Aaru0u_pKu1W3KcY6kruZrdD5WOfg4ovRIHWoARqxcBXLQnJF0kQLbmKsoBKtuIEZNQAXhvi4Kp9KH1A_fiPvoImKlP_O2-1vGB4zcwjn-Njr6DQBFl0CIXPEDOeyVk_tKmQFGYsEOygNekgaVpEsLT1-z0SGd_mtdmwESH5nGLVuaDCAktJyYGvVG_7M6_0kGuIsADJQipUbIojm6X__NjjvbLEbqftJSea8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAI7sfTh0E1pwxLKNyO5CIVvnjcUuA_jv0HqjU4Y3i3y0svuglnl8R30i_ZD563u_mLOvkcMLRx6NTkvI2MNmvFBEFfEa3vNVlL8jAooLUZxZ4SLWU6SBhQOZ-n3ChQo8c25QqPqy5cZtqC_ZRCZImuCKpHsjauV4H_mPwP9DPKvDxekwxPd5VBYH5kOulw9-uijsEKxOpYMmGmI0JsnljNXozjhq4BsDl83Hp8vTu0c08g4bmsM7MlOunkQxGnaQK5r_BsG3UPOXo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8Mgq8TKUXH2Ipo6fFXcZoX-EHySyKv3FdMB57h8kYSp8iCcYW6nwd9312PNOxHw1oTtYm3e4zGbexRCfw-cUXzB0ZkYd3Xgf-SULuPyNzF6Fj6jYh3uSlFDzAR3EFUUuYsqoyvUWTLSxIeKaqi8ec1MixYgqo-lYq8lYrRZPrJu_e-ZnvioPQ6aniHeEyvhVqXtTDboC5j9IfHdzKQyR_ClxCOOr-LgzOoXaBufYaoSZChkWEQdvmfP37RuHjlDDF0pWLRO84co",
  ];
  return (
    <div
      className={cn(
        "w-full h-full md:h-120 flex mx-auto overflow-hidden rounded-2xl",
        containerClassName,
      )}
      style={{ ...containerStyles }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 h-100 md:h-125 mb-12 overflow-hidden">
        <div className="md:col-span-2 md:row-span-2">
          <div className="w-full h-full overflow-hidden cursor-pointer">
            <div
              className="w-full h-full bg-cover bg-center hover:scale-125 transition-transform duration-500"
              data-alt="Wide angle view of a professional indoor basketball court with polished hardwood floors"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJxhDx0yQ3edWogcgiaFkLoaeVXw2-NHa_8x1MKeWMAk-6n2Q3YpmE1TqDvgwNgp8GrrM3Ql5XUbTp9YavjNAZJhjRPM87AGpF2XMXWUSbaqXkSsQw3UOfTTZDSAYndVn7P1jjpVkWdZ7ZeFPjYsueew4laddXYRvFqbhVaJIjoqvJZilcaq40bodmwLe9UMfk-YyEQekOCZBLjiu8jxqXpyWArliiC3qwk3e8D_MmGTXtYnPgrLHxxLEQLERx_HbAFKgUH3gSlrk')",
              }}
            />
          </div>
        </div>

        <SubImages images={galleryImageUrls} />
      </div>
    </div>
  );
}

const SubImages = ({ images, itemShow = 4 }: SubImagesProps) => {
  return (
    <>
      {images.map((imgUrl, index, arr) => {
        const shouldDisplay = arr?.length > itemShow;
        const isLastItem = index === itemShow - 1;
        return (
          <div key={index} className="relative cursor-pointer md:block group">
            <div className="w-full h-full overflow-hidden cursor-pointer relative ">
              <div
                className={cn(
                  "w-full h-full bg-cover bg-center hover:scale-125 transition-transform duration-500",
                )}
                data-alt="Detail shot of the hardwood floor texture and line markings"
                style={{
                  backgroundImage: `url('${imgUrl}')`,
                }}
              ></div>
              {shouldDisplay && isLastItem && (
                <div className="absolute top-0  z-40 bg-black/40 transition-opacity duration-500 flex opacity-0 group-hover:opacity-100 items-center justify-center w-full h-full text-white">
                  <div className="px-2 py-1 rounded-full bg-black/60">
                    <Typography
                      as="div"
                      color="inherit"
                      variant="action"
                      size="sm"
                    >
                      View all photos
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
