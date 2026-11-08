import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wind, Sparkles, Activity, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesMenu } from "@/components/services-menu";
import { SectionDivider } from "@/components/section-divider";
import { SaltGallery, saltCover } from "@/components/salt-gallery";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/sokabin-es-sokamra")({
  head: () => ({ meta: [
    { title: "Sókabin és Sókamra — Kiváló Szauna" },
    { name: "description", content: "Egyedi prémium sókabinok és sókamrák otthonokba és wellness részlegekre. Sótömbös falak, rejtett LED-világítás és igény szerinti haloterápiás kialakítás." },
    { property: "og:title", content: "Sókabin és Sókamra — Kiváló Szauna" },
    { property: "og:description", content: "Privát pihenés és egyedi sókamrák prémium alapanyagokból, a tervezéstől a kivitelezésig." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SaltRooms,
});

const benefits = [
  { icon: Wind, title: "Légúti komfort", text: "A száraz sóterápiát egyesek légúti panaszaik kiegészítő enyhítésére választják. Az asztma, allergia, hörghurut vagy arcüreggyulladás kezelésében mutatott hatékonyságára azonban korlátozott a tudományos bizonyíték; alkalmazásáról érdemes kezelőorvosával egyeztetni." },
  { icon: Sparkles, title: "Bőr és jó közérzet", text: "A sókabin nyugodt környezete a személyes wellness-rutin része lehet. Ekcéma, pikkelysömör vagy akné esetén nem helyettesíti a bőrgyógyászati kezelést, és a száraz sós levegő érzékeny bőrön irritációt is okozhat." },
  { icon: Activity, title: "Testi ellazulás", text: "A kényelmes padozat és a csendes környezet teret ad a pihenésnek. Ízületi fájdalmak vagy gyulladás kezelésére, illetve a mikrokeringés javítására a sókabin hatása nem tekinthető igazoltnak." },
  { icon: Leaf, title: "Mély relaxáció", text: "A finom fények és a zavartalan, nyugodt tér segíthetnek kiszakadni a mindennapokból. A negatív ionok stresszhormonokra vagy alvásra gyakorolt hatását nem állítjuk bizonyított terápiás előnyként." },
];

function SaltRooms() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex justify-end px-6 py-6 md:px-12"><nav aria-label="Főmenü"><ServicesMenu /></nav></header>
      <section className="relative flex min-h-[70svh] items-end bg-ink text-ink-foreground">
        <img src={saltCover.url} alt="Egyedi sókamra ívelt padokkal és megvilágított sófalakkal" width={1440} height={1920} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-12">
          <p className="mb-4 text-xs uppercase text-primary">Egyedi tervezés és kivitelezés</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">Sókabin és Sókamra</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">Természetközeli feltöltődés és mély relaxáció otthonában vagy wellness részlegén</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <p className="max-w-4xl leading-relaxed text-muted-foreground">A prémium sókabin több mint egyszerű kiegészítő: egy privát pihenőtér, amely a tengerpart és a sóbányák hangulatát hozza el mindennapjaiba. A sótömbökből készült falak és a rejtett világítás különleges atmoszférát teremtenek. Száraz sóspray-generátorral felszerelt kabinban finom, mikroszkopikus sórészecskék kerülnek a levegőbe; a dekoratív sófal önmagában nem biztosít ilyen haloterápiás működést.</p>
        <h2 className="mt-10 text-3xl md:text-4xl">Pihenés és jó közérzet</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary/40 pt-6"><Icon className="mb-4 size-7 text-primary" strokeWidth={1.25} aria-hidden="true" /><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
        <p className="mt-8 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">A sókabin wellness-szolgáltatás, nem orvosi kezelés, és nem helyettesíti az előírt gyógyszereket. Légúti betegség, akut panasz vagy egyéb egészségügyi probléma esetén használat előtt kérje kezelőorvosa tanácsát.</p>
      </section>

      <SectionDivider />

      <section className="bg-manufacturer px-6 py-12 text-manufacturer-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase text-primary">Prémium alapanyagok · Egyedi asztalosmunka</p>
          <h2 className="text-3xl md:text-5xl">Mesterfokú kivitelezés</h2>
          <p className="mt-6 max-w-4xl leading-relaxed">Minden kabint egyedileg, prémium alapanyagokból és kompromisszummentes asztalosmunkával építünk. A parajdi vagy himalájai sótömbökből álló falak mögé rejtett, meleg tónusú LED-hangulatvilágítás nemcsak látványos, hanem meghitt környezetet is teremt a relaxációhoz. A sókabinokat igény szerint száraz sóspray-generátorral egészítjük ki, magáncélú, szállodai vagy közületi felhasználásra, az adott térhez és használati igényekhez igazodva.</p>
        </div>
      </section>

      <SaltGallery />

      <section className="bg-manufacturer px-6 py-16 text-center text-manufacturer-foreground">
        <h2 className="text-3xl md:text-5xl">Tervezzük meg saját sókabinját!</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">Otthoni pihenőtér vagy wellness részleg: elképzeléseihez és a helyszín adottságaihoz illő megoldást készítünk.</p>
        <Button asChild variant="gold" size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-6 py-3"><Link to="/" hash="ajanlat">Ajánlatot kérek sókabinra <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <SiteFooter />
    </main>
  );
}