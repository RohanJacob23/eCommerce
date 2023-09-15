import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export default function QuantityChanger() {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-primary px-2 py-1 w-20">
      <MinusIcon className="h-4 w-4 cursor-pointer" />
      <p>1</p>
      <PlusIcon className="h-4 w-4 cursor-pointer" />
    </div>
  );
}
