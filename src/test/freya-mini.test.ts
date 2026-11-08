import { describe, expect, it } from "vitest";
import { freyaMini } from "@/lib/freya-mini";

describe("Supplied Freya mini specifications", () => {
  it("allows one to two people", () => expect(freyaMini.capacity).toEqual({ min: 1, max: 2 }));
  it("keeps the 115 × 110 × 210 cm dimensions", () => expect(freyaMini.dimensionsCm).toEqual({ width: 115, depth: 110, height: 210 }));
  it("requires 230 V single-phase 16 A", () => expect(freyaMini.electrical).toEqual({ voltage: 230, phases: 1, amperes: 16 }));
  it("uses the 3.5 kW Harvia Vega Compact", () => expect(freyaMini.heater).toEqual({ name: "Harvia Vega Compact", powerKw: 3.5 }));
  it("has 8 mm safety glass", () => expect(freyaMini.glassThicknessMm).toBe(8));
  it("has five years of structural warranty", () => expect(freyaMini.warrantyYears.structure).toBe(5));
  it("has two years of heater and electronics warranty", () => expect(freyaMini.warrantyYears.heaterAndElectronics).toBe(2));
});