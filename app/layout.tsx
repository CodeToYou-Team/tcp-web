import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import type { ReactNode } from "react";
import { GA_MEASUREMENT_ID, SEO_IMAGE, SITE_URL } from "@/lib/site-config";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tu Carro Propio",
  description: "Concesionario de autos en Caracas",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></Script>
        <Script id="google-analytics">
          {`   window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={poppins.className}
        {...({ antialised: "true" } as any)}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
