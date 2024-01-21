import { ImageResponse } from "next/og";
import { getVehicleById } from "@/lib/services";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function og({ params }) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={vehicle?.image[0] + "&w=1200&h=630&auto=format&q=75"}
            alt={vehicle?.brand + " " + vehicle?.model}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">
            {vehicle?.brand + " " + vehicle?.model}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
