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
} from "@nextui-org/react";
import NextLink from "next/link";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const navbarItem = ["Home", "Store", "Customers"];
  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
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
        {navbarItem.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={
              (pathname === "/" && item === "Home") ||
              pathname.includes(item.toLowerCase())
            }
          >
            <Link
              as={NextLink}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              color={
                (pathname === "/" && item === "Home") ||
                pathname.includes(item.toLowerCase())
                  ? "primary"
                  : "foreground"
              }
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link as={NextLink} href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* navbar menu content */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              as={NextLink}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
