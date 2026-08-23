# Context — Tu Carro Propio (TCP)

Glosario de dominio y decisiones de diseño. Fuente de producto: `PRODUCT.md`.

## Domain Terms

- **Vehicle (Vehículo)** — unidad de inventario en MongoDB (colección `inventory`): marca, modelo, versión, año, precio, descuento, imágenes en Cloudinary. Se muestra como **VehicleCard**.
- **Inventory (Inventario)** — el catálogo vivo de Vehicles gestionado en MongoDB; la frescura importa (precios y disponibilidad cambian seguido).
- **Catalog Query (consulta del catálogo)** — la consulta del usuario sobre el inventario: filtros (tipo, marca, modelo, transmisión), rango de precio, búsqueda por texto, orden y página. Su dueño único es el módulo profundo `lib/catalog-query.ts` (formato de cable URL preservado por compatibilidad SEO).
- **Offers (Ofertas)** — Vehicles con `discount > 0`; listado sin paginación en `/ofertas`.
- **WhatsApp funnel** — toda conversión desemboca en contacto directo por WhatsApp.

## Design Decisions

- El formato de cable de las URLs del catálogo (`sort=Precio ascendente`, valores coma-join, `maxPrice=1000000` como tope abierto) está **preservado** porque ya está indexado en producción; la traducción a claves internas vive solo dentro de `lib/catalog-query.ts`.
- El acceso a datos es vía Server Actions (`app/lib/actions.ts`) directo a Mongoose. La antigua capa HTTP (`lib/services.ts`) y el endpoint `/api/cars` fueron **eliminados** (2026-08): no recrear peticiones HTTP propias para datos internos. Utilidades puras de formato viven en `lib/utils.ts`.
- No re-introducir filtros Mongo construidos fuera de `buildCarFilter()` (`lib/catalog-query.ts`); parámetros desconocidos del URL nunca llegan a la base de datos (allowlist).
- Identidad del sitio y canales de conversión (dominio, imagen SEO, ID de Google Analytics, teléfono WhatsApp) se toman solo de `lib/site-config.ts` — no duplicar literales.
- Política de frescura: el inventario se renderiza fresco (server actions + `force-dynamic` donde aplica); la deduplicación por request se hace con `cache()` de React (`getCar`). No cachear listas de marcas/modelos a nivel de módulo.
