import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, LoaderCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactSchema, contactSaunaTypes } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";

const fieldClass = "h-12 rounded-none border-ink-foreground/25 bg-ink-foreground/5 text-ink-foreground placeholder:text-ink-foreground/40";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [sauna, setSauna] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse({ ...values, sauna_type: sauna });
    setStatus("");
    setSuccess(false);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map(issue => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    setPending(true);
    try {
      const result = await send({ data: parsed.data });
      setStatus(result.message);
      setSuccess(result.success);
      if (result.success) { form.reset(); setSauna(""); }
    } catch {
      setStatus("A küldés nem sikerült. Kérjük, próbálja újra később, vagy keressen telefonon.");
    } finally { setPending(false); }
  }

  function errorFor(key: string) {
    return errors[key] ? <p id={`${key}-error`} className="mt-2 text-sm text-primary" role="alert">{errors[key]}</p> : null;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto mt-12 max-w-3xl text-left">
      <fieldset disabled={pending} className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="contact-name" className="mb-2">Név</Label>
          <Input id="contact-name" name="name" autoComplete="name" required maxLength={100} className={fieldClass} aria-invalid={!!errors['name']} aria-describedby={errors['name'] ? 'name-error' : undefined} />
          {errorFor("name")}
        </div>
        <div>
          <Label htmlFor="contact-phone" className="mb-2">Telefonszám</Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} className={fieldClass} aria-invalid={!!errors['phone']} aria-describedby={errors['phone'] ? 'phone-error' : undefined} />
          {errorFor("phone")}
        </div>
        <div>
          <Label htmlFor="contact-email" className="mb-2">E-mail cím</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={255} className={fieldClass} aria-invalid={!!errors['email']} aria-describedby={errors['email'] ? 'email-error' : undefined} />
          {errorFor("email")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-sauna" className="mb-2">Szauna típusa</Label>
          <Select value={sauna} onValueChange={setSauna} disabled={pending}>
            <SelectTrigger id="contact-sauna" className={`${fieldClass} w-full`} aria-invalid={!!errors['sauna_type']} aria-describedby={errors['sauna_type'] ? 'sauna_type-error' : undefined}><SelectValue placeholder="Válasszon szaunatípust" /></SelectTrigger>
            <SelectContent>{contactSaunaTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
          </Select>
          {errorFor("sauna_type")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-message" className="mb-2">Üzenet</Label>
          <Textarea id="contact-message" name="message" required maxLength={3000} rows={5} className={`${fieldClass} min-h-36 resize-y`} aria-invalid={!!errors['message']} aria-describedby={errors['message'] ? 'message-error' : undefined} />
          {errorFor("message")}
        </div>
        <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <div className="sm:col-span-2">
          <Button type="submit" variant="gold" disabled={pending} size="lg" className="h-12 w-full px-10 sm:w-auto">{pending ? <LoaderCircle className="animate-spin" /> : <Send />} {pending ? "Küldés…" : "Küldés"}</Button>
          <p role="status" className="mt-5 flex min-h-6 items-center gap-2 text-sm text-ink-foreground/80">{success && <Check size={18} className="shrink-0 text-primary" />}{status}</p>
        </div>
      </fieldset>
    </form>
  );
}