import { describe, it, expect } from "vitest";
import {
  parseSearchParams,
  setMultiValues,
  setSingleValue,
  setPriceRange,
  setPage,
  readPriceRange,
  buildCarFilter,
  PAGE_SIZE,
  PRICE_SLIDER_MAX,
  PRICE_OPEN_WIRE_MAX,
} from "../catalog-query";

describe("parseSearchParams", () => {
  it("devuelve defaults con params vacíos", () => {
    expect(parseSearchParams(new URLSearchParams(""))).toEqual({
      page: 1,
      sort: "reciente",
    });
  });

  it("traduce etiquetas de orden a claves", () => {
    const q = parseSearchParams(
      new URLSearchParams("sort=Precio%20ascendente")
    );
    expect(q.sort).toBe("ascendente");
  });

  it("acepta claves de orden directas y rechaza inválidas", () => {
    expect(parseSearchParams(new URLSearchParams("sort=descendente")).sort).toBe(
      "descendente"
    );
    expect(parseSearchParams(new URLSearchParams("sort=inventado")).sort).toBe(
      "reciente"
    );
  });

  it("separa listas por comas", () => {
    const q = parseSearchParams(
      new URLSearchParams("brand=toyota,honda&type=Carro")
    );
    expect(q.brand).toEqual(["toyota", "honda"]);
    expect(q.type).toEqual(["Carro"]);
  });

  it("convierte precios y página a números", () => {
    const q = parseSearchParams(
      new URLSearchParams("minPrice=5000&maxPrice=1000000&page=3")
    );
    expect(q.minPrice).toBe(5000);
    expect(q.maxPrice).toBe(1000000);
    expect(q.page).toBe(3);
  });

  it("sanea página inválida", () => {
    expect(parseSearchParams(new URLSearchParams("page=abc")).page).toBe(1);
    expect(parseSearchParams(new URLSearchParams("page=-2")).page).toBe(1);
  });

  it("ignora parámetros desconocidos (allowlist)", () => {
    const q = parseSearchParams(new URLSearchParams("hack={$gt}&foo=bar"));
    expect(q).toEqual({ page: 1, sort: "reciente" });
  });

  it("funciona con el objeto searchParams del servidor", () => {
    const q = parseSearchParams({
      brand: "toyota",
      sort: ["Precio descendente"],
      page: "2",
      search: "corolla",
    });
    expect(q.brand).toEqual(["toyota"]);
    expect(q.sort).toBe("descendente");
    expect(q.page).toBe(2);
    expect(q.search).toBe("corolla");
  });
});

describe("operaciones sobre URL", () => {
  it("setMultiValues une por comas y reinicia la página", () => {
    const next = setMultiValues(
      new URLSearchParams("brand=toyota&page=4"),
      "brand",
      ["toyota", "honda"]
    );
    expect(next.get("brand")).toBe("toyota,honda");
    expect(next.has("page")).toBe(false);
  });

  it("setMultiValues elimina la clave con lista vacía", () => {
    const next = setMultiValues(
      new URLSearchParams("brand=toyota"),
      "brand",
      []
    );
    expect(next.has("brand")).toBe(false);
  });

  it("setSingleValue escribe o elimina según valor", () => {
    const withValue = setSingleValue(new URLSearchParams(""), "search", "corolla");
    expect(withValue.get("search")).toBe("corolla");

    const cleared = setSingleValue(withValue, "search", "");
    expect(cleared.has("search")).toBe(false);
  });

  it("setPriceRange codifica el máximo abierto como valor de cable", () => {
    const open = setPriceRange(new URLSearchParams(""), 0, PRICE_SLIDER_MAX);
    expect(open.get("maxPrice")).toBe(String(PRICE_OPEN_WIRE_MAX));

    const bounded = setPriceRange(new URLSearchParams(""), 5000, 40000);
    expect(bounded.get("maxPrice")).toBe("40000");
    expect(bounded.get("minPrice")).toBe("5000");
  });

  it("setPage conserva el resto de los parámetros", () => {
    const next = setPage(new URLSearchParams("brand=toyota"), 7);
    expect(next.get("page")).toBe("7");
    expect(next.get("brand")).toBe("toyota");
  });

  it("round-trip: operaciones + parse son consistentes", () => {
    let params = new URLSearchParams("");
    params = setMultiValues(params, "brand", ["toyota", "honda"]);
    params = setMultiValues(params, "type", ["Carro"]);
    params = setSingleValue(params, "search", "corolla");
    params = setPriceRange(params, 10000, PRICE_SLIDER_MAX);
    params = setPage(params, 2);

    const q = parseSearchParams(params);
    expect(q).toEqual({
      page: 2,
      sort: "reciente",
      search: "corolla",
      brand: ["toyota", "honda"],
      type: ["Carro"],
      minPrice: 10000,
      maxPrice: PRICE_OPEN_WIRE_MAX,
    });
  });
});

describe("readPriceRange", () => {
  it("usa defaults sin parámetros", () => {
    expect(readPriceRange(new URLSearchParams(""))).toEqual([0, PRICE_SLIDER_MAX]);
  });

  it("acota el máximo de cable al tope del slider", () => {
    expect(readPriceRange(new URLSearchParams("maxPrice=1000000"))).toEqual([
      0,
      PRICE_SLIDER_MAX,
    ]);
  });
});

describe("buildCarFilter", () => {
  it("siempre exige vehículos habilitados", () => {
    expect(buildCarFilter({ page: 1, sort: "reciente" })).toEqual({
      enabled: true,
    });
  });

  it("construye cláusulas $and para cada faceta activa", () => {
    const filter = buildCarFilter({
      page: 1,
      sort: "reciente",
      type: ["Carro"],
      brand: ["toyota", "honda"],
      model: ["corolla"],
      transmission: ["Automático"],
      minPrice: 1000,
      maxPrice: 50000,
    });

    expect(filter.$and).toEqual([
      { type: { $in: ["Carro"] } },
      { brand: { $in: ["toyota", "honda"] } },
      { model: { $in: ["corolla"] } },
      { transmission: { $in: ["Automático"] } },
      { price: { $gte: 1000, $lte: 50000 } },
    ]);
  });

  it("acepta límites de precio unilaterales", () => {
    const filter = buildCarFilter({
      page: 1,
      sort: "reciente",
      maxPrice: 20000,
    });
    expect(filter.$and).toEqual([{ price: { $lte: 20000 } }]);
  });

  it("omite cláusulas de listas vacías", () => {
    const filter = buildCarFilter({ page: 1, sort: "reciente", brand: [] });
    expect(filter).toEqual({ enabled: true });
  });

  it("usa el tamaño de página exportado", () => {
    expect(PAGE_SIZE).toBe(9);
  });
});
