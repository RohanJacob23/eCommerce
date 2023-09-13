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
import ThemeSwitch from "./ThemeSwitch";
import { ExitIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Store", "Customers", "Log Out"];
  const navbarItem = ["Home", "Store", "Customers"];
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
        <NavbarItem className="hidden md:block">
          <ThemeSwitch />
        </NavbarItem>
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
            {item === "Log Out" ? (
              <div className="flex items-center">
                <h1 className="text-danger">Delete user</h1>
                <ExitIcon className="h-4 w-4 ml-2 text-danger" />
              </div>
            ) : (
              <Link
                color={
                  (pathname === "/" && item === "Home") ||
                  pathname.includes(item.toLowerCase())
                    ? "primary"
                    : "foreground"
                }
                as={NextLink}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
