// ----> Items del navbar <----

export const navbarItems = [
  { text: "Inicio", route: "/" },
  { text: "Catálogo", route: "/catalogo" },
  { text: "Vende tu auto", route: "/venta" },
  { text: "Detailing", route: "/detailing" },
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

// ----> Detailing <----

export const detailingWhatsappNumber = "584242234621";

export const detailingWhatsappMessage =
  "Hola, me gustaría solicitar más información sobre los servicios de Detailing para mi vehículo.";

export const detailingWhatsappLink = `https://api.whatsapp.com/send?phone=${detailingWhatsappNumber}&text=${encodeURIComponent(
  detailingWhatsappMessage
)}`;

// El campo "icon" se resuelve a un icono de lucide-react en DetailingServices.tsx
export const detailingServices = [
  {
    icon: "polish",
    name: "Corrección de Pintura y Pulido Profesional",
    description:
      "Eliminación de micro-rayones, marcas de agua y restauración del brillo original de la carrocería.",
  },
  {
    icon: "interior",
    name: "Limpieza Interna Profunda (Detallado de Interiores)",
    description:
      "Desinfección y limpieza detallada de tapicería (cuero o tela), alfombras, techo y plásticos, dejando el habitáculo como nuevo.",
  },
  {
    icon: "engine",
    name: "Acondicionamiento de Motor y Chasis",
    description:
      "Limpieza técnica y segura de la zona del motor y partes bajas, eliminando grasa y acumulaciones sin dañar componentes sensibles.",
  },
  {
    icon: "wash",
    name: "Lavado Tradicional y Aspirado",
    description:
      "Servicio rápido y cuidadoso de lavado exterior a mano, secado técnico y aspirado completo del interior para el mantenimiento diario de tu auto.",
  },
  {
    icon: "tint",
    name: "Instalación de Papel Ahumado (3M Nanocerámico y Wellstar)",
    description:
      "Películas de control solar de alta tecnología. Reducción extrema de calor, protección contra rayos UV y mayor privacidad y seguridad sin perder visibilidad nocturna. Trabajamos con marcas líderes como 3M (línea Nanocerámica) y Wellstar.",
  },
];

export const detailingBenefits = [
  {
    icon: "team",
    name: "Personal especializado",
    description: "Técnicos certificados en estética automotriz.",
  },
  {
    icon: "products",
    name: "Productos de alta gama",
    description: "Insumos importados de la más alta calidad del mercado.",
  },
  {
    icon: "warranty",
    name: "Garantía de satisfacción",
    description: "Cuidado minucioso en cada detalle de tu vehículo.",
  },
];

export const detailingFaq = [
  {
    question: "¿Cuánto tiempo toma el servicio?",
    answer:
      "Varía según el paquete seleccionado (desde 4 horas hasta 2 días para tratamientos cerámicos completos).",
  },
  {
    question: "¿Cómo puedo cotizar mi vehículo?",
    answer:
      "Puedes enviarnos un mensaje con el modelo y estado de tu auto para darte una recomendación exacta.",
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
