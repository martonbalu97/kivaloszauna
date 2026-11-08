import { describe, expect, it } from "vitest";
import { commercialProjects } from "@/components/commercial-projects";

describe("Supplied commercial project specifications", () => {
  it("keeps Hotel Ózon's one 36-person communal sauna", () => {
    expect(commercialProjects[0]?.saunas[0]).toEqual({ quantity: 1, capacity: 36 });
  });
  it("keeps Hotel Ózon's eleven 3-person private saunas", () => {
    expect(commercialProjects[0]?.saunas[1]).toEqual({ quantity: 11, capacity: 3 });
  });
  it("keeps Botaniq's single bespoke sauna", () => {
    expect(commercialProjects[1]?.saunas).toEqual([{ quantity: 1 }]);
  });
});