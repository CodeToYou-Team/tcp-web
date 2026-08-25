"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { formatNumber } from "@/lib/utils";
import { buildWhatsAppInquiry } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/types";

// Barra de conversión fija en móvil: precio + consulta por WhatsApp.
// Aparece cuando el panel de compra sale del viewport.
export default function MobileStickyBar({ vehicle }: { vehicle: Vehicle }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const panel = document.querySelector("[data-purchase-panel]");
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-zinc-800 bg-zinc-900/95 backdrop-blur transition-transform duration-200 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-[max(env(safe-area-inset-bottom),0.625rem)] pt-2.5">
        <p className="leading-tight">
          <span>
            {vehicle.brand} {vehicle.model} {vehicle.version}
          </span>
          <span className="block text-[11px] uppercase tracking-wider text-zinc-400">
            Precio
          </span>
          <span className="font-display text-xl text-graffiti-500">
            ${formatNumber(vehicle.price)}
          </span>
        </p>

        <Button
          asChild
          size="default"
          className="shrink-0 bg-primary px-5 text-primary-foreground hover:opacity-90"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por WhatsApp sobre este ${vehicle.brand} ${vehicle.model}`}
            href={buildWhatsAppInquiry(vehicle)}
          >
            <WhatsAppIcon />
            Consultar
          </a>
        </Button>
      </div>
    </div>
  );
}
