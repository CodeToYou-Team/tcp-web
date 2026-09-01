"use client";
import {
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "@/lib/utils";
import { DOT_PITCH, dotWindow } from "@/lib/dot-window";
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
    () => false,
  );
}

// Token graffiti-500 (tailwind.config.js) para las variables CSS de Swiper.
const ACCENT = "#fcf744";

const SWIPER_VARS = {
  "--swiper-navigation-color": ACCENT,
} as CSSProperties;

// Efecto de presión en las flechas que genera Swiper, escrito solo con
// utilidades Tailwind vía variantes arbitrarias sobre el contenedor.
const NAV_PRESS_EFFECT =
  "[&_.swiper-button-next]:transition-transform [&_.swiper-button-prev]:transition-transform " +
  "[&_.swiper-button-next]:duration-150 [&_.swiper-button-prev]:duration-150 " +
  "[&_.swiper-button-next:active]:scale-90 [&_.swiper-button-prev:active]:scale-90 " +
  "[&_.swiper-button-next]:motion-reduce:transition-none " +
  "[&_.swiper-button-prev]:motion-reduce:transition-none";

// Tira con ventana deslizante (lib/dot-window): el activo queda centrado
// con ±2 vecinos; en los extremos la ventana se recorta contra el borde.
const DotStrip = ({
  count,
  activeIndex,
  onSelect,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) => {
  const { windowSize, start } = dotWindow(count, activeIndex);
  const inWindow = (index: number) =>
    index >= start && index < start + windowSize;
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Roving tabindex con flechas: mueven el activo y el foco juntos, de modo
  // que el foco nunca quede en un dot recortado fuera de la ventana.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = Math.min(count - 1, Math.max(0, activeIndex + delta));
    if (next === activeIndex) return;
    onSelect(next);
    buttonRefs.current[next]?.focus({ preventScroll: true });
  };

  return (
    <div
      className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2"
      onKeyDown={handleKeyDown}
    >
      <div
        className="overflow-hidden drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
        style={{ width: windowSize * DOT_PITCH }}
      >
        <div
          className="flex w-max transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${start * DOT_PITCH}px)` }}
        >
          {Array.from({ length: count }, (_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                type="button"
                onClick={() => onSelect(index)}
                tabIndex={inWindow(index) ? 0 : -1}
                aria-label={`Ir a la foto ${index + 1}`}
                aria-current={isActive || undefined}
                className="pointer-events-auto flex h-6 w-5 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-graffiti-500"
              >
                <span
                  className={cn(
                    "rounded-full transition-all duration-300 motion-reduce:transition-none",
                    isActive
                      ? "h-[11px] w-[11px] bg-graffiti-500"
                      : Math.abs(index - activeIndex) === 1
                        ? "h-1.5 w-1.5 bg-white/70"
                        : "h-1.5 w-1.5 bg-white/50",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

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
  const swiperRef = useRef<SwiperClass | null>(null);
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
    <div className={`vehicle-gallery relative min-w-0 md:w-11/12 ${NAV_PRESS_EFFECT}`}>
      <Swiper
        style={SWIPER_VARS}
        modules={[Navigation]}
        onSlideChange={(instance) => {
          imageRefs.current.forEach(clearZoomStyles);
          setZoomedSlide(null);
          setActiveIndex(instance.activeIndex);
        }}
        onSwiper={(instance) => {
          swiperRef.current = instance;
        }}
        navigation={hasMultiple}
        speed={reducedMotion ? 0 : 300}
        grabCursor={true}
        className="aspect-square w-full overflow-hidden rounded-lg bg-zinc-800"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={`${slide}-${slideIndex}`} className="h-full w-full">
            <div
              className={cn(
                "swiper-zoom-container h-full w-full touch-manipulation select-none",
                zoomedSlide === slideIndex
                  ? "cursor-zoom-out"
                  : "cursor-zoom-in",
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
        <DotStrip
          count={slides.length}
          activeIndex={activeIndex}
          onSelect={(index) => swiperRef.current?.slideTo(index)}
        />
      )}

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
