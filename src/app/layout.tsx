import Header from "shared/components/header";
import { NAV_LINKS } from "shared/constant/path";
import { Lexend, Noto_Sans } from "next/font/google";
import "./styles.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Court Booker",
  description: "Find and book sports courts near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${notoSans.variable}`}>
      <body>
        <Header appName="Court Booker" logoUrl="Example" navLinks={NAV_LINKS} />
        {children}
      </body>
    </html>
  );
}
