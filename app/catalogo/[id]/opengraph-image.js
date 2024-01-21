import { ImageResponse } from "next/og";
import { getVehicleById } from "@/lib/services";

export const runtime = "edge";
export const size = {
  width: 1080,
  height: 1080,
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
            tw="flex rounded-lg"
            src={vehicle?.images[0]}
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
