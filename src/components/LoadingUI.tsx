"use client";

import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function LoadingUI() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-2 space-y-2">
        <Skeleton disableAnimation className="h-5 w-36 rounded-lg mt-2" />
        {Array.from({ length: 12 }, (_, i) => (
          <Skeleton key={i} disableAnimation className="h-3 w-32 rounded-lg" />
        ))}
      </div>
      <section className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8 w-full md:max-w-[40rem] lg:max-w-[70rem] mx-auto">
        <Skeleton
          disableAnimation
          className="md:hidden w-[calc(100%-2rem)] h-14 rounded-lg"
        />
        {Array.from({ length: 14 }, (_, i) => (
          <Card key={i} className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton disableAnimation className="rounded-lg">
              <div className="h-24 rounded-lg bg-primary"></div>
            </Skeleton>
            <Skeleton disableAnimation className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </Card>
        ))}
      </section>
    </>
  );
}
