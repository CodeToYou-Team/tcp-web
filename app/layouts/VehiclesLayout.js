import React from "react";

export const VehiclesLayout = ({ children, title }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-16">
      {title && (
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            {title}
          </h2>
        </div>
      )}
      <div className="w-full mt-12 gap-6 grid grid-cols-12 justify-center">
        {children}
      </div>
    </div>
  );
};
