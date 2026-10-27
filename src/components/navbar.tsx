"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        aria-label="Main"
        className="mx-auto grid h-[72px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8"
      >
        <ul className="flex items-center gap-4 sm:gap-7">
          {leftLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[15px] font-medium transition-colors",
                    active
                      ? "underline decoration-2 underline-offset-4 text-brand"
                      : "text-foreground hover:text-brand"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-brand"
        >
          Wanderlast
        </Link>

        <div className="flex items-center justify-end gap-5 sm:gap-7">
          <Link
            href="/profile"
            className="flex items-center gap-1.5 text-[15px] font-medium hover:text-brand"
          >
            <CircleUserRound className="size-4.5" aria-hidden />
            Profile
          </Link>
          <Link
            href="/login"
            className="text-[15px] font-medium hover:text-brand"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-[15px] font-medium hover:text-brand"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
