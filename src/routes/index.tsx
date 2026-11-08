import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import sketch from "@/assets/sauna-sketch-cad.jpg";
import { PencilRuler, Box, Hammer, HardHat, Wrench, Sparkles, Globe, Phone, Mail } from "lucide-react";
import { SaunaTypes } from "@/components/sauna-types";
import { SectionDivider } from "@/components/section-divider";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { References } from "@/components/references";
import { SiteFooter } from "@/components/site-footer";

const featureIcons = [PencilRuler, Box, Hammer, HardHat, Wrench];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiváló Szauna — Prémium dizájn kültéri szaunák" },
      { name: "description", content: "Panorámaüveges, hőkezelt fából készült luxus kültéri szaunák kertbe, villába és wellness projektekhez." },
      { property: "og:title", content: "Kiváló Szauna — Prémium dizájn kültéri szaunák" },
      { property: "og:description", content: "Panorámaüveges, hőkezelt fából készült luxus kültéri szaunák." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  ["Tervezés", "Közösen átbeszéljük elképzeléseit és a helyszín adottságait, majd ezekre építve megalkotjuk a szauna koncepcióját."],
  ["3D látványterv", "Pontos, élethű terveken mutatjuk meg leendő szaunáját, így még a munka megkezdése előtt minden részletet véglegesíthet."],
  ["Saját gyártás", "Saját műhelyünkben, gondosan válogatott faanyagból, kézműves pontossággal készítjük el szaunáját."],
  ["Kivitelezés", "A helyszínen összeállítjuk és működésre kész állapotba hozzuk a szaunát, majd mindent elmagyarázva adjuk át."],
  ["Karbantartás", "Éves karbantartással gondoskodunk szaunája hosszú életéről, és ha bármi gond adódik, gyorsan javítjuk."],
];

function Index() {
  const [selectedSauna, setSelectedSauna] = useState(0);
  return (
    <main id="fooldal" className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 px-6 py-6 text-ink-foreground md:px-12">
        <nav aria-label="Főmenü" className="ml-auto flex max-w-[22rem] flex-wrap items-center justify-end gap-3 md:max-w-none md:gap-4">
          <ServicesMenu onSelect={setSelectedSauna} />
        </nav>
      </header>

      <section className="relative flex min-h-screen items-end bg-ink">
        <img src={hero} alt="Panorámaüveges luxus kültéri szauna alkonyatkor" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative max-w-3xl px-6 pb-20 text-ink-foreground md:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Tervezés és kivitelezés</p>
          <h1 className="text-5xl leading-[1.125] md:text-7xl md:leading-[1.125]">Egyedi szaunák — dizájn, ami a lelkedet is melengeti</h1>
          <p className="mt-6 max-w-xl text-lg font-light text-ink-foreground/80">Építészeti igényességgel tervezett és kivitelezett kültéri és beltéri szaunák hőkezelt, skandináv fából, gyönyörű rejtett világítással.</p>
        </div>
      </section>

      <SaunaTypes selected={selectedSauna} onSelect={setSelectedSauna} />

      <SectionDivider />

      <section className="relative overflow-hidden bg-manufacturer px-6 py-12 text-manufacturer-foreground">
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-manufacturer-foreground">VÁLASSZA A MINŐSÉGET!</p>
          <h2 className="text-center text-4xl md:text-5xl">SZAUNÁK KÖZVETLENÜL A GYÁRTÓTÓL</h2>
          <p className="mx-auto mb-2 mt-6 max-w-3xl text-center font-light leading-relaxed text-manufacturer-foreground">Bízza ránk a teljes folyamatot a helyszíni felméréstől, a kivitelezésen át a karbantartásig. Velünk időt és pénzt spórolhat meg, hiszen közvetlenül a gyártótól rendelheti meg új, prémium szaunáját, garanciával.</p>
          <div className="mb-8" />
          <div className="relative">
          <img src={sketch} alt="" aria-hidden="true" loading="lazy" width={1376} height={768} className="sketch-white pointer-events-none absolute left-1/2 top-0 h-[calc(100%+3rem)] w-screen max-w-none -translate-x-1/2 object-cover object-top opacity-60" />
          <div className="relative mx-auto grid max-w-3xl gap-4 md:gap-6">
            {features.map(([t, d], i) => { const Icon = featureIcons[i] ?? Sparkles; return (
              <article key={t} className="group min-w-0 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-card)] transition duration-500 hover:-translate-y-1 hover:border-primary/50 md:p-8">
                <div className="flex items-center justify-between text-primary">
                  <span className="font-display text-xs tracking-[0.3em] md:text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <Icon size={26} strokeWidth={1.25} aria-hidden="true" className="shrink-0" />
                </div>
                <div className="my-4 h-px w-8 bg-primary/60 transition-all duration-500 group-hover:w-20 md:my-6 md:w-10" />
                <h3 className="text-2xl leading-tight [overflow-wrap:anywhere] md:text-3xl">{t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-card-foreground/70 md:mt-3">{d}</p>
              </article>
            ); })}
          </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="rolunk" className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-2 md:items-center">
        <img src={interior} alt="Szauna belső tere LED-világítással" loading="lazy" width={1200} height={1408} className="photo-frame" />
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Miért mi?</p>
          <h2 className="text-4xl md:text-5xl">Nem csak szauna — építészeti élmény</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Olyan szaunákat építünk – magánkertekbe, villákhoz és wellness-hotelekbe egyaránt –, amelyek pillanatok alatt elérik a kívánt hőfokot, tökéletesen őrzik a meleget, és évtizedek múltán is éppoly lenyűgözőek, mint az első napon. A skandináv szaunakultúrát prémium alapanyagokkal és manufaktúránk precíz szaktudásával keltjük életre. Immár 30 éve nem csupán szaunát építünk, hanem maradandó értéket teremtünk.</p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="gold" size="lg"><Link to="/rolunk">Tovább</Link></Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      <References />

      <section id="ajanlat" className="bg-ink px-6 py-24 text-center text-ink-foreground">
        <h2 className="text-4xl md:text-5xl">Kérjen személyre szabott ajánlatot</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/70">Írjon nekünk, és segítünk kiválasztani a kertjéhez illő szaunát.</p>
        <address className="mx-auto mt-8 flex w-fit flex-col gap-3 text-left text-sm font-light not-italic text-ink-foreground/75">
          <a href="https://kivaloszauna.hu" className="flex items-center gap-3 transition hover:text-primary"><Globe size={16} strokeWidth={1.25} className="shrink-0 text-primary" aria-hidden="true" /><span>https://kivaloszauna.hu</span></a>
          <a href="tel:+36301907012" className="flex items-center gap-3 transition hover:text-primary"><Phone size={16} strokeWidth={1.25} className="shrink-0 text-primary" aria-hidden="true" /><span>+36 30 190 7012</span></a>
          <a href="mailto:info@kivaloszauna.hu" className="flex items-center gap-3 transition hover:text-primary"><Mail size={16} strokeWidth={1.25} className="shrink-0 text-primary" aria-hidden="true" /><span>info@kivaloszauna.hu</span></a>
        </address>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
