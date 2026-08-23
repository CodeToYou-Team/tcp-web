"use client";
import {
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import type { Vehicle } from "@/lib/types";

// Media query reactiva con snapshot seguro para SSR.
function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => mediaQueryList.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

// Token graffiti-500 (tailwind.config.js) para las variables CSS de Swiper.
const ACCENT = "#fcf744";

const SWIPER_VARS = {
  "--swiper-pagination-color": ACCENT,
  "--swiper-pagination-bullet-inactive-color": "#ffffff",
  "--swiper-pagination-bullet-inactive-opacity": "0.45",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-navigation-color": ACCENT,
} as CSSProperties;

// Ampliación del zoom por doble click en desktop (equivalente al 200% histórico).
const ZOOM_RATIO = 2;

function cloudinary(url: string, transform: string) {
  return `${url}${url.includes("?") ? "&" : "?"}tr=${transform}`;
}

const ImageSlider = ({ vehicle }: { vehicle: Vehicle }) => {
  const slides = vehicle?.images ?? [];

  const [activeIndex, setActiveIndex] = useState(0);
  // Slide ampliado actualmente; el zoom solo entra/sale con doble click.
  const [zoomedSlide, setZoomedSlide] = useState<number | null>(null);
  // Refs directos a las <img>: el zoom escribe estilos sin re-renders.
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (slides.length === 0) return null;

  const vehicleName = [vehicle?.brand, vehicle?.model, vehicle?.version]
    .filter(Boolean)
    .join(" ");
  const hasMultiple = slides.length > 1;

  const clearZoomStyles = (image: HTMLImageElement | null | undefined) => {
    if (!image) return;
    image.style.transformOrigin = "";
    image.style.transform = "";
  };

  // Doble click alterna el zoom centrado donde se hizo click.
  const toggleZoom =
    (slideIndex: number) => (event: MouseEvent<HTMLDivElement>) => {
      const image = imageRefs.current[slideIndex];
      if (!image) return;

      if (zoomedSlide === slideIndex) {
        clearZoomStyles(image);
        setZoomedSlide(null);
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const originX = ((event.clientX - rect.left) / rect.width) * 100;
      const originY = ((event.clientY - rect.top) / rect.height) * 100;
      image.style.transformOrigin = `${originX}% ${originY}%`;
      image.style.transform = `scale(${ZOOM_RATIO})`;
      setZoomedSlide(slideIndex);
    };

  // Mientras el zoom está activo, el puntero panea el foco de la imagen.
  const panZoom =
    (slideIndex: number) => (event: MouseEvent<HTMLDivElement>) => {
      if (zoomedSlide !== slideIndex) return;
      const image = imageRefs.current[slideIndex];
      if (!image) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const originX = ((event.clientX - rect.left) / rect.width) * 100;
      const originY = ((event.clientY - rect.top) / rect.height) * 100;
      image.style.transformOrigin = `${originX}% ${originY}%`;
    };

  // Salir del zoom al salir de la foto o cambiar de slide.
  const resetZoom = (slideIndex: number) => () => {
    clearZoomStyles(imageRefs.current[slideIndex]);
    setZoomedSlide((current) => (current === slideIndex ? null : current));
  };

  return (
    <div className="vehicle-gallery relative w-full min-w-0">
      <Swiper
        style={SWIPER_VARS}
        modules={[Navigation, Pagination]}
        onSlideChange={(instance) => {
          imageRefs.current.forEach(clearZoomStyles);
          setZoomedSlide(null);
          setActiveIndex(instance.activeIndex);
        }}
        navigation={hasMultiple}
        pagination={hasMultiple ? { clickable: true } : false}
        speed={reducedMotion ? 0 : 300}
        grabCursor={true}
        className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-800 sm:aspect-[16/10]"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={`${slide}-${slideIndex}`} className="h-full w-full">
            <div
              className={cn(
                "swiper-zoom-container h-full w-full touch-manipulation select-none",
                zoomedSlide === slideIndex ? "cursor-zoom-out" : "cursor-zoom-in"
              )}
              onDoubleClick={toggleZoom(slideIndex)}
              onMouseMove={panZoom(slideIndex)}
              onMouseLeave={resetZoom(slideIndex)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(node) => {
                  imageRefs.current[slideIndex] = node;
                }}
                src={cloudinary(slide, "w-1200,q_auto,f_auto")}
                alt={`Foto ${slideIndex + 1} de ${vehicleName || "el vehículo"}`}
                className="h-full w-full object-cover transition-transform"
                draggable={false}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                fetchPriority={slideIndex === 0 ? "high" : "auto"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultiple && (
        <p
          aria-hidden="true"
          className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm md:hidden"
        >
          {activeIndex + 1}/{slides.length}
        </p>
      )}
    </div>
  );
};

export default ImageSlider;
