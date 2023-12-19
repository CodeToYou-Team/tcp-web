import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import ImageSlider from "@/components/ui/ImageSlider";
import CarInfo from "../layouts/CarInfo";

export const getProduct = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${id}`
  );
  const product = await res.json();

  return product;
};

export default async function Product({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <>
      <Navbar />

      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ImageSlider product={product} />
            <CarInfo product={product} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
