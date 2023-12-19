const CarInfo = ({ product }) => {
  return (
    <>
      <div className="px-4 md:py-8 text-center">
        <div className="mb-2 md:mb-3">
          <h2 className=" text-4xl lg:text-5xl font-bold gap-2 mb-4 md:mb-6">
            {product.brand} {product.model} {product.version}
          </h2>
        </div>
        <div className="mb-4">
          {product.discount !== 0 ? (
            <div className="flex justify-center my-4">
              <span className="text-red-500 line-through text-xl px-1 pt-3 md:pt-3 mb-0.5">
                ${product.price}
              </span>
              <span className=" text-5xl md:text-5xl font-bold">
                ${product.finalPrice}
              </span>
            </div>
          ) : (
            <div className="">
              <span className=" text-5xl md:text-5xl font-bold">
                ${product.price}
              </span>
            </div>
          )}
          <div className="justify-start">
            <p className="flex items-center mt-8">
              <span className="text-md md:text-lg font-normal mr-3">
                Procesador
              </span>

              <span className=" font-semibold">{product.processor}</span>
            </p>

            <p className="flex items-center">
              <span className="text-md md:text-lg font-normal mr-3">Ram</span>

              <span className=" font-semibold">{product.ram}</span>
            </p>
            <p className="flex items-center">
              <span className="text-md md:text-lg font-normal mr-3 ">
                Disco duro
              </span>

              <span className="font-semibold">{product.storage}</span>
            </p>

            <p className="flex items-center">
              {product.graphics != "" ? (
                <>
                  <span className="text-md md:text-lg font-normal mr-3 ">
                    Tarjeta gráfica
                  </span>
                  <span className="font-semibold">{product.graphics}</span>
                </>
              ) : (
                <></>
              )}
            </p>
          </div>
        </div>
        <div className="py-4 text-start">
          <span className="text-gray-500 text-sm">
            Disponible en: {product.location}
          </span>
        </div>
        <div className="flex items-center text-gray-500 gap-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>

          <span className="text-sm">2-4 días de envío.</span>
        </div>
        <div className="flex justify-center md:justify-start gap-2 mt-10">
          <button className="inline-block sm:flex-none px-6 mx-1 text-gray-800 bg-emerald-500 hover:bg-emerald-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 py-3">
            Agregar al carrito
          </button>

          <button className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
