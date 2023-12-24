import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageSlider from "@/components/ui/ImageSlider";
import CarInfo from "../layouts/CarInfo";
import { getVehicleById } from "@/lib/services";

export default async function Product(id) {
  const vehicle = await getVehicleById(id);

  return (
    <>
      <Navbar />
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ImageSlider vehicle={vehicle} />
            <CarInfo vehicle={vehicle} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
