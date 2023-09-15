import CategorySelection from "@/components/CategorySelection";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/types/type";
import React from "react";

async function getData(category: string | string[] | undefined): Promise<{
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}> {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;
  const res = await fetch(url, { cache: "no-store" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getCategory(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/products/categories");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { category } = searchParams;
  const { products } = await getData(category);
  const categories = await getCategory();
  return (
    <main className="flex flex-col md:flex-row px-4 py-4 md:px-8 gap-4">
      <CategorySelection categories={categories} selectedCategory={category} />
      <section className="w-full md:max-w-[40rem] lg:max-w-[70rem] mx-auto">
        <h1 className="hidden md:block text-4xl font-bold text-center mb-8">
          SHOP ALL
        </h1>
        <section className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              images={product.images}
              title={product.title}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
