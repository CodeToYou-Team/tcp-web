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
    <section
      className={cn(
        "p-4 md:p-5",
        className
      )}
    >
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
