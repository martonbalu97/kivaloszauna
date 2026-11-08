import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Sun, Armchair, TreePine, PanelsTopLeft, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { CombinedSaunaGallery, combinedSaunaCover } from "@/components/combined-sauna-gallery";
import { combinedSaunaTemperatures } from "@/lib/combined-sauna";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/kombinalt-szauna")({
  head: () => ({ meta: [
    { title: "Kombinált szauna — Finn és infra egy kabinban | Kiváló Szauna" },
    { name: "description", content: "Egyedi kombinált szaunák: finn szauna és infratechnológia egy prémium kabinban. Személyre szabott tervezés, gyártás és kivitelezés." },
    { property: "og:title", content: "Kombinált szauna — Kiváló Szauna" },
    { property: "og:description", content: "Két világ tökéletes harmóniája: tradicionális finn forróság és kíméletesebb inframeleg egyetlen elegáns kabinban." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CombinedSauna,
});

const benefits = [
  { icon: Flame, title: `A finn szauna ereje (${combinedSaunaTemperatures.finn.min}–${combinedSaunaTemperatures.finn.max} °C)`, text: "A klasszikus, magas hőmérsékletű szaunázás kedvelőinek: intenzív meleg, izzadás és illatos, szaunaköves felöntések egy stresszes munkanap vagy edzés után." },
  { icon: Sun, title: `Az infra kíméletesebb melege (${combinedSaunaTemperatures.infra.min}–${combinedSaunaTemperatures.infra.max} °C)`, text: "Az infrasugárzók közvetlenül melegítik a testet, miközben a kabin levegője alacsonyabb hőmérsékletű marad. Alternatívát kínálnak azoknak, akik a mérsékeltebb meleget részesítik előnyben." },
  { icon: Armchair, title: "Pihenés és izomlazítás", text: "A kellemes meleg segítheti az ellazulást és a komfortérzetet. A nyugodt, személyre szabott szaunázás lehetőséget ad a mindennapi rohanás utáni feltöltődésre." },
];
const modes = [
  { title: "Csak finn szauna üzemmód", text: "Klasszikus magas hőmérséklet, száraz meleg vagy a kövekre öntött vízzel létrehozott párás felöntések." },
  { title: "Csak infra üzemmód", text: "Alacsonyabb kabinhőmérséklet és közvetlen sugárzó hő. A szükséges előmelegítési idő a választott berendezéstől függ." },
  { title: "Kombinált előkészítés", text: "A kívánt élményhez igazított felfűtés és üzemmódváltás, a beépített berendezések gyártói előírásai szerint." },
];
const details = [
  { icon: TreePine, title: "Prémium faanyagok", text: "A világos skandináv rezgő nyárfától a meleg árnyalatú cédruson át az exkluzív, sötétebb thermo-kezelt fafajtákig széles alapanyag-választék áll rendelkezésre." },
  { icon: PanelsTopLeft, title: "Modern látványelemek", text: "Nagyméretű, edzett biztonsági üvegfrontok, rejtett padozat alatti LED hangulatvilágítás és minimál dizájn." },
  { icon: Ruler, title: "Precíz illesztés", text: "Legyen szó tetőtéri ferde síkokról, pincében kialakított wellness sarokról vagy tágas fürdőszobáról, a kabint milliméterpontosan a rendelkezésre álló térbe integráljuk." },
];

function CombinedSauna() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={combinedSaunaCover.url} alt="Kombinált finn és infraszauna üvegfronttal" width={1920} height={1440} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <p className="mb-4 text-xs uppercase text-primary">Egyedi tervezés és kivitelezés</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Kombinált szauna</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">Két világ tökéletes harmóniája egyetlen kabinban – kompromisszumok nélküli élmény a család minden tagjának</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">A finn szauna forró, felöntésekkel gazdagítható rituáléja és az infraszauna kíméletesebb melege mostantól nem zárja ki egymást. A kombinált szauna sokoldalú megoldás otthonába: egyetlen elegáns kabinban egyesíti a tradicionális skandináv forróságot és a modern infratechnológiát. Nem kell többé választania a családtagok eltérő szaunázási igényei között.</p>
        <h2 className="mt-10 text-3xl md:text-4xl">Két technológia, számtalan előny</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title.includes("(") ? <>{title.slice(0, title.indexOf("("))}<span className="inline-block whitespace-nowrap">{title.slice(title.indexOf("("))}</span></> : title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-muted-foreground">A szaunázás nem helyettesít orvosi kezelést. Gyermekek, idősek, várandósok és szív- vagy érrendszeri betegséggel élők használat előtt kérjenek orvosi tanácsot; a megfelelő hőmérséklet és időtartam egyénfüggő.</p>
      </section>

      <SectionDivider />
      <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase text-primary">Személyre szabott szaunaélmény</p>
          <h2 className="text-3xl md:text-5xl">Hogyan működik a gyakorlatban?</h2>
          <p className="mt-6 max-w-4xl leading-relaxed">A kabinba a nagy teljesítményű szaunakályha mellé ergonómikusan elhelyezett, prémium minőségű – teljes spektrumú vagy kerámia/halogén – infrasugárzókat építünk be a padozat mögé és a gerincvonal mentén. Az intelligens digitális vezérlésnek köszönhetően Ön dönti el a kívánt funkciót:</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">{modes.map((mode) => <div key={mode.title} className="border-t border-primary/40 pt-6"><h3 className="text-2xl">{mode.title}</h3><p className="mt-3 text-sm leading-relaxed">{mode.text}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="mb-4 text-xs uppercase text-primary">Pontosan az Ön otthonára szabva</p>
        <h2 className="text-3xl md:text-5xl">Egyedi tervezés és gyártás</h2>
        <p className="mt-6 max-w-4xl leading-relaxed text-muted-foreground">Minden kombinált szaunát egyedi megrendelés alapján, a helyszín adottságaihoz és belsőépítészeti stílusához igazítva gyártunk le.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">{details.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
      </section>
      <SectionDivider />
      <CombinedSaunaGallery />
      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">Két világ, egyetlen szauna</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Tervezzük meg együtt az otthonához és szaunázási szokásaihoz illő kombinált kabint!</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek kombinált szaunára <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}