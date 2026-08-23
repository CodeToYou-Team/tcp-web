import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function InfoBlock({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("rounded-xl p-4 md:p-5", className)}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </section>
  );
}
