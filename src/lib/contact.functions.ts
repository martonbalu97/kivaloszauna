import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_EMAIL = "Kiváló Szauna <noreply@kivaloszauna.hu>";
const TO_EMAIL = "info@kivaloszauna.hu";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];

    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not configured.");
      return {
        success: false,
        message: "Az üzenetküldés átmenetileg nem elérhető. Kérjük, próbálja később, vagy írjon az info@kivaloszauna.hu címre.",
      };
    }

    // Honeypot: silently reject automated submissions without sending an email.
    if (data.website) {
      return { success: true, message: "Köszönjük, az üzenetét megkaptuk! Hamarosan felvesszük Önnel a kapcsolatot." };
    }

    const name = escapeHtml(data.name);
    const phone = escapeHtml(data.phone);
    const email = escapeHtml(data.email);
    const saunaType = escapeHtml(data.sauna_type);
    const message = escapeHtml(data.message).replaceAll("\n", "<br>");

    try {
      const response = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: `Új ajánlatkérés a weboldalról – ${data.name}`,
          text: [
            "Új ajánlatkérés érkezett a kivaloszauna.hu weboldalról.",
            "",
            `Név: ${data.name}`,
            `Telefonszám: ${data.phone}`,
            `E-mail: ${data.email}`,
            `Szauna típusa: ${data.sauna_type}`,
            "",
            "Üzenet:",
            data.message,
          ].join("\n"),
          html: `
            <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6;max-width:640px;margin:0 auto">
              <h2 style="margin-bottom:20px">Új ajánlatkérés érkezett</h2>
              <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Név</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${name}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Telefonszám</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${phone}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>E-mail</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${email}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Szauna típusa</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${saunaType}</td></tr>
              </table>
              <h3 style="margin:24px 0 8px">Üzenet</h3>
              <p style="white-space:normal">${message}</p>
              <p style="color:#777;font-size:12px;margin-top:32px">Küldve a kivaloszauna.hu kapcsolatfelvételi űrlapjáról.</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Resend API rejected contact form submission:", response.status, errorBody);
        return {
          success: false,
          message: "Az üzenet küldése nem sikerült. Kérjük, próbálja újra később, vagy írjon az info@kivaloszauna.hu címre.",
        };
      }

      return {
        success: true,
        message: "Köszönjük, az üzenetét megkaptuk! Hamarosan felvesszük Önnel a kapcsolatot.",
      };
    } catch (error) {
      console.error("Contact form email delivery failed:", error);
      return {
        success: false,
        message: "Az üzenet küldése nem sikerült. Kérjük, próbálja újra később, vagy írjon az info@kivaloszauna.hu címre.",
      };
    }
  });
