import { Image } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { getRecommendationCars } from "@/lib/services";

export default async function RecommendedVehicles({ id, brand }) {
  const recommendedVehicles = await getRecommendationCars(id, brand);

  return (
    <div className="py-12 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            Otro vehiculos que te pueden interesar
          </h2>
        </div>
        <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
          {recommendedVehicles?.data?.map((recommendedVehicle) => (
            <Card
              key={recommendedVehicle?._id}
              isPressable
              className="col-span-12 sm:col-span-4 h-[300px] bg-zinc-800 w-full"
            >
              <Link href={`/${recommendedVehicle?._id}`}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large text-zinc-100">
                    {recommendedVehicle?.brand +
                      " " +
                      recommendedVehicle?.model +
                      " " +
                      recommendedVehicle?.version}
                  </h4>
                  <p className="text-md text-zinc-100 font-bold">
                    {recommendedVehicle?.year}
                  </p>
                  <h4 className="text-zinc-100 text-xl font-bold text-end">
                    ${recommendedVehicle?.price}
                  </h4>
                </CardHeader>

                <Image
                  alt="latest-1"
                  className="mt-2 h-full"
                  src={recommendedVehicle?.images[0]}
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
