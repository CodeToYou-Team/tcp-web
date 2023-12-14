import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

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
      <h3>{product?.brand + " " + product?.model + " " + product?.version}</h3>
      <Image
        alt="latest-1"
        className="mt-2 h-full"
        src={product?.images[0]}
        width={231}
        height={132}
      />
      <Footer />
    </>
  );
}
