import Image from "next/image";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dkokeszcd/image/upload/v1727228641/tcp-web/0694f89d-a97e-4d4d-99d5-1d6038900b94_wbupkw.jpg",
    alt: "Frente de la sede de Tu Carro Propio",
  },
  {
    src: "https://res.cloudinary.com/dkokeszcd/image/upload/v1727228707/tcp-web/23187ddf-01ad-4d63-96e8-89cf796fb0bd_jzg9tt.jpg",
    alt: "Vehículos exhibidos en la sede de Tu Carro Propio",
  },
  {
    src: "https://res.cloudinary.com/dkokeszcd/image/upload/v1727228986/tcp-web/e0cd017f-983d-4206-8843-7072c6f94a1c_mvsg3e.jpg",
    alt: "Área de atención al cliente de Tu Carro Propio",
  },
  {
    src: "https://res.cloudinary.com/dkokeszcd/image/upload/v1727229180/tcp-web/2b264e1b-eabd-4b05-b8ff-583ebced3df9_cwlfpm.jpg",
    alt: "Oficina de Tu Carro Propio",
  },
];

const ImagesLayout = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8">
      {galleryImages.map((image) => (
        <div
          key={image.src}
          className="relative aspect-square overflow-hidden rounded-xl bg-muted"
        >
          <Image
            alt={image.alt}
            src={image.src}
            fill
            sizes="(min-width: 1280px) 38rem, (min-width: 640px) 50vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesLayout;
