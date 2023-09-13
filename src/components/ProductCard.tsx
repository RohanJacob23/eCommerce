"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";

export default function ProductCard({ images }: { images: string[] }) {
  return (
    <Card className="">
      <Image
        as={NextImage}
        isZoomed
        isBlurred
        width={800}
        height={800}
        alt="NextUI hero Image"
        src={images[0]}
        className="h-60 object-fill"
      />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}
