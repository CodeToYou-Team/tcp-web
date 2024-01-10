// ----> Función para obtener todos los vehículos <----
export async function getVehicles(query) {
  try {
    const res = await fetch(
      `https://tu-carro-propio.cyclic.app/inventory/search?${query}`,
      { cache: "no-store" }
    );
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch vehicles data");
  }
}

// ----> Función para obtener los últimos vehículos subidos <----
export async function getLatestVehicles() {
  try {
    const res = await fetch(`https://tu-carro-propio.cyclic.app/latest`);
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch latest vehicles data");
  }
}

// ----> Función para obtener los vehículos por su id <----
export const getVehicleById = async (id) => {
  try {
    const res = await fetch(
      `https://tu-carro-propio.cyclic.app/inventory/${id}`
    );
    const vehicle = await res.json();

    return vehicle;
  } catch (error) {
    console.error("Database error:", error);
    //throw new Error("Failed to fetch vehicle by id data");
  }
};

// ----> Función para obtener las marcas de los vehículos <----
export const getBrands = async (context) => {
  try {
    const res_brands = await fetch(`https://tu-carro-propio.cyclic.app/brands`);
    const data_brands = await res_brands.json();
    return data_brands;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch vehicle brand");
  }
};

// ----> Función para formatear el valor de kilometraje y precio <----
export const formatNumber = (number) => {
  const formatString =
    number !== undefined && number !== null ? number.toString() : "";
  if (formatString.length >= 4) {
    return formatString.slice(0, -3) + "." + formatString.slice(-3);
  }
  return formatString;
};

// ----> Función para obtener los vehículos recomendados <----
export async function getRecommendationCars(id, brand) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/recommendations?id=${id}&brand=${brand}`
    );
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error) {
    console.error("Database error:", error);
  }
}
