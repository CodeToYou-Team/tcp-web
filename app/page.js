import AppNavbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import LastCars from "./layouts/LastCars";
import Steps from "./layouts/Steps";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Brands />
      <Steps />
      <LastCars />
      <Footer />
    </>
  );
}
