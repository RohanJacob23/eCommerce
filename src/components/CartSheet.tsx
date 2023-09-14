"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          isIconOnly
          variant="flat"
          color="primary"
          radius="full"
          className=" z-40"
          onClick={() => console.log("clicked button")}
        >
          <Image
            src="/cartDark.png"
            width={20}
            height={20}
            alt="cart-icon"
            className="hidden dark:block"
            as={NextImage}
          />
          <Image
            src="/cartLight.png"
            width={20}
            height={20}
            alt="cart-icon"
            className="block dark:hidden"
            as={NextImage}
          />
        </Button>
      </SheetTrigger>
      {/* @ts-ignore */}
      <SheetContent>
        <SheetHeader className="my-4 text-left">
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="h-[calc(100%-8rem)] overflow-y-auto">
          <h1>hello</h1>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" color="primary" radius="full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
