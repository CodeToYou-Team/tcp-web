// ----> Función para obtener todos los vehículos <----
export async function getVehicles() {
  try {
    const query = new URLSearchParams();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/search?${query}`
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/latest`);
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
      `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${id}`
    );
    const vehicle = await res.json();

    return vehicle;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch vehicle by id data");
  }
};

// ----> Función para obtener las marcas de los vehículos <----

export const getBrands = async (context) => {
  try {
    const res_brands = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/brands`
    );
    const data_brands = await res_brands.json();
    return data_brands;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch vehicle brand");
  }
};
