"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Briefcase,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { aboutValues } from "@/lib/data";

const valueIcons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  building: Building2,
  globe: Globe2,
  briefcase: Briefcase,
  sparkles: Sparkles,
  handshake: Handshake,
};

export default function AboutValues() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-2xl font-semibold leading-8 md:text-3xl">
            Los valores que nos definen
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => {
            const Icon = valueIcons[value.icon] ?? ShieldCheck;

            return (
              <div
                key={value.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-graffiti-500/10 text-graffiti-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold">{value.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
