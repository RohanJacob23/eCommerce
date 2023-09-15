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
import { Button, Chip, Divider, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Badge } from "@nextui-org/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import QuantityChanger from "./QuantityChanger";

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
      <SheetContent className="flex flex-col h-full w-full md:w-3/4">
        <SheetHeader className="my-4 text-left">
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 h-1/2 overflow-y-auto px-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge
                    content={<Cross1Icon className="h-3 w-3" />}
                    color="primary"
                    variant="solid"
                    className="cursor-pointer"
                    isOneChar
                  >
                    <Image
                      src="/whiteShirt.jpg"
                      alt="tempShirtImage"
                      as={NextImage}
                      isBlurred
                      width={200}
                      height={200}
                      radius="md"
                      className="w-14 h-14"
                    />
                  </Badge>
                  <h1>White Shirt</h1>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <p>₹ 500</p>
                  {/* quantity changer */}
                  <QuantityChanger />
                </div>
              </div>
              <Divider className="my-4" />
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              color="primary"
              radius="full"
              className="w-full"
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
