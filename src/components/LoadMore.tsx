"use client";

import { Products } from "@/types/type";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function LoadMore({ products }: { products: Products[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(30);
  const [newProduct, setNewProduct] = useState<
    | {
        products: Products[];
        total: number;
        skip: number;
        limit: number;
      }
    | undefined
  >();

  const fetchMoreData = async () => {
    setIsLoading(true);
    const url = `https://dummyjson.com/products?skip=${skip}`;
    axios
      .get(url)
      .then((res) => {
        setNewProduct((prev) => {
          if (prev) {
            return {
              ...prev,
              products: [...prev.products, ...res.data.products],
            };
          }
          return { ...res.data };
        });
        setSkip((prev) => prev + 30);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    // more loaded content
    <>
      {newProduct && !category && (
        <section className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8 mt-4">
          {newProduct.products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              images={product.images}
              title={product.title}
            />
          ))}
        </section>
      )}
      {newProduct?.products.length !== 70 ||
        (category && (
          <div className="flex justify-center mt-4">
            <Button
              color="primary"
              onClick={fetchMoreData}
              isLoading={isLoading}
              variant="ghost"
            >
              Load More
            </Button>
          </div>
        ))}
    </>
  );
}
