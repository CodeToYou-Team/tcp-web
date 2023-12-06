"use-client";

import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/react";

const CarCard = () => {
  return (
    <Card
      isPressable
      className="col-span-12 sm:col-span-4 h-[300px] bg-zinc-800 w-full"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-zinc-100">
          Nissan Patrol GRX
        </h4>
        <p className="text-md text-zinc-100 font-bold">2005</p>
        <h4 className="text-zinc-100 text-xl font-bold text-end">$19.000</h4>
      </CardHeader>

      <Image
        alt="latest-1"
        className="mt-2 h-full"
        src="https://res.cloudinary.com/dkokeszcd/image/upload/v1700730640/tcp-web/step2-bg_b2j7fd.png"
        width={2316}
        height={1322}
      />
    </Card>
  );
};

export default CarCard;
