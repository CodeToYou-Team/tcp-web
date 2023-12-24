import Navbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import LastCars from "./layouts/LastCars";
import Steps from "./layouts/Steps";

export const getLastVehicles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/latest`);
  const data_vehicles = await res.json();

  return data_vehicles;
};

const lastVehicles = await getLastVehicles();

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Steps />
      <LastCars lastVehicles={lastVehicles} />
      <Footer />
    </>
  );
}
