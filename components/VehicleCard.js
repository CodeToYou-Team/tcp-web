import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { getVehicles } from "@/lib/services";

export default async function VehicleCard({ vehicles }) {
  return (
    <>
      {vehicles?.data?.map((vehicle) => (
        <Card
          key={vehicle?._id}
          isPressable
          className="col-span-12 sm:col-span-4 h-[350px] bg-zinc-800 w-full"
        >
          <Link className="relative w-full" href={`/${vehicle?._id}`}>
            <CardHeader className="py-2 px-4 flex-col items-start bg-zinc-800 w-full absolute z-20">
              <h4 className="font-bold text-large text-zinc-100">
                {vehicle?.brand + " " + vehicle?.model + " " + vehicle?.version}
              </h4>
              <p className="text-md text-zinc-100 font-bold">{vehicle?.year}</p>
              <h4 className="text-zinc-100 text-xl font-bold text-end">
                ${vehicle?.price}
              </h4>
            </CardHeader>
            <di className="">
              <Image
                alt="latest-1"
                className="absolute top-8 rounded-none"
                src={vehicle?.images[0]}
                width={2316}
                height={1322}
              />
            </di>
          </Link>
        </Card>
      ))}
    </>
  );
}
