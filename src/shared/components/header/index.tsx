"use client";
import Link from "next/link";
import Button from "../button";
import { NavLinkItem } from "shared/types/common";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PATH } from "shared/constant/path";
import { FaBasketballBall } from "react-icons/fa";
import Icon from "shared/components/Icon";

interface HeaderProps {
  logoUrl: string;
  appName: string;
  navLinks: NavLinkItem;
}

export default function Header({
  logoUrl = "Expample",
  appName = "CourtBook",
  navLinks,
}: HeaderProps) {
  const pathname = usePathname();
  const currentPath = NAV_LINKS.map((path) => path.href).includes(pathname)
    ? pathname
    : PATH.HOME;

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3 bg-white">
      <div className="flex items-center gap-2">
        <div className="text-primary">
          <Icon icon={FaBasketballBall} variant="primary"/>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          {appName}
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        {navLinks.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.name}
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                isActive ? "text-primary" : ""
              }`}
              href={link.href ?? "#"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </header>
  );
}
