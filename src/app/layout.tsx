import Header from "@/components/header";
import { NAV_LINKS } from "shared/constant/path";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header appName="Court Booker" logoUrl="Example" navLinks={NAV_LINKS}/>
        {children}
      </body>
    </html>
  );
}
