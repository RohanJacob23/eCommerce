import { Products } from "@/types/type";
import { redirect } from "next/navigation";
import React from "react";
import ProductGallary from "@/components/ProductGallary";
import ProductDetail from "@/components/ProductDetail";

async function getData(id: string): Promise<Products> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    redirect("/store");
  }

  return res.json();
}

export default async function page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const product = await getData(productId);
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] w-full md:-mt-10">
      <section className="flex flex-col items-center md:flex-row bg-content2 dark:bg-content1 1 p-4 mx-4 rounded-xl max-w-4xl">
        {/* image section */}
        <section className="flex flex-col items-center space-y-4 w-full md:w-3/5">
          <ProductGallary images={product.images} />
        </section>

        {/* product details section */}
        <ProductDetail
          title={product.title}
          description={product.description}
          brand={product.brand}
          category={product.category}
          discountPercentage={product.discountPercentage}
          price={product.price}
          stock={product.stock}
        />
      </section>
    </main>
  );
}
