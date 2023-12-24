import Navbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import LatestCars from "./layouts/LatestCars";
import Steps from "./layouts/Steps";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestCars />
      </Suspense>
      <Footer />
    </>
  );
}
