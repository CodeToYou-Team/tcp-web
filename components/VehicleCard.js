import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { formatNumber } from "@/lib/services";

export default async function VehicleCard({ vehicles }) {
  return (
    <>
      {vehicles?.data?.map((vehicle) => (
        <Card
          key={vehicle?._id}
          isPressable
          className="col-span-12 md:col-span-6 lg:col-span-4 h-[350px] bg-zinc-800 w-full active:shadow-graffiti-500 active:shadow-md"
        >
          <Link className="relative w-full" href={`/catalogo/${vehicle?._id}`}>
            <CardHeader className="py-2 px-4 flex-col items-start bg-zinc-800 w-full absolute z-20">
              <h4 className="font-bold text-large text-zinc-100">
                {vehicle?.brand + " " + vehicle?.model + " " + vehicle?.version}
              </h4>
              <p className="text-md text-zinc-100 font-bold">{vehicle?.year}</p>
              <h4 className="text-zinc-100 text-xl font-bold text-end">
                ${formatNumber(vehicle?.price)}
              </h4>
            </CardHeader>

            <Image
              alt="latest-1"
              className="absolute top-8 rounded-none group-hover:scale-110 transition-all"
              src={vehicle?.images[0]}
              width={1080}
              height={1080}
            />
          </Link>
        </Card>
      ))}
    </>
  );
}
