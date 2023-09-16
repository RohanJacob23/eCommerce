"use client";

import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function loading() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] w-full md:-mt-10">
      <section className="flex flex-col md:flex-row bg-content2 dark:bg-content1 1 p-4 mx-4 rounded-xl space-x-2.5 max-w-4xl md:h-96">
        {/* image section */}
        <section className="flex flex-col justify-center items-center space-y-4 w-full md:w-3/5">
          <Skeleton
            disableAnimation
            className="rounded-lg h-44 md:h-64 w-full bg-default-300"
          />
          <div className="flex space-x-2.5 justify-center items-stretch w-full h-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                disableAnimation
                key={i}
                className="h-full w-14 md:w-24 object-fill rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* product details section */}
        <section className="flex flex-col justify-between space-y-2.5 mt-4 w-full md:w-2/5">
          <div className="space-y-2.5">
            <Skeleton disableAnimation className="h-4 w-11/12 rounded-lg" />
            <Skeleton disableAnimation className="h-3 w-4/5 rounded-lg !mt-4" />
            <Skeleton disableAnimation className="h-3 w-3/5 rounded-lg" />
            <Skeleton disableAnimation className="h-3 w-2/5 rounded-lg !mt-4" />
            <Skeleton disableAnimation className="h-3 w-2/5 rounded-lg" />
            <Skeleton disableAnimation className="h-3 w-2/5 rounded-lg" />
            <Skeleton disableAnimation className="h-3 w-2/5 rounded-lg" />
          </div>
          <div className="space-y-2.5 !mb-3.5">
            <Skeleton disableAnimation className="h-6 w-full rounded-lg" />
            <Skeleton disableAnimation className="h-6 w-full rounded-lg" />
          </div>
        </section>
      </section>
    </main>
  );
}
