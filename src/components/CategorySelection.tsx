"use client";

import React from "react";
import { Select, SelectSection, SelectItem, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export default function CategorySelection({
  categories,
  selectedCategory,
}: {
  categories: string[];
  selectedCategory: string | string[] | undefined;
}) {
  const router = useRouter();
  return (
    <div className="md:sticky md:top-20 md:left-0 md:h-screen">
      {/* for smaller screen */}
      <Select
        label="Category"
        color="primary"
        variant="bordered"
        className="max-w-xs md:hidden"
        onChange={(e) =>
          e.target.value === ""
            ? router.push(`/store`)
            : router.push(`/store?category=${e.target.value}`)
        }
      >
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      {/* for bigger screen */}
      <h1 className="hidden md:block text-2xl opacity-60 mb-2">Categories</h1>
      <div className="hidden md:block overflow-y-auto h-[calc(100%-8rem)]">
        <Link
          as={NextLink}
          href="/store"
          underline={selectedCategory ? "none" : "always"}
          color="foreground"
          className="block hover:underline cursor-pointer"
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            as={NextLink}
            key={category}
            href={`/store?category=${category}`}
            underline={selectedCategory === category ? "always" : "none"}
            color="foreground"
            className="block hover:underline cursor-pointer"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
