"use-client";

import AppNavbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SellSteps from "../layouts/SellSteps";
import CTA from "../layouts/CTA";

export default function Catalogo() {
  return (
    <>
      <AppNavbar />
      <SellSteps />
      <CTA />
      <Footer />
    </>
  );
}
