import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PencilRuler, Wrench, Box, MapPin, PanelsTopLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { AboutFlipCard } from "@/components/about-flip-card";
import { SiteFooter } from "@/components/site-footer";
import finn from "@/assets/finn-reference-1.jpg.asset.json";
import curved from "@/assets/botaniq-project-1.jpg.asset.json";
import house from "@/assets/outdoor-sauna-5.jpg.asset.json";

export const Route = createFileRoute("/rolunk")({
  head: () => ({ meta: [
    { title: "Rólunk — 30 év tapasztalat, egyedi szaunák | Kiváló Szauna" },
    { name: "description", content: "Ismerje meg a Kiváló Szauna szemléletét: három évtizedes tapasztalat, gondos manufakturális kivitelezés, egyedi tervezés és teljes körű szolgáltatás." },
    { property: "og:title", content: "Rólunk — Kiváló Szauna" },
    { property: "og:description", content: "Hagyomány és innováció: prémium szaunák a tervezéstől a karbantartásig, 30 év tapasztalatával." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const values = [
  { image: curved.url, width: 960, height: 1280, alt: "Kézműves pontossággal kialakított ívelt szaunapadok", title: "Több évtizedes tapasztalat", text: "Immár 30 éve dolgozunk fával. A megszerzett tudást minden új szaunában tovább visszük: az anyagválasztástól a legapróbb illesztésig." },
  { image: finn.url, width: 1600, height: 900, alt: "Egyedi finn szauna gondosan kidolgozott faburkolattal", title: "Maximalizmus és kiváló minőség", text: "Olyan szaunákat készítünk, amelyekben mi magunk is örömmel pihennénk. A minőséget nem egyetlen látványos részlet, hanem az egész kabin gondos kidolgozása adja." },
  { image: house.url, width: 1500, height: 1000, alt: "Egyedileg tervezett panorámaüveges kültéri szaunaház", title: "Egyedi tervezés és kivitelezés", text: "Nincs két egyforma otthon és két egyforma elképzelés. Minden szaunát az Ön igényeihez, a rendelkezésre álló térhez és a környezet stílusához igazítunk." },
];
const services = [
  { icon: PencilRuler, title: "Helyszíni felmérés", text: "Személyesen megismerjük a helyszínt, átbeszéljük az elképzeléseit és a műszaki lehetőségeket, hogy a tervezés biztos alapokra épüljön." },
  { icon: Wrench, title: "Karbantartás és szerviz", text: "Az átadás után is számíthat ránk: rendszeres karbantartással és szükség esetén javítással segítjük szaunája hosszú távú, megbízható működését." },
  { icon: Box, title: "3D látványtervezés", text: "Részletes térbeli terveken mutatjuk meg a leendő kabint. Így a formák, az anyagok és a világítás még a gyártás előtt összehangolhatók." },
  { icon: MapPin, title: "Országos szolgáltatás", text: "Magyarország egész területén segítünk megvalósítani az egyedi szaunákat – a helyszín megismerésétől a kész kabin átadásáig." },
  { icon: PanelsTopLeft, title: "Szaunaházak és sókamrák", text: "Önálló kerti wellnessépületeket és egyedi sókamrákat is tervezünk. A belső terek és a felszereltség részleteit az Ön elképzeléseihez igazítjuk." },
  { icon: Flame, title: "Prémium kiegészítők", text: "A megfelelő kályha, a kézre álló felöntődézsa és a gondosan megválasztott kiegészítők együtt teszik teljessé a szaunaélményt." },
];

function About() {
  return <main className="bg-background text-foreground">
    <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
    <section className="relative flex min-h-[65svh] items-end bg-ink text-ink-foreground">
      <img src={house.url} width={1500} height={1000} alt="Kiváló Szauna egyedi kültéri szaunaház a kertben" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
        <p className="mb-4 text-xs uppercase text-primary">Kiváló Szauna · Rólunk</p>
        <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">Hagyományból építünk maradandót</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">30 év tapasztalata, a fa szeretete és a részletek iránti elkötelezettség minden szaunánkban.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="values-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Ami meghatároz minket</p>
      <h2 id="values-heading" className="mb-10 text-center text-3xl md:text-5xl">Szakértelem, minőség, egyediség</h2>
      <div className="grid gap-6 md:grid-cols-3">{values.map((value) => <AboutFlipCard key={value.title} value={value} />)}</div>
    </section>
    <SectionDivider />
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      <p className="mb-4 text-xs uppercase text-primary">Hagyomány és innováció</p>
      <h2 className="max-w-4xl text-3xl md:text-5xl">Élmény, amely túlmutat a szaunán</h2>
      <p className="mt-6 max-w-4xl leading-relaxed text-muted-foreground">Az északi szaunakultúra hagyományait korszerű technológiával és személyre szabott tervezéssel kapcsoljuk össze. A természetes faanyagok, a precíz asztalosmunka és a finoman megkomponált világítás olyan teret teremtenek, ahol jó megállni és feltöltődni.</p>
      <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">Számunkra a szauna nem csupán egy kabin: a mindennapokból kiszakító, személyes rituálé helyszíne. Ezt a szemléletet visszük tovább magánkertekben, villákban és wellness-hotelekben egyaránt.</p>
    </section>
    <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12"><div className="mx-auto max-w-6xl">
      <p className="mb-4 text-center text-xs uppercase text-primary">Közvetlenül a gyártótól</p>
      <h2 className="mx-auto max-w-4xl text-center text-3xl md:text-5xl">A teljes folyamat egy kézben</h2>
      <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed">A helyszíni felméréstől a tervezésen és kivitelezésen át a karbantartásig végigkísérjük szaunája megvalósítását. Önnek nem különálló feladatokat, hanem egy összehangolt megoldást kell választania.</p>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6">
        <Icon className="mb-4 size-8 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-manufacturer-foreground/80">{text}</p>
      </div>)}</div>
    </div></section>
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl md:text-5xl">Ismerjük meg az elképzeléseit!</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">Beszéljük át, milyen szauna illene az Ön otthonához vagy wellnessrészlegéhez.</p>
      <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Vegye fel velünk a kapcsolatot <ArrowRight aria-hidden="true" /></Link></Button>
    </section>
    <SiteFooter />
  </main>;
}