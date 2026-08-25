import { describe, it, expect } from "vitest";
import { dotWindow, MAX_VISIBLE_DOTS } from "../dot-window";

describe("dotWindow", () => {
  it("muestra la tira completa cuando hay pocos dots", () => {
    expect(dotWindow(0, 0)).toEqual({ windowSize: 0, start: 0 });
    expect(dotWindow(1, 0)).toEqual({ windowSize: 1, start: 0 });
    expect(dotWindow(3, 2)).toEqual({ windowSize: 3, start: 0 });
    expect(dotWindow(5, 4)).toEqual({ windowSize: 5, start: 0 });
  });

  it("centra el activo con ±2 vecinos en tiras largas", () => {
    expect(dotWindow(20, 10)).toEqual({
      windowSize: MAX_VISIBLE_DOTS,
      start: 8,
    });
    expect(dotWindow(20, 9)).toEqual({ windowSize: 5, start: 7 });
  });

  it("recorta contra el borde izquierdo cerca del inicio", () => {
    expect(dotWindow(20, 0)).toEqual({ windowSize: 5, start: 0 });
    expect(dotWindow(20, 1)).toEqual({ windowSize: 5, start: 0 });
    expect(dotWindow(20, 2)).toEqual({ windowSize: 5, start: 0 });
  });

  it("empieza a deslizar apenas el activo sale del centro izquierdo", () => {
    expect(dotWindow(20, 3)).toEqual({ windowSize: 5, start: 1 });
  });

  it("recorta contra el borde derecho cerca del final", () => {
    expect(dotWindow(20, 19)).toEqual({ windowSize: 5, start: 15 });
    expect(dotWindow(20, 18)).toEqual({ windowSize: 5, start: 15 });
    expect(dotWindow(20, 17)).toEqual({ windowSize: 5, start: 15 });
  });

  it("desliza hasta recortarse contra el borde derecho", () => {
    expect(dotWindow(20, 16)).toEqual({ windowSize: 5, start: 14 });
  });

  it("deja al activo dentro de la ventana en todo el recorrido", () => {
    for (let active = 0; active < 30; active++) {
      const { windowSize, start } = dotWindow(30, active);
      expect(windowSize).toBeLessThanOrEqual(MAX_VISIBLE_DOTS);
      expect(active).toBeGreaterThanOrEqual(start);
      expect(active).toBeLessThan(start + windowSize);
    }
  });
});
