"use client";

import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ShieldCheck, Users } from "lucide-react";
import { detailingBenefits } from "@/lib/data";

const benefitIcons: Record<string, LucideIcon> = {
  team: Users,
  products: BadgeCheck,
  warranty: ShieldCheck,
};

export default function DetailingBenefits() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[14px] border border-zinc-800 bg-zinc-900 px-6 py-12 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
              ¿Por qué elegir nuestro servicio?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {detailingBenefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon] ?? ShieldCheck;

              return (
                <div
                  key={benefit.name}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-graffiti-500/10 text-graffiti-500"
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-semibold">{benefit.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
