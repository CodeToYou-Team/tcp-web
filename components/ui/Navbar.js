"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import Image from "next/image";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "Inicio", route: "/" },
    { text: "Catálogo", route: "/catalogo" },
    { text: "Vende tu auto", route: "/vende-tu-auto" },
    { text: "Acerca de nosotros", route: "/acerca-de-nosotros" },
  ];

  return (
    <Navbar className="bg-zinc-900" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Image
            className="w-auto h-16"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1700552958/tcp-web/tcp-full-recolor_hc9iqb.png"
            alt="tcp-logo"
            width={2650}
            height={590}
          />
        </NavbarBrand>
      </NavbarContent>

      {/* desktop navbar items */}

      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="whitespace-nowrap text-graffiti-500"
              href={item.route}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* mobile navbar items */}

      <NavbarMenu className="bg-zinc-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-graffiti-500"
              href={item.route}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
