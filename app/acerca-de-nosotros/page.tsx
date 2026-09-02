import Image from "next/image";
import AboutHero from "../layouts/AboutHero";
import AboutStory from "../layouts/AboutStory";
import AboutValues from "../layouts/AboutValues";
import AboutEcosystem from "../layouts/AboutEcosystem";
import Map from "../layouts/Map";
import CTA from "../layouts/CTA";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import { SEO_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: "Tu Carro Propio - Acerca de nosotros",
  description:
    "Conoce un poco más sobre nuestra empresa, donde encontrarnos, nuestras redes y más.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/acerca-de-nosotros",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutEcosystem />
      <Map />
      <CTA
        title="¿Listo para dar el siguiente paso con tu vehículo?"
        description="Explora nuestro catálogo o contáctanos directamente por WhatsApp para recibir asesoría personalizada."
        image={
          <Image
            className="mx-auto my-4 flex w-2/3 max-w-none md:w-5/12"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1707316230/iphone-whatsapp-mockup_m06ztd.png"
            alt="App screenshot"
            width={1800}
            height={2000}
            loading="eager"
          />
        }
        link={
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/catalogo">
              <Button
                radius="sm"
                className="w-full bg-graffiti-500 px-8 text-sm font-medium text-zinc-900 sm:w-auto"
              >
                Ver Catálogo
              </Button>
            </Link>
            <a
              aria-label="Contáctanos por WhatsApp"
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.link/07ixay"
            >
              <Button
                radius="sm"
                variant="outline"
                className="w-full border-graffiti-500/40 px-8 text-sm font-medium text-graffiti-500 hover:bg-graffiti-500/10 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contáctanos
              </Button>
            </a>
          </div>
        }
      />
    </div>
  );
}
