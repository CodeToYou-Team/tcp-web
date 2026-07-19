"use client";

import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { navbarItems } from "@/lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
  };

  return (
    <NextUiNavbar
      className="bg-zinc-900"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link href="/">
            <Image
              className="w-auto h-16"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_662,h_148/v1700552958/tcp-web/tcp-full-recolor_hc9iqb.png"
              alt="tcp-logo"
              width={2650}
              height={590}
              loading="eager"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* desktop navbar items */}

      <NavbarContent className="hidden sm:flex gap-6 " justify="end">
        {navbarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="whitespace-nowrap text-graffiti-500 text-lg"
              href={item.route}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* mobile navbar items */}

      <NavbarMenu className="bg-zinc-900 gap-8">
        {navbarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-graffiti-500"
              href={item.route}
              onClick={handleLinkClick}
              {...({ size: "lg" } as any)}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}
