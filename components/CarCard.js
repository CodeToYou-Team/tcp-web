"use-client";

import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const CarCard = ({ vehicle }) => {
  return (
    <Card
      key={vehicle?._id}
      isPressable
      className="col-span-12 sm:col-span-4 h-[300px] bg-zinc-800 w-full"
    >
      <Link href={`/${vehicle?._id}`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large text-zinc-100">
            {vehicle?.brand + " " + vehicle?.model + " " + vehicle?.version}
          </h4>
          <p className="text-md text-zinc-100 font-bold">{vehicle?.year}</p>
          <h4 className="text-zinc-100 text-xl font-bold text-end">
            ${vehicle?.price}
          </h4>
        </CardHeader>

        <Image
          alt="latest-1"
          className="mt-2 h-full"
          src={vehicle?.images[0]}
          width={2316}
          height={1322}
        />
      </Link>
    </Card>
  );
};

export default CarCard;
