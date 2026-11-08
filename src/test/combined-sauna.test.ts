import { describe, expect, it } from "vitest";
import { combinedSaunaTemperatures } from "@/lib/combined-sauna";

describe("Combined sauna operating temperatures", () => {
  it("uses the supplied 80–100 °C Finnish range", () => {
    expect(combinedSaunaTemperatures.finn).toEqual({ min: 80, max: 100 });
  });
  it("uses the supplied 45–60 °C infrared range", () => {
    expect(combinedSaunaTemperatures.infra).toEqual({ min: 45, max: 60 });
  });
});