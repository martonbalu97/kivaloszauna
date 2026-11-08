import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import finn from "@/assets/finn-sauna-retouched.png";
import mini from "@/assets/mini-sauna.jpg";
import infra from "@/assets/infra.jpg";
import combined from "@/assets/combined-sauna.jpg";
import house from "@/assets/sauna-house.jpg";
import commercial from "@/assets/commercial-sauna.jpg";
import salt from "@/assets/salt-room.jpg";

export const saunaTypes = [
  { name: "Finn szauna", to: "/finn-szauna", image: finn, alt: "Finn szauna", width: 928, height: 1152 },
  { name: "2 fős mini finn szauna", to: "/freya-mini-szauna", image: mini, alt: "2 fős mini finn szauna", width: 1200, height: 1600 },
  { name: "Infraszauna", to: "/infraszauna", image: infra, alt: "Infraszauna", width: 1920, height: 1280 },
  { name: "Kombinált szauna", to: "/kombinalt-szauna", image: combined, alt: "Kombinált szauna", width: 1440, height: 1920 },
  { name: "Szaunaház", to: "/szaunahaz", image: house, alt: "Szaunaház", width: 1332, height: 2000 },
  { name: "Közületi szauna", to: "/kozuleti-szaunak", image: commercial, alt: "Közületi szauna", width: 900, height: 600 },
  { name: "Sókamra", to: "/sokabin-es-sokamra", image: salt, alt: "Sókamra", width: 1440, height: 1920 },
] as const;

export function SaunaTypes({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const [carouselRef, api] = useEmblaCarousel({ align: "start", watchDrag: false });
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    api?.scrollTo(selected, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, [api, selected]);

  const current = saunaTypes[selected] ?? saunaTypes[0];

  function move(direction: number) {
    const next = (selected + direction + saunaTypes.length) % saunaTypes.length;
    if (api) api.scrollTo(next, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    onSelect(next);
  }

  return (
    <section id="szaunatipusok" className="border-t border-border px-6 pb-10 pt-20 md:pb-12 md:pt-24" aria-labelledby="sauna-types-heading">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-primary">KÍNÁLATUNK</p>
        <h2 id="sauna-types-heading" className="text-center text-4xl md:text-5xl">Választható Szauna Típusok</h2>
        <p className="mx-auto mb-10 mt-4 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground md:mb-14">Az általunk tervezett és készített szaunák szerkezetére rendeltetésszerű használat mellett 5 év garanciát biztosítunk.</p>
        <div className="relative" role="region" aria-roledescription="carousel" aria-label="Szaunatípusok">
          <div ref={carouselRef} className="touch-pan-y overflow-hidden" onPointerDown={(e) => setStartX(e.clientX)} onPointerUp={(e) => { if (startX !== null && Math.abs(e.clientX - startX) > 40) move(e.clientX < startX ? 1 : -1); setStartX(null); }} onPointerCancel={() => setStartX(null)}>
            <div className="flex items-start">
              {saunaTypes.map((sauna, index) => (
                <div key={sauna.name} className={`min-w-0 shrink-0 grow-0 basis-full ${selected !== index ? "h-0 overflow-hidden" : "h-auto"}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${saunaTypes.length}`} aria-hidden={selected !== index}>
                  <img src={sauna.image} alt={sauna.alt} width={sauna.width} height={sauna.height} loading="lazy" draggable={false} className={`photo-frame select-none ${selected !== index ? "invisible" : "visible"}`} />
                </div>
              ))}
            </div>
          </div>
          <Button variant="gold" size="icon" aria-label="Előző szaunatípus" title="Előző szaunatípus" onClick={() => move(-1)} className="absolute left-2 top-1/2 size-12 -translate-y-1/2 md:left-6 md:size-16 [&_svg]:size-7 md:[&_svg]:size-8">
            <ArrowLeft strokeWidth={1.5} />
          </Button>
          <Button variant="gold" size="icon" aria-label="Következő szaunatípus" title="Következő szaunatípus" onClick={() => move(1)} className="absolute right-2 top-1/2 size-12 -translate-y-1/2 md:right-6 md:size-16 [&_svg]:size-7 md:[&_svg]:size-8">
            <ArrowRight strokeWidth={1.5} />
          </Button>
        </div>
        <div className="mt-7 text-center">
          <h3 className="text-3xl md:text-4xl" aria-live="polite">{current.name}</h3>
          <Button asChild variant="gold" size="lg" className="mt-5 h-12 px-10 text-base">
            <Link to={current.to}>Ez érdekel! <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <p className="mt-5 text-xs tabular-nums text-muted-foreground">{String(selected + 1).padStart(2, "0")} / {String(saunaTypes.length).padStart(2, "0")}</p>
        </div>
      </div>
    </section>
  );
}