import { z } from "zod";

export const contactSaunaTypes = ["Finn szauna", "2 fős mini finn szauna", "Infraszauna", "Kombinált szauna", "Szaunaház", "Közületi szauna", "Sókamra"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Adja meg a nevét.").max(100),
  phone: z.string().trim().min(7, "Adjon meg érvényes telefonszámot.").max(30).regex(/^\+?[\d\s().-]+$/, "Adjon meg érvényes telefonszámot.").refine(value => value.replace(/\D/g, "").length >= 7, "Adjon meg érvényes telefonszámot."),
  email: z.string().trim().email("Adjon meg érvényes e-mail címet.").max(255),
  sauna_type: z.enum(contactSaunaTypes, { errorMap: () => ({ message: "Válasszon szaunatípust." }) }),
  message: z.string().trim().min(1, "Írja meg elképzelését.").max(3000),
  website: z.string().max(0, "A beküldés nem fogadható el.").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;