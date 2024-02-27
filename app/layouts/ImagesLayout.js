import Image from "next/image";

const ImagesLayout = () => {
  return (
    <>
      <div className="w-5/6 lg:w-4/6 mt-6 lg:mt-24 h-1/3 grid grid-cols-2 grid-rows-2 gap-4 mx-auto">
        <Image
          alt="office-1"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1708944755/tcp-web/11bfdc12-4288-49d0-923e-f4f6d5386b18_x9ccfv.jpg"
          width={1080}
          height={1080}
        />
        <Image
          alt="office-2"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1708944741/tcp-web/fffd0cad-dc84-43f8-ac41-48890f2350a8_u6cogr.jpg"
          width={1080}
          height={1080}
        />
        <Image
          alt="office-3"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1708944736/tcp-web/06af55ab-80dc-48a4-867e-5bae5eabda28_rzfavn.jpg"
          width={810}
          height={1080}
        />
        <Image
          alt="office-4"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1687847999/tcp-web/oficina2_m5ikps.jpg"
          width={810}
          height={1080}
        />
      </div>
    </>
  );
};

export default ImagesLayout;
