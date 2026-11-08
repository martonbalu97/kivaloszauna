import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Layers, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { CommercialProjects, commercialCover } from "@/components/commercial-projects";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/kozuleti-szaunak")({
  head: () => ({ meta: [
    { title: "Közületi szaunák és wellness projektek — Kiváló Szauna" },
    { name: "description", content: "Egyedi közületi szaunák szállodáknak és wellness központoknak. Hotel Ózon & Luxury Villas és Botaniq Turai Kastély referenciáink." },
    { property: "og:title", content: "Közületi szaunák és wellness projektek — Kiváló Szauna" },
    { property: "og:description", content: "Prémium vendégélmény, tartós kialakítás és egyedi szállodai szaunaprojektek a tervezéstől az átadásig." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CommercialSaunas,
});

const features = [
  { icon: Layers, title: "Nagy teherbírású, vetemedésmentes szerkezet", text: "A padok és vázszerkezetek masszív keresztmetszetű fűrészáruból (válogatott rezgő nyárfa, abachi, hőkezelt magnólia) készülnek, ellenállva a hőtágulásnak és a folyamatos nedvességnek." },
  { icon: Flame, title: "Ipari teljesítményű technológia", text: "Folyamatos üzemre hitelesített, nagy kőtömegű kályhákat és professzionális vezérlést alkalmazunk a stabil hőfokért és a kiadós felöntésekért." },
  { icon: ShieldCheck, title: "Kiemelt szabványossági és biztonsági megfelelés", text: "Minden kabinunk rendelkezik beépített vészcsengővel és vészkapcsolóval, hőkezelt biztonsági üvegezéssel, kályhavédő korláttal, valamint igény szerint épületfelügyeleti rendszerbe (BMS) köthető kényszerített szellőzéssel és tűzjelző csatlakozással." },
  { icon: Sparkles, title: "Higiénikus, könnyen tisztítható kialakítás", text: "Kivehető padmodulok és antibakteriális felületkezelés a személyzet gyors napi fertőtlenítéséhez." },
];

function CommercialSaunas() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={commercialCover.url} alt="Hotel Ózon nagy kapacitású panoráma finn szaunája" width={900} height={600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Közületi szaunák &amp; Wellness projektek</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">Megbízhatóság, extrém tartósság és prémium vendégélmény szállodáknak és wellness központoknak</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">A közösségi használatra tervezett szaunák építése különleges szaktudást, ipari minőségű alapanyagokat és szigorú biztonsági tervezést igényel. Közületi szaunáinkat úgy tervezzük, hogy zökkenőmentesen bírják a folyamatos, napi 10–14 órás intenzív terhelést és a magas vendégforgalmat, miközben fenntartják az exkluzív esztétikai élményt és az alacsony üzemeltetési költségeket.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
      </section>
      <SectionDivider />
      <CommercialProjects />
      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">Tervezzünk együtt közületi projektet!</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Legyen szó szállodafejlesztésről, fürdőfelújításról vagy új fitness-wellness részlegről, a tervezőasztaltól a hatósági átadásig támogatjuk beruházását.</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek közületi projektre <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}