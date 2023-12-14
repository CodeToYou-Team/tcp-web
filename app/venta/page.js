"use-client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SellSteps from "../layouts/SellSteps";
import CTA from "../layouts/CTA";

export default function Catalogo() {
  return (
    <>
      <Navbar />
      <SellSteps />
      <CTA />
      <Footer />
    </>
  );
}
