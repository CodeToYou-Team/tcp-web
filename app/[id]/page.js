import AppNavbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const getProduct = async (context) => {
  /*   const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${context?.params?.id}`
  );
  const product = await res.json();

  return product; */
};

const product = getProduct();

export default function Product() {
  return (
    <>
      <AppNavbar />
      <h3>Single Item</h3>
      <Footer />
    </>
  );
}
