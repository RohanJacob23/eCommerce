import LoadingUI from "@/components/LoadingUI";
import React from "react";

export default function Loading() {
  return (
    <main className="flex flex-col md:flex-row px-4 py-4 md:px-8 gap-4">
      <LoadingUI />
    </main>
  );
}
