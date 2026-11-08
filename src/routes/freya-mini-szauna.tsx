import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plug, Zap, Hammer, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { FreyaMiniGallery, freyaMiniCover } from "@/components/freya-mini-gallery";
import { freyaMini } from "@/lib/freya-mini";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/freya-mini-szauna")({
  head: () => ({ meta: [
    { title: "Freya Mini Finn Szauna — 1–2 személyre | Kiváló Szauna" },
    { name: "description", content: "Freya mini finn szauna 1–2 személyre, 115 × 110 × 210 cm-es méretben. Harvia 3,5 kW-os kályha, Wellmatic vezérlés és egyedi hazai gyártás." },
    { property: "og:title", content: "Freya Mini Finn Szauna — Kiváló Szauna" },
    { property: "og:description", content: "Prémium finn szaunaélmény kompakt méretben, otthonába vagy szálláshelyére. Ismerje meg a felszereltséget és a választható extrákat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FreyaMiniPage,
});

const features = [
  { icon: Plug, title: "230 V-os hálózatról", text: "Egyfázisú, 16 A-es csatlakozással üzemeltethető, háromfázisú ipari áram nélkül. A fali aljzat és az áramkör megfelelőségét telepítés előtt villanyszerelővel kell ellenőriztetni; a bekötés a kályha gyártói előírásai szerint történjen." },
  { icon: Zap, title: "Kompakt, hatékony kialakítás", text: "A precízen méretezett, 3,5 kW-os kályha és a hatékony hőszigetelés a kis kabintérhez igazodik. A tényleges fogyasztás a használat időtartamától, a beállított hőfoktól és a környezettől függ." },
  { icon: Hammer, title: "Kézműves hazai gyártás", text: "Magyarországon készítjük minden darabját, válogatott, ellenőrzött skandináv faanyagokból. A külső és belső burkolatot az otthoni enteriőrhöz igazítjuk, a tartósságot és a precíz illesztéseket szem előtt tartva." },
  { icon: Flame, title: "Finn élvonalbeli technológia", text: "A megbízható, egyenletes hőelosztásról Harvia Vega Compact 3,5 kW-os szaunakályha gondoskodik, Wellmatic digitális külső fali vezérléssel társítva." },
];

const equipment = [
  `${freyaMini.glassThicknessMm} mm vastag, víztiszta, hőkezelt biztonsági edzett üvegajtó és front`,
  "Harvia Vega Compact 3,5 kW-os prémium kályha",
  "Eredeti vulkanikus szaunalávakő csomag",
  "Wellmatic digitális vezérlés",
  "Exkluzív belső, meleg tónusú LED hangulatvilágítás",
  "Teljes kiegészítő szett: natúr fa felöntődézsa, kanál, kombinált hőmérő- és páramérő, fehér homokos időzítő homokóra",
];
const extras = [
  "Rejtett, beépített Bluetooth hangrendszer",
  "Mikropontos, csillagos égbolt LED-világítás",
  "Egyedi külső és belső faburkolatok: hőkezelt nyárfa, thermo kőris, cédrus vagy fekete dizájnelemek",
  "Zsetonos vagy kártyás fizetőegység szálláshelyeknek",
];
const specs = [
  ["Kapacitás", `${freyaMini.capacity.min}–${freyaMini.capacity.max} személy`],
  ["Szélesség", `${freyaMini.dimensionsCm.width} cm`],
  ["Mélység", `${freyaMini.dimensionsCm.depth} cm`],
  ["Magasság", `${freyaMini.dimensionsCm.height} cm`],
  ["Elektromos igény", `${freyaMini.electrical.voltage} V (${freyaMini.electrical.phases} fázis, ${freyaMini.electrical.amperes} A)`],
  ["Szaunakályha", "Harvia Vega Compact 3,5 kW"],
  ["Vezérlés", freyaMini.control],
  ["Kábelezés", "Hőálló, duplán szigetelt szilikon vezetékrendszer"],
];

function FreyaMiniPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={freyaMiniCover.url} alt="Freya mini szauna otthoni elhelyezése" width={1000} height={1195} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <p className="mb-4 text-xs uppercase text-primary">Maximum 2 személyre</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Freya Mini Finn Szauna</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">Prémium finn szaunaélmény kompakt méretben – 230 V-os hálózatról üzemeltethető kényelem otthonában vagy szálláshelyén</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">A Freya mini finn szauna bizonyítja, hogy a valódi, tradicionális szaunaélményhez nincs szükség hatalmas terekre vagy ipari áramkiállásra. Kifejezetten olyan lakásokba, házakba vagy szálláshelyekre terveztük, ahol a hely korlátozott, de a minőségből és az esztétikumból nem engednek. Kis alapterületének köszönhetően egy tágasabb fürdőszobában, gardróbban, hálószobában vagy akár egy vendégház privát szegletében is elhelyezhető, a telepítési és szellőzési követelmények betartásával.</p>
        <h2 className="mt-10 text-3xl md:text-4xl">Miért a Freya Mini a legpraktikusabb választás?</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
      </section>
      <SectionDivider />
      <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase text-primary">Privát wellness vendégeinek</p>
          <h2 className="text-3xl md:text-5xl">Szállásadóknak és apartmanoknak</h2>
          <p className="mt-6 max-w-4xl leading-relaxed">A Freya mini szaunával kis helyigény mellett hozhat létre prémium wellness-szolgáltatást, amely vonzóbbá teheti szálláshelyét és megkülönböztetheti ajánlatát.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="text-2xl">Értéknövelő vendégélmény</h3><p className="mt-3 text-sm leading-relaxed">A saját szobai szauna különleges kényelmet kínál, és támogathatja a prémium pozicionálást. A szobaárra és a foglaltságra gyakorolt hatás a helyszíntől és a piaci környezettől függ.</p></div>
            <div><h3 className="text-2xl">Költségkontroll zsetonos vezérléssel</h3><p className="mt-3 text-sm leading-relaxed">Opcionális időzített vagy zsetonos fizetőrendszerrel a használat időtartama szabályozható, és a szauna külön díjazású szolgáltatásként is kínálható.</p></div>
          </div>
        </div>
      </section>
      <FreyaMiniGallery />
      <SectionDivider />
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <h2 className="text-3xl md:text-5xl">Műszaki adatok és méretek</h2>
        <dl className="mt-8 max-w-4xl divide-y divide-border border-y border-border">
          {specs.map(([label, value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-2 sm:gap-6"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="text-sm leading-relaxed">{value}</dd></div>)}
        </dl>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-12">
        <h2 className="text-3xl md:text-5xl">Felszereltség és garancia</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div><h3 className="text-2xl">Alapfelszereltség</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">{equipment.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div><h3 className="text-2xl">Választható prémium extrák</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">{extras.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="mt-10 border-t border-primary/40 pt-6"><h3 className="text-2xl">Garanciális feltételek</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Szerkezet és asztalosmunka:</strong> {freyaMini.warrantyYears.structure} év garancia rendeltetésszerű használat mellett.</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Szaunakályha és elektronika:</strong> {freyaMini.warrantyYears.heaterAndElectronics} év teljes körű gyártói garancia.</p></div>
      </section>
      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">Saját mini szaunát szeretne?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Találjuk meg otthonához vagy szálláshelyéhez a megfelelő burkolatot és felszereltséget.</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek Freya mini szaunára <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}