import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const combinedClasses = `bg-zinc-900 text-slate-100 scrollbar-thumb-gray-900 ${inter.className}`;

export const metadata = {
  title: "Tu Carro Propio",
  description: "Concesionario de autos en Caracas",
  metadataBase: new URL("https://tcp-web-iota.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={combinedClasses}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
