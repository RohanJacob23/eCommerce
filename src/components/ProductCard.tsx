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

export default function ProductCard({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <Card className="max-w-[16rem]" isPressable>
      <Image
        as={NextImage}
        isZoomed
        isBlurred
        width={800}
        height={800}
        alt="NextUI hero Image"
        src={images[0]}
        className="h-36 object-fill"
      />
      <CardBody>
        <h1 className="text-lg font-semibold">{title}</h1>
      </CardBody>
    </Card>
  );
}
