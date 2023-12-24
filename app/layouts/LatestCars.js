import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { getLatestVehicles } from "@/lib/services";

const latestVehicles = await getLatestVehicles();

export default async function LatestCars({ lastVehicles }) {
  return (
    <div className="py-12 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            ¡Échale un vistazo a nuestras últimas incorporaciones!
          </h2>
        </div>
        <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
          {latestVehicles?.data?.map((latestVehicle) => (
            <Card
              key={latestVehicle?._id}
              isPressable
              className="col-span-12 sm:col-span-4 h-[300px] bg-zinc-800 w-full"
            >
              <Link href={`/${latestVehicle?._id}`}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large text-zinc-100">
                    {latestVehicle?.brand +
                      " " +
                      latestVehicle?.model +
                      " " +
                      latestVehicle?.version}
                  </h4>
                  <p className="text-md text-zinc-100 font-bold">
                    {latestVehicle?.year}
                  </p>
                  <h4 className="text-zinc-100 text-xl font-bold text-end">
                    ${latestVehicle?.price}
                  </h4>
                </CardHeader>

                <Image
                  alt="latest-1"
                  className="mt-2 h-full"
                  src={latestVehicle?.images[0]}
                  width={2316}
                  height={1322}
                />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
