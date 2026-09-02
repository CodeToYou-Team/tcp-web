"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarItems } from "@/lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
  };

  // Cuando el menú se abre, mover foco al primer enlace; al cerrarse,
  // devolverlo al botón. Esc cierra el menú desde cualquier parte.
  useEffect(() => {
    if (isMenuOpen) {
      firstMenuLinkRef.current?.focus({ preventScroll: true });
    } else {
      toggleButtonRef.current?.focus({ preventScroll: true });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-40 flex w-full items-center justify-center bg-zinc-900">
      <div className="relative flex h-16 w-full max-w-[1024px] flex-nowrap items-center justify-between gap-4 px-6">
        <button
          ref={toggleButtonRef}
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={handleMenuToggle}
          className="flex h-full w-6 items-center justify-center sm:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="text-graffiti-500" />
          ) : (
            <Menu aria-hidden="true" className="text-graffiti-500" />
          )}
        </button>

        <div className="flex flex-grow basis-0 flex-nowrap items-center justify-start">
          <Link href="/">
            <Image
              className="w-auto h-16"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_662,h_148/v1700552958/tcp-web/tcp-full-recolor_hc9iqb.png"
              alt="TUCARROPROPIO - Ir al inicio"
              width={2650}
              height={590}
              loading="eager"
            />
          </Link>
        </div>

        {/* desktop navbar items */}
        <div className="hidden gap-6 sm:flex flex-grow basis-0 items-center justify-end">
          {navbarItems.map((item, index) => (
            <Link
              key={`${item.text}-${index}`}
              className="whitespace-nowrap text-graffiti-500 text-lg"
              href={item.route}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {/* mobile navbar menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed left-0 right-0 top-16 bottom-0 z-30 flex flex-col gap-2 overflow-y-auto bg-zinc-900 px-6 pt-2 sm:hidden"
        >
          {navbarItems.map((item, index) => (
            <Link
              key={`${item.text}-${index}`}
              ref={index === 0 ? firstMenuLinkRef : null}
              className="w-full py-2 text-lg text-graffiti-500"
              href={item.route}
              onClick={handleLinkClick}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
