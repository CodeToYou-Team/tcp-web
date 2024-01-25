import { Button } from "@nextui-org/react";
import { Gift } from "lucide-react";

const SectionBanner = ({ children }) => {
  return (
    <>
      <div className="fixed top-14 h-10 justify-left pb-6 z-50 flex w-full  border-b border-zinc-800 bg-zinc-900">
        <div className="flex items-center md:ml-14">
          {children}
          <Button
            disableAnimation={true}
            className="flex w-auto mt-6 font-semibold text-md bg-transparent text-graffiti-500"
          >
            <Gift className="text-graffiti-500 scale-85" />
            Ofertas
          </Button>
        </div>
      </div>
    </>
  );
};

export default SectionBanner;
