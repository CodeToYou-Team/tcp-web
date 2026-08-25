"use client";

import { Button } from "@/components/ui/Button";
import { Gift } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const SectionBanner = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed top-14 z-30 flex h-10 w-full items-center border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {children}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-2 font-semibold text-primary"
        >
          <Link href="/ofertas">
            <Gift className="h-4 w-4" aria-hidden="true" />
            Ofertas
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SectionBanner;
