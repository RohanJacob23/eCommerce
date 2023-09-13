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
    <Card className="" isPressable>
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
        <h1 className="text-xl">{title}</h1>
      </CardBody>
    </Card>
  );
}
