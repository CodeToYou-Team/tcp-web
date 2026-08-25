"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/lib/data";

const LOGO_SRC =
  "https://res.cloudinary.com/dkokeszcd/image/upload/w_662,h_148/v1700552958/tcp-web/tcp-full-recolor_hc9iqb.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-ml-2 flex h-10 w-10 items-center justify-center rounded-md text-primary transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none sm:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="flex flex-grow basis-0 items-center justify-start">
          <Link href="/" aria-label="Ir al inicio">
            <Image
              className="h-14 w-auto"
              src={LOGO_SRC}
              alt="Tu Carro Propio"
              width={662}
              height={148}
              priority
            />
          </Link>
        </div>

        {/* Links de escritorio */}
        <div className="hidden flex-grow basis-0 items-center justify-end gap-6 sm:flex">
          {navbarItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              aria-current={isActive(item.route) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-md text-base font-medium text-primary transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
                isActive(item.route)
                  ? "underline decoration-2 underline-offset-8"
                  : "opacity-90 hover:opacity-100"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-30 flex flex-col gap-1 overflow-y-auto bg-background px-4 pb-6 pt-3 animate-in fade-in-0 slide-in-from-top-2 duration-200 motion-reduce:animate-none sm:hidden"
        >
          {navbarItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              aria-current={isActive(item.route) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "w-full rounded-md py-3 text-base font-medium text-primary transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
                isActive(item.route) && "underline decoration-2 underline-offset-8"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
