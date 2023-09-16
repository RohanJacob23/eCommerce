"use client";

import { Button } from "@nextui-org/react";
import React from "react";

export default function ProductDetail({
  title,
  description,
  brand,
  category,
  price,
  discountPercentage,
  stock,
}: {
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
}) {
  return (
    <section className="flex flex-col space-y-2.5 mt-4 w-full md:w-2/5">
      <h1 className="text-3xl text-primary first-letter:uppercase font-semibold">
        {title}
      </h1>
      <p className="text-sm opacity-75 first-letter:uppercase">{description}</p>
      <h1 className="text-primary">
        <span className="font-semibold text-foreground">Brand: </span>
        {brand}
      </h1>
      <h1 className="text-primary">
        <span className="font-semibold text-foreground">Category: </span>
        {category}
      </h1>
      <h1 className="text-primary">
        <span className="font-semibold text-foreground">Price: </span>
        {price}
      </h1>
      <h1 className="text-primary">
        <span className="font-semibold text-foreground">
          Discount Percentage:{" "}
        </span>
        {discountPercentage}
      </h1>
      <h1 className="text-primary">
        <span className="font-semibold text-foreground">Stocks: </span>
        {stock}
      </h1>

      <Button color="primary" variant="bordered">
        Add to Cart
      </Button>
      <Button color="primary" variant="shadow">
        Buy Now
      </Button>
    </section>
  );
}
