"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Chip,
} from "@nextui-org/react";
import NextLink from "next/link";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { ExitIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ModeToggle";
import CartSheet from "./CartSheet";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      {/* navbar logo and menu icon */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

        {/* navbar item */}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            as={NextLink}
            href="/"
            color={pathname === "/" ? "primary" : "foreground"}
            size="lg"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.includes("store")}>
          <Link
            as={NextLink}
            href="/store"
            color={pathname.includes("store") ? "primary" : "foreground"}
            size="lg"
          >
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="#" color="foreground" size="lg">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:block">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="relative">
          <CartSheet />
          <Chip
            color="primary"
            variant="solid"
            className="absolute -top-1.5 -right-1.5 z-50"
            size="sm"
          >
            5
          </Chip>
        </NavbarItem>
      </NavbarContent>

      {/* navbar menu content */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            href="/"
            color={pathname === "/" ? "primary" : "foreground"}
            size="lg"
            onClick={closeMenu}
          >
            Home
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            as={NextLink}
            href="/store"
            color={pathname.includes("store") ? "primary" : "foreground"}
            size="lg"
            onClick={closeMenu}
          >
            Store
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            href="#"
            color="foreground"
            size="lg"
            onClick={closeMenu}
          >
            Customers
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex items-center">
            <h1 className="text-danger">Delete user</h1>
            <ExitIcon className="h-4 w-4 ml-2 text-danger" />
          </div>
        </NavbarMenuItem>
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
