"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme } = useTheme();
  return (
    <Switch
      defaultSelected
      onValueChange={(value) => (value ? setTheme("dark") : setTheme("light"))}
      size="md"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
}
