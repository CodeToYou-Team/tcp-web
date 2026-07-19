// ----> Función para obtener todos los vehículos <----
export async function getVehicles(query: string) {
  try {
    //console.log(`${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/search?${query}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/search?${query}`,
      { cache: "no-store" }
    );
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error: any) {
    //console.error("Database error:", error);
    console.log("Failed to fetch vehicles data")
    return [];
    //throw new Error("Failed to fetch vehicles data");
  }
}

// ----> Función para obtener los últimos vehículos subidos <----
export async function getLatestVehicles() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/latest`, {
      cache: "no-store",
    });
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error: any) {
    //console.error("Database error:", error);
    console.log("Failed to fetch latest vehicles data")
    return [];
    //throw new Error("Failed to fetch latest vehicles data");
  }
}

// ----> Función para obtener los vehículos por su id <----
export const getVehicleById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${id}`,
      { cache: "no-store" }
    );
    const vehicle = await res.json();

    return vehicle;
  } catch (error: any) {
    //console.error("Database error:", error);
    console.log("Failed to fetch vehicle by id data")
    return [];
    //throw new Error("Failed to fetch vehicle by id data");
  }
};

// ----> Función para obtener las marcas de los vehículos <----
export const getBrands = async (context: any) => {
  try {
    const res_brands = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/brands`,
      { cache: "no-store" }
    );
    const data_brands = await res_brands.json();
    return data_brands;
  } catch (error: any) {
    //console.error("Database error:", error);
    console.log("Failed to fetch vehicle brand")
    return [];
    //throw new Error("Failed to fetch vehicle brand");
  }
};

// ----> Función para formatear el valor de kilometraje y precio <----
export const formatNumber = (number: number | string | undefined | null) => {
  const formatString =
    number !== undefined && number !== null ? number.toString() : "";
  if (formatString.length >= 4) {
    return formatString.slice(0, -3) + "." + formatString.slice(-3);
  }
  return formatString;
};

// ----> Función para obtener los vehículos recomendados <----
export async function getRecommendationCars(id: string, brand: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/recommendations?id=${id}&brand=${brand}`,
      { cache: "no-store" }
    );
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error: any) {
    console.log("Failed to fetch recommendations cars")
    return [];
    //console.error("Database error:", error);
  }
}

// ----> Función para obtener los modelos asociados a una marca <----
export async function getModels(brand: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/models?brand=${brand}`,
      { cache: "no-store" }
    );
    const data_vehicles = await res.json();

    return data_vehicles;
  } catch (error: any) {
    console.log("Failed to fetch models")
    return [];
    //console.error("Database error:", error);
  }
}

// ----> Función para obtener los vehículos en oferta <----

export async function getOffers() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/offers/search`,
      { cache: "no-store" }
    );
    const data_offers = await res.json();

    return data_offers;
  } catch (error: any) {
    console.log("Failed to fetch offers cars")
    return [];
    //console.error("Database error:", error);
  }
}
