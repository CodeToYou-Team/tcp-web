// Geometría de la tira de dots: paso fijo entre centros y ventana visible.
// Debe coincidir con el ancho real de cada botón de dot (w-6 = 24px).
export const DOT_PITCH = 24;
export const MAX_VISIBLE_DOTS = 5;

export interface DotWindow {
  windowSize: number;
  start: number;
}

// Ventana deslizante sobre la tira de dots: el activo queda centrado con
// ±2 vecinos; en los extremos la ventana se recorta contra el borde.
export function dotWindow(count: number, activeIndex: number): DotWindow {
  const windowSize = Math.min(count, MAX_VISIBLE_DOTS);
  const start = Math.max(
    0,
    Math.min(activeIndex - Math.floor(MAX_VISIBLE_DOTS / 2), count - windowSize)
  );
  return { windowSize, start };
}
