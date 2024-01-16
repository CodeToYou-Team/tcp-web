const VehicleDetails = ({ vehicle }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-16 mt-10 justify-center text-center gap-16">
        <div className="max-w-xs md:max-w-sm">
          <h2 className="font-bold text-xl">Características</h2>
          {vehicle.tapizado && (
            <p>
              <span className="text-md md:text-lg font-normal mr-3">
                Tapizado:
              </span>
              <span className="font-semibold">{vehicle.tapizado}</span>
            </p>
          )}
        </div>
        <div className="max-w-xs md:max-w-sm">
          <h2>Detalles</h2>
          {vehicle.details && (
            <p>
              <span className="font-semibold">{vehicle.details}</span>
            </p>
          )}
        </div>
        <div className="max-w-xs md:max-w-sm">
          <h2>Extras</h2>
          {vehicle.tapizado && (
            <p>
              <span className="text-md md:text-lg font-normal mr-3">
                Tapizado:
              </span>
              <span className="font-semibold">{vehicle.tapizado}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
