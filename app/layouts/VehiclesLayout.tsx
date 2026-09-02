import type { ReactNode } from "react";
import { useId } from "react";

export const VehiclesLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  const headingId = useId();
  return (
    <section
      aria-labelledby={title ? headingId : undefined}
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id={headingId}
              className="text-2xl font-semibold leading-8 md:text-3xl"
            >
              {title}
            </h2>
          </div>
        )}
        <div className="w-full h-fit mt-12 gap-6 grid md:grid-cols-12">
          {children}
        </div>
      </div>
    </section>
  );
};
