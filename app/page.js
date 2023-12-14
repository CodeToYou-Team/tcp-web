import Navbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import LastCars from "./layouts/LastCars";
import Steps from "./layouts/Steps";

export const getLastProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/latest`);
  const data_products = await res.json();

  return data_products;
};

const lastProducts = await getLastProducts();

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Steps />
      <LastCars lastProducts={lastProducts} />
      <Footer />
    </>
  );
}
