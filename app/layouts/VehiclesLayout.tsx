import type { ReactNode } from "react";

export const VehiclesLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 mb-32">
      {title && (
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-semibold leading-8">
            {title}
          </h2>
        </div>
      )}
      <div className="w-full h-fit mt-12 gap-6 grid grid-cols-12">
        {children}
      </div>
    </div>
  );
};
