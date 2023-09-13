import ProductCard from "@/components/ProductCard";
import { Products } from "@/types/type";
import React from "react";

async function getData(): Promise<{
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const { products } = await getData();
  return (
    <main>
      <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} images={product.images} />
        ))}
      </section>
    </main>
  );
}
