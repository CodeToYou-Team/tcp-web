import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tu Carro Propio",
  description: "Concesionario de autos en Caracas",
  metadataBase: new URL("https://www.tucarropropiove.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/dkokeszcd/image/upload/v1707453262/portada-seo-static_dkqvwv.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className} antialised="true">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
