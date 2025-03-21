"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@/components/ui/dialog";
const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur 
    supports-[backdrop-filter]:bg-[var(--background)]/60 border-b border-secondary px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[240px] sm:w-[300px] p-4 bg-[var(--card)] text-[var(--card-foreground)]"
            >
                 <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-[var(--primary)]",
                      pathname === route.href
                        ? "text-[var(--primary)]"
                        : "text-[var(--muted-foreground)]"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6">
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl">HaramTickets</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                  pathname === route.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted-foreground)]"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2 md:gap-6">
            <ModeToggle/>
        </div>
      </div>
    </header>
  );
}