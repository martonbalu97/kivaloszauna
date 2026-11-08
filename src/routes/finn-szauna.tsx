import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Droplets, Armchair, Waves, TreePine, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { FinnSaunaGallery, finnSaunaCover } from "@/components/finn-sauna-gallery";
import { finnSaunaTemperature } from "@/lib/finn-sauna";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/finn-szauna")({
  head: () => ({ meta: [
    { title: "Finn szauna — Egyedi prémium kivitel | Kiváló Szauna" },
    { name: "description", content: "Tradicionális finn szaunaélmény egyedi, prémium kivitelben. Válogatott faanyagok, minőségi kályhák és személyre szabott tervezés otthonába." },
    { property: "og:title", content: "Finn szauna — Kiváló Szauna" },
    { property: "og:description", content: "Az északi szaunakultúra otthonában: egyedi finn szaunák, prémium faanyagokkal és precíz kivitelezéssel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FinnSauna,
});

const experiences = [
  { icon: Droplets, title: "Intenzív meleg és izzadás", text: "A forró kabinban az izzadás a test természetes hőszabályozásának része. A szaunázást követő zuhany frissítő élményt nyújt; az izzadás nem tekinthető bizonyított méregtelenítő kezelésnek." },
  { icon: Waves, title: "Meleg és hűtés ritmusa", text: "A felmelegedést követő fokozatos lehűlés a hagyományos finn szaunázás része. A hirtelen hideg merülés megterhelő lehet, ezért mindig saját állapotához és terhelhetőségéhez igazítsa." },
  { icon: Armchair, title: "Izomlazítás és pihenés", text: "A kellemes meleg segítheti az izmok ellazulását és a napi feszültség oldását. A csendes környezet és a körök közötti pihenő teret ad a nyugodt feltöltődésnek." },
  { icon: Flame, title: "A felöntések szertartása", text: "A kabin központi eleme a szaunakövekkel teli minőségi kályha. A kövekre locsolt víz rövid időre növeli a páratartalmat és a hőérzetet – ez a finn löyly. Szaunaillatot csak a gyártó előírásai szerint, megfelelően hígítva használjon." },
];
const steps = [
  { number: "01", title: "Felmelegedés", text: "Kényelmesen ülve vagy fekve, a saját közérzetéhez igazított rövid időt töltsön a kabinban. Kezdőként válasszon alacsonyabb hőmérsékletet és rövidebb időt; rosszullét esetén azonnal távozzon." },
  { number: "02", title: "Fokozatos hűtés", text: "Friss levegőn vagy kellemes hőmérsékletű zuhannyal hűljön le. Hideg dézsát vagy merülést csak akkor válasszon, ha az egészségi állapota megengedi." },
  { number: "03", title: "Pihenés és folyadékpótlás", text: "Hagyjon legalább annyi időt nyugodt pihenésre, amennyit a kabinban töltött, és pótolja a folyadékot. Újabb kört csak akkor kezdjen, ha jól érzi magát; nem szükséges előre meghatározott körszámot teljesítenie." },
];
const details = [
  { icon: TreePine, title: "Válogatott faanyagok", text: "A világos skandináv lucfenyőtől és rezgő nyárfától az aromás kanadai vöröscédruson át a mély tónusú ThermoWood, azaz hőkezelt faanyagokig széles textúra- és színpalettát kínálunk." },
  { icon: Flame, title: "Minőségi kályhatechnika", text: "Megbízható szaunakályhákkal dolgozunk, amelyek teljesítményét a kabin méretéhez és kialakításához igazítjuk. A telepítés és az érintésvédelem a gyártói előírásoknak megfelelően történik." },
  { icon: PanelsTopLeft, title: "Korszerű belsőépítészet", text: "Letisztult minimál stílus szálcsiszolt fém kiegészítőkkel és nagyméretű edzett üvegfelületekkel, vagy rusztikus, meleg hangulatú kabin rejtett LED-hangulatvilágítással – a részleteket az Ön elképzeléséhez igazítjuk." },
];

function FinnSauna() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={finnSaunaCover.url} alt="Egyedi finn szauna faburkolattal és szaunaköves kályhával" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <p className="mb-4 text-xs uppercase text-primary">Egyedi tervezés és kivitelezés</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Finn szauna</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">A tradicionális északi szaunakultúra éltető ereje – egyedi, prémium kivitelben az Ön otthonában</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">A finn szauna a testi-lelki feltöltődés évezredes rituáléja, amely a forró, száraz levegő és a felöntésekből felszálló gőzhullám – a finn hagyományban <em>löyly</em> – egyensúlyára épül. A kabinban jellemző {finnSaunaTemperature.min}–{finnSaunaTemperature.max} °C közötti hőmérséklet intenzív melegérzetet és izzadást vált ki, miközben a zavartalan környezet segít kiszakadni a mindennapok rohanásából.</p>
        <h2 className="mt-10 text-3xl md:text-4xl">A klasszikus finn szaunaélmény</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">{experiences.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
      </section>

      <SectionDivider />
      <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase text-primary">A szaunázás ritmusa</p>
          <h2 className="text-3xl md:text-5xl">Hogyan szaunázzunk helyesen?</h2>
          <p className="mt-6 max-w-4xl leading-relaxed">A felmelegedés, a hűtés és a pihenés váltakozása adja a szeánsz ritmusát. A hőmérsékletet, az időtartamot és az ismétlések számát mindig egyénileg válassza meg.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="border-t border-primary/40 pt-6"><p className="mb-4 text-sm text-primary">{step.number}</p><h3 className="text-2xl">{step.title}</h3><p className="mt-3 text-sm leading-relaxed">{step.text}</p></div>)}</div>
          <p className="mt-8 max-w-4xl text-xs leading-relaxed">A szaunázás nem helyettesít orvosi kezelést. Szív- és érrendszeri betegség, várandósság vagy más egészségügyi kockázat esetén kérjen orvosi tanácsot. Lázzal, rosszulléttel vagy alkohol fogyasztása után ne szaunázzon.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="mb-4 text-xs uppercase text-primary">Stílus, tartósság és mérnöki precizitás</p>
        <h2 className="text-3xl md:text-5xl">Egyedi gyártás</h2>
        <p className="mt-6 max-w-4xl leading-relaxed text-muted-foreground">Minden finn szaunánkat teljesen egyedi tervek alapján, a megrendelő ízlésére és a rendelkezésre álló helyszínre szabva készítjük el.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">{details.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
      </section>
      <SectionDivider />
      <FinnSaunaGallery />
      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">A finn szaunaélmény az Ön otthonában</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Tervezzük meg együtt az elképzeléseihez és a rendelkezésre álló térhez illő prémium szaunát!</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek finn szaunára <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}