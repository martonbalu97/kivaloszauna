import { expect, it } from "vitest";
import { infraSaunaTemperature } from "@/lib/infra-sauna";

it("keeps the supplied infrared sauna temperature range at 40–60 °C", () => {
  expect(infraSaunaTemperature).toEqual({ min: 40, max: 60 });
});