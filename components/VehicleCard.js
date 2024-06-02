import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { formatNumber } from "@/lib/services";

export default async function VehicleCard({ vehicles }) {
  return (
    <>
      {vehicles?.items?.map((vehicle) => (
        <Card
          key={vehicle?._id}
          isPressable
          className="col-span-12 min-[500px]:col-span-6 sm:col-span-6  lg:col-span-4 h-fit bg-zinc-800 active:shadow-graffiti-500 active:shadow-md"
        >
          <Link className="relative w-full" href={`/catalogo/${vehicle?._id}`}>
            <CardHeader className="py-2 px-4 flex-col items-start bg-zinc-800 w-full absolute z-20 ">
              <h1 className="font-bold text-large text-zinc-100">
                {vehicle?.brand + " " + vehicle?.model + " " + vehicle?.version}
              </h1>
              <p className="text-md text-zinc-100 font-bold">{vehicle?.year}</p>
              <div className="flex gap-2">
                <p className="text-zinc-100 text-xl font-bold text-end">
                  ${formatNumber(vehicle?.price)}
                </p>

                {vehicle?.discount !== 0 ? (
                  <p className="text-red-500 text-md mt-0.5 font-semibold text-end line-through">
                    ${formatNumber(vehicle.discount)}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </CardHeader>

            <Image
              alt="latest-1"
              className="object-contain h-fit mt-10 rounded-none group-hover:scale-110 transition-all"
              src={`${vehicle?.images[0]}?tr=w-466,h-466`}
              width={466}
              height={466}
            />
          </Link>
        </Card>
      ))}
    </>
  );
}
