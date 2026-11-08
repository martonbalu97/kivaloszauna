import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Armchair, Sun, SlidersHorizontal, TreePine, PanelsTopLeft, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { InfraSaunaGallery, infraSaunaCover } from "@/components/infra-sauna-gallery";
import { infraSaunaTemperature } from "@/lib/infra-sauna";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/infraszauna")({
  head: () => ({ meta: [
    { title: "Infraszauna — Egyedi, kíméletes meleg | Kiváló Szauna" },
    { name: "description", content: "Egyedi infraszaunák 40–60 °C-os kabinhőmérséklettel, korszerű sugárzókkal, prémium faanyagokkal és személyre szabott kialakítással." },
    { property: "og:title", content: "Infraszauna — Kiváló Szauna" },
    { property: "og:description", content: "Meleg és nyugodt feltöltődés otthonában: egyedi infraszaunák prémium kivitelben." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: InfraSauna,
});

const technology = [
  { icon: Sun, title: "Gyorsan érezhető meleg", text: "Teljes spektrumú (Full Spectrum) vagy prémium kerámia sugárzókat építünk be. A sugárzók bekapcsolás után hamar meleget adnak; a kabin felmelegedési ideje a választott rendszertől és környezettől függ." },
  { icon: Armchair, title: "Ergonomikus elhelyezés", text: "A fűtőelemeket a gerinc, a derék és a vádli vonalához igazítva helyezzük el, hogy ülés közben kényelmes és egyenletes melegérzetet biztosítsanak." },
  { icon: SlidersHorizontal, title: "Digitális vezérlés", text: "A megfelelő vezérléssel a sugárzók intenzitása a kabin belsejéből is szabályozható, az egyéni komfortérzethez és a gyártói előírásokhoz igazítva." },
];
const details = [
  { icon: TreePine, title: "Prémium faanyagok", text: "Csomómentes skandináv nyárfa, illatos kanadai vöröscédrus vagy modern, sötét tónusú hőkezelt fafajták – az anyagválasztást az Ön ízléséhez igazítjuk." },
  { icon: PanelsTopLeft, title: "Modern dizájn", text: "Edzett biztonsági üvegajtók és panoráma üvegfalak, rejtett LED-hangulatvilágítás vagy beépített Bluetooth hangrendszer egészítheti ki a kabint." },
  { icon: Ruler, title: "Helytakarékos kialakítás", text: "A kis alapterületű sarokkabintól a tágas, fekvőpados luxuskivitelig a helyszínhez és az Ön belsőépítészeti elképzeléseihez illő megoldást tervezünk." },
];

function InfraSauna() {
  return <main className="bg-background text-foreground">
    <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
    <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
      <img src={infraSaunaCover.url} alt="Meleg fényű infraszauna természetes faburkolattal és sarokpaddal" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
        <p className="mb-4 text-xs uppercase text-primary">Egyedi tervezés és kivitelezés</p>
        <h1 className="text-4xl leading-tight md:text-6xl">Infraszauna</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">Kíméletes meleg és nyugodt feltöltődés – a modern otthoni wellness élménye</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      <p className="max-w-4xl leading-relaxed text-muted-foreground">Az infraszauna a pihenés kellemes formája. A hagyományos finn szaunával ellentétben a sugárzók infravörös energiája közvetlenül melegíti a testet, nem elsősorban a kabin levegőjét fűti fel. A kabin belső hőmérséklete jellemzően {infraSaunaTemperature.min}–{infraSaunaTemperature.max} °C között marad, így alacsonyabb léghőmérsékleten is intenzív melegérzetet tapasztalhat.</p>
      <h2 className="mt-10 text-3xl md:text-4xl">Meleg, pihenés és komfort</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="border-t border-primary/40 pt-6"><h3 className="text-2xl">Alacsonyabb kabinhőmérséklet</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Kellemes alternatíva lehet azoknak, akik a finn szauna forró levegőjét nehezebben viselik. Az alacsonyabb hőmérséklet azonban nem jelent mindenki számára kockázatmentes használatot.</p></div>
        <div className="border-t border-primary/40 pt-6"><h3 className="text-2xl">Idő a feltöltődésre</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A meleg segítheti az izmok ellazulását, a csendes környezet pedig a napi feszültség oldását. A használat gyakoriságát és időtartamát a saját állapotához és a berendezés útmutatójához igazítsa.</p></div>
      </div>
      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-muted-foreground">Az infraszauna nem helyettesít orvosi kezelést, és nem ígér bizonyított méregtelenítést, megfázáskezelést vagy bőrfeszesítést. Gyermekek, idősek, várandósok és szív- és érrendszeri vagy más betegséggel élők használat előtt kérjenek orvosi tanácsot. Lázzal, rosszulléttel vagy alkohol fogyasztása után ne szaunázzon; gondoskodjon folyadékpótlásról.</p>
    </section>
    <SectionDivider />
    <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12"><div className="mx-auto max-w-6xl">
      <p className="mb-4 text-xs uppercase text-primary">Komfort és korszerű technológia</p>
      <h2 className="text-3xl md:text-5xl">Prémium infrasugárzók</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">{technology.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed">{text}</p></div>)}</div>
    </div></section>
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      <p className="mb-4 text-xs uppercase text-primary">Az Ön otthonára szabva</p>
      <h2 className="text-3xl md:text-5xl">Egyedi gyártás</h2>
      <p className="mt-6 max-w-4xl leading-relaxed text-muted-foreground">Nincsenek merev sablonok: minden kabint a lakás vagy ház adottságaihoz, valamint az Ön belsőépítészeti stílusához igazítva tervezünk és gyártunk le.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">{details.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
    </section>
    <SectionDivider /><InfraSaunaGallery />
    <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
      <h2 className="text-3xl md:text-5xl">Saját infraszauna otthonában</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Tervezzük meg együtt az Ön igényeihez és a rendelkezésre álló térhez illő prémium kabint!</p>
      <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek infraszaunára <ArrowRight aria-hidden="true" /></Link></Button>
    </section>
    <SiteFooter />
  </main>;
}