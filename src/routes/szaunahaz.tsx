import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Armchair, Droplets, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { SaunaHouseGallery, saunaHouseCover } from "@/components/sauna-house-gallery";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/szaunahaz")({
  head: () => ({ meta: [
    { title: "Exkluzív Kültéri Szaunaházak — Kiváló Szauna" },
    { name: "description", content: "Egyedi, négy évszakos kültéri szaunaházak minimál és skandináv stílusban. Privát wellness, panorámaüveg és személyre szabott pihenőtér a kertjében." },
    { property: "og:title", content: "Exkluzív Kültéri Szaunaházak — Kiváló Szauna" },
    { property: "og:description", content: "Saját, privát wellness oázis a kertjében: prémium szaunaházak egyedi tervezéssel és kivitelezéssel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SaunaHouse,
});

const features = [
  { icon: Flame, title: "Többfunkciós kabintér", text: "Finn szauna, bioszauna vagy kombinált infra-finn rendszer a legmodernebb kályhatechnikával." },
  { icon: Armchair, title: "Fűtött pihenőtér és társalgó", text: "Kényelmes pihenőágyakkal, minibárral, borhűtővel vagy beépített hangrendszerrel." },
  { icon: Droplets, title: "Vizesblokk és kiegészítők", text: "Beépített élményzuhany, merülődézsa vagy fedett, jakuzzival bővíthető terasz." },
  { icon: PanelsTopLeft, title: "Panoráma üvegfelületek", text: "Többrétegű, hőszigetelt biztonsági üvegek, amelyek akadálytalan kilátást nyújtanak a kertre." },
];

function SaunaHouse() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={saunaHouseCover.url} alt="Önálló kültéri szaunaház kerti környezetben" width={1500} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <p className="mb-4 text-xs uppercase text-primary">Egyedi tervezés és kivitelezés</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Exkluzív Kültéri Szaunaházak</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">Saját, privát wellness oázis a kertjében – letisztult minimál stílusban</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">Egyedi tervezésű prémium szaunaházaink önálló, négy évszakos építészeti megoldások, amelyek kiterjesztik otthona életterét. A minimál és modern skandináv formatervezés jegyében készülő épületek a természet közelségét ötvözik a legmagasabb szintű kényelemmel. Ideális menedék, ha a ház zajától távol, csendben töltődne fel családjával, vagy ha professzionális környezetben látna vendégül partnereket egy közös szaunaszeánszra.</p>
        <h2 className="mt-10 text-3xl md:text-4xl">Komplex belsőépítészet és felszereltség</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">A belső berendezésnek, a pihenőtér kialakításának és a kiegészítőknek csak a képzelet szab határt:</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <SectionDivider />

      <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase text-primary">Négy évszakra tervezve</p>
          <h2 className="text-3xl md:text-5xl">Időjárásálló, négy évszakos technológia</h2>
          <p className="mt-6 max-w-4xl leading-relaxed">Minden házat magas hőszigetelésű rétegrenddel építünk, így a téli fagyban is minimális energiafelhasználással és gyorsan felfűthető. A homlokzaton időtálló, prémium hőkezelt faanyagokat (ThermoWood) és modern burkolatokat használunk a gondozásmentes tartósságért.</p>
        </div>
      </section>

      <SaunaHouseGallery />

      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">Tervezzük meg saját szaunaházát!</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Egyedi megoldásokkal alakítjuk ki kertje privát wellness részlegét, az első elképzeléstől a kivitelezésig.</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek szaunaházra <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}