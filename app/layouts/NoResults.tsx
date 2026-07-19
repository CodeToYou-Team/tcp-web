import Image from "next/image";

const NoResults = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 mx-16 h-2/3 my-12">
      <div className="flex flex-col items-center justify-center sm:items-start md:py-4 lg:py-32">
        <h1 className="mb-2 text-center text-xl font-bold text-graffiti-500 sm:text-left md:text-3xl">
          ¡Oops!
        </h1>
        <h1 className="mb-2 text-center text-xl font-bold  sm:text-left md:text-3xl">
          Tu búsqueda no obtuvo resultados
        </h1>

        <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
          Intenta añadir otros parámetros en tu búsqueda.
        </p>
      </div>

      <div className="relative h-90 overflow-hidden md:h-auto ml-10">
        <Image
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1704758823/tcp-web/no-results-tcp_ojl5jx.png"
          width={1000}
          height={1000}
          alt="no-results"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default NoResults;
