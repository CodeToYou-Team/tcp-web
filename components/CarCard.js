"use-client";

import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/react";

const CarCard = ({ product }) => {
  return (
    <Card
      isPressable
      className="col-span-12 sm:col-span-4 h-[300px] bg-zinc-800 w-full"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-zinc-100">
          {product?.brand + " " + product?.model + " " + product?.version}
        </h4>
        <p className="text-md text-zinc-100 font-bold">{product?.year}</p>
        <h4 className="text-zinc-100 text-xl font-bold text-end">
          ${product?.price}
        </h4>
      </CardHeader>

      <Image
        alt="latest-1"
        className="mt-2 h-full"
        src={product?.mainImg}
        width={2316}
        height={1322}
      />
    </Card>
  );
};

export default CarCard;
