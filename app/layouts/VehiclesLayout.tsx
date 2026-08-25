import type { ReactNode } from "react";

export const VehiclesLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {title && (
        <h2 className="text-center font-display text-3xl uppercase tracking-wide md:text-4xl">
          {title}
        </h2>
      )}
      <div className="mt-12 grid grid-cols-12 gap-6">
        {children}
      </div>
    </section>
  );
};
