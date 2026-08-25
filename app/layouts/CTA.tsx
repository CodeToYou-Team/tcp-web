import type { ReactNode } from "react";

interface CTAProps {
  title: ReactNode;
  description: ReactNode;
  image: ReactNode;
  link: ReactNode;
}

export default function CTA({ title, description, image, link }: CTAProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="relative isolate flex flex-col overflow-hidden rounded-xl bg-muted shadow-lg lg:flex-row lg:items-center lg:gap-x-20">
        <div className="mx-auto max-w-md px-6 py-16 text-center sm:px-16 md:py-20 lg:mx-0 lg:flex-auto lg:px-24 lg:text-left">
          <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            {description}
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            {link}
          </div>
        </div>
        {image}
      </div>
    </div>
  );
}
