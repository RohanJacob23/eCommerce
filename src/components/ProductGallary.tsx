"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProductGallary({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <>
      <Image
        as={NextImage}
        src={selectedImage}
        isBlurred
        alt="Product-Image"
        width={500}
        height={500}
        className="max-h-72 w-auto"
      />
      <div className="flex space-x-2.5 justify-center items-stretch w-full h-16">
        {images.map((image, i) => (
          <Image
            key={i}
            as={NextImage}
            src={image}
            alt="Product-Image"
            width={500}
            height={500}
            className="h-full w-20 object-fill"
          />
        ))}
      </div>
    </>
  );
}
