import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export const getVehicle = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${id}`
  );
  const vehicle = await res.json();

  return vehicle;
};

export default async function Product({ params }) {
  const { id } = params;
  const vehicle = await getVehicle(id);

  return (
    <>
      <Navbar />
      <h3>{vehicle?.brand + " " + vehicle?.model + " " + vehicle?.version}</h3>
      <Image
        alt="latest-1"
        className="mt-2 h-full"
        src={vehicle?.images[0]}
        width={231}
        height={132}
      />
      <Footer />
    </>
  );
}
