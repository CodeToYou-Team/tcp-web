import Image from "next/image";

const ImagesLayout = () => {
  return (
    <>
      <div className="w-11/12 md:w-8/12 mt-6 md:mt-24 h-1/4 grid grid-cols-2 grid-rows-2 gap-4 mx-auto">
        <Image
          alt="office-1"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228641/tcp-web/0694f89d-a97e-4d4d-99d5-1d6038900b94_wbupkw.jpg"
          width={1080}
          height={1080}
        />
        <Image
          alt="office-2"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228707/tcp-web/23187ddf-01ad-4d63-96e8-89cf796fb0bd_jzg9tt.jpg"
          width={1080}
          height={1080}
        />
        <Image
          alt="office-3"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228986/tcp-web/e0cd017f-983d-4206-8843-7072c6f94a1c_mvsg3e.jpg"
          width={810}
          height={1080}
        />
        <Image
          alt="office-4"
          className="rounded-lg h-full"
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727229180/tcp-web/2b264e1b-eabd-4b05-b8ff-583ebced3df9_cwlfpm.jpg"
          width={810}
          height={1080}
        />
      </div>
    </>
  );
};

export default ImagesLayout;
