import { describe, expect, it } from "vitest";
import { saunaTypes } from "@/components/sauna-types";

describe("Sauna type catalogue", () => {
  it("links each sauna to its corresponding detail page", () => {
    expect(saunaTypes.map(({ name, to }) => [name, to])).toEqual([
      ["Finn szauna", "/finn-szauna"],
      ["2 fős mini finn szauna", "/freya-mini-szauna"],
      ["Infraszauna", "/infraszauna"],
      ["Kombinált szauna", "/kombinalt-szauna"],
      ["Szaunaház", "/szaunahaz"],
      ["Közületi szauna", "/kozuleti-szaunak"],
      ["Sókamra", "/sokabin-es-sokamra"],
    ]);
  });
  it("keeps all seven requested categories in their specified order", () => {
    expect(saunaTypes.map((type) => type.name)).toEqual([
      "Finn szauna",
      "2 fős mini finn szauna",
      "Infraszauna",
      "Kombinált szauna",
      "Szaunaház",
      "Közületi szauna",
      "Sókamra",
    ]);
  });
});