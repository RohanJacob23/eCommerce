"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" isIconOnly>
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={() => setTheme("light")}>
          Light
        </DropdownItem>
        <DropdownItem key="copy" onClick={() => setTheme("dark")}>
          Dark
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
