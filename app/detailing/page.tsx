import Image from "next/image";
import DetailingHero from "../layouts/DetailingHero";
import DetailingServices from "../layouts/DetailingServices";
import DetailingBenefits from "../layouts/DetailingBenefits";
import DetailingFaq from "../layouts/DetailingFaq";
import CTA from "../layouts/CTA";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { detailingWhatsappLink } from "@/lib/data";

export const metadata = {
  title: "Tu Carro Propio - Detailing",
  description:
    "Detailing profesional en Caracas: corrección de pintura, limpieza profunda de interiores, acondicionamiento de motor, lavado y papel ahumado 3M Nanocerámico y Wellstar.",
  metadataBase: new URL("https://www.tucarropropiove.com"),
  alternates: {
    canonical: "/detailing",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/dkokeszcd/image/upload/v1707453262/portada-seo-static_dkqvwv.png",
  },
};

export default function Detailing() {
  return (
    <>
      <DetailingHero />
      <DetailingServices />
      <DetailingBenefits />
      <DetailingFaq />
      <CTA
        title="Agenda tu cita de detailing"
        description="Escríbenos por WhatsApp con el modelo y el estado de tu vehículo y te daremos una recomendación exacta."
        image={
          <Image
            className="mx-auto my-4 flex w-2/3 max-w-none md:w-1/3"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1707316230/iphone-whatsapp-mockup_m06ztd.png"
            alt="App screenshot"
            width={1335}
            height={2000}
            loading="eager"
          />
        }
        link={
          <a
            aria-label="Enlace al whatsapp de detailing de tu carro propio"
            rel="noopener noreferrer"
            target="_blank"
            href={detailingWhatsappLink}
            className="flex cursor-pointer gap-2 text-graffiti-500 hover:animate-pulse"
          >
            Ir a Whatsapp
            <WhatsAppIcon className="h-6 w-6" />
          </a>
        }
      />
    </>
  );
}
