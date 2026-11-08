import { expect, it } from "vitest";
import { finnSaunaTemperature } from "@/lib/finn-sauna";

it("keeps the supplied Finnish sauna temperature range at 70–100 °C", () => {
  expect(finnSaunaTemperature).toEqual({ min: 70, max: 100 });
});