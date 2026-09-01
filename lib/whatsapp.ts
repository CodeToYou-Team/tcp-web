import { SITE_URL, WHATSAPP_PHONE } from "@/lib/site-config";
import type { Vehicle } from "@/lib/types";

// Deep link de WhatsApp para consultar por un vehículo específico.
// Única fuente para el CTA del panel y la barra móvil.
export function buildWhatsAppInquiry(vehicle: Vehicle): string {
  const text = `Buenas, estoy interesado/a en este vehículo ${SITE_URL}/catalogo/${vehicle._id}`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}
