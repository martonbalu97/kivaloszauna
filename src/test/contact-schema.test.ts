import { describe, expect, it } from "vitest";
import { contactSchema } from "../lib/contact-schema";

const valid = { name: "Teszt", phone: "+36301234567", email: "test@example.com", sauna_type: "Finn szauna", message: "Ajánlatot szeretnék." };
describe("contact validation", () => {
  it("accepts all seven offered sauna types", () => {
    for (const sauna_type of ["Finn szauna", "2 fős mini finn szauna", "Infraszauna", "Kombinált szauna", "Szaunaház", "Közületi szauna", "Sókamra"]) expect(contactSchema.safeParse({ ...valid, sauna_type }).success).toBe(true);
    expect(contactSchema.safeParse({ ...valid, sauna_type: "Ismeretlen" }).success).toBe(false);
  });
  it("rejects missing required fields and invalid email or phone", () => {
    for (const key of ["name", "phone", "email", "sauna_type", "message"]) expect(contactSchema.safeParse({ ...valid, [key]: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, phone: "abcdefghi" }).success).toBe(false);
  });
  it("rejects overlong input and bot field", () => {
    expect(contactSchema.safeParse({ ...valid, message: "x".repeat(3001) }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false);
  });
});