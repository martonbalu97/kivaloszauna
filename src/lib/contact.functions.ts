import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async () => {
    // Sending is intentionally paused: the owner declined submission storage.
    // Do not accept enquiries silently or claim delivery without an active destination.
    return { success: false, message: "Az űrlapos küldés még nem aktív. Kérjük, keressen a +36 30 190 7012 telefonszámon vagy az info@kivaloszauna.hu e-mail címen." };
  });