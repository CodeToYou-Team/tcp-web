// ----> Items del navbar <----

export const navbarItems = [
  { text: "Inicio", route: "/" },
  { text: "Catálogo", route: "/catalogo" },
  { text: "Vende tu auto", route: "/venta" },
  { text: "Acerca de nosotros", route: "/acerca-de-nosotros" },
];

// ----> Parámetros de filtrado <----

import type { FilterOption } from "./types";

export const vehicleType: FilterOption[] = [
  { name: "Carro" },
  { name: "Camioneta" },
  { name: "Camión" },
  { name: "Moto" },
];

export const transmission: FilterOption[] = [
  { name: "Automático" },
  { name: "Sincrónico" },
];

export const sort: FilterOption[] = [
  { name: "Agregado recientemente" },
  { name: "Precio ascendente" },
  { name: "Precio descendente" },
];

// ----> Pasos de venta <----

export const sellSteps = [
  {
    name: "Limpia tu vehículo",
    description:
      "Trae tu vehículo limpio, le tomaremos fotografías para su exposición.",
  },
  {
    name: "Avalúo",
    description:
      "Le haremos un avalúo a tu vehículo que incluye revisión mecánica y legal.",
  },
  {
    name: "Registro de datos",
    description:
      "Registraremos los datos de tu vehículo en nuestra base de datos.",
  },
  {
    name: "Documentación",
    description:
      "Debes ser el propietario del carro y debes presentar la documentación el día de la inspección.",
  },

  {
    name: "Fotografía y vídeo",
    description:
      "El proceso tarda un máximo de 20 minutos. Te proporcionamos fotos y vídeos de máxima calidad",
  },

  {
    name: "Precio de venta",
    description:
      "Nuestro equipo te recomendará un precio para tu vehículo, pero tú tienes la última palabra.",
  },
  {
    name: "Citas",
    description:
      "Nos encargamos de posicionar tu auto en nuestras plataformas, y al tener un interesado programaremos una cita para promover la venta del vehículo.",
  },
];

export const consignationSteps = [
  {
    name: "1.	Título de propiedad del vehículo.",
  },
  {
    name: "2.	Original y copia de la Cédula de Identidad y/o RIF en caso de ser persona jurídica.",
  },
  {
    name: "3.	Factura y certificado de origen del vehículo (en caso de tener)",
  },
  {
    name: "4.	Carta de liberación de reserva de dominio.",
  },

  {
    name: "5.	Manuales del vehículo.",
  },

  {
    name: "6.	Duplicado de llaves.",
  },
  {
    name: "7.	Historial de mantenimiento.",
  },
];
