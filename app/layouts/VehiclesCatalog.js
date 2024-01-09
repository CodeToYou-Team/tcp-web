export const VehiclesLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="w-full mt-12 gap-6 grid grid-cols-12 justify-center">
        {children}
      </div>
    </div>
  );
};
