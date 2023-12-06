import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const combinedClasses = `bg-zinc-900 text-slate-100 ${inter.className}`;

export const metadata = {
  title: "TU CARRO PROPIO",
  description: "Concesionario de autos en Caracas",
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
