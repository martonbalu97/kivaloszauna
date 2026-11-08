import { useEffect, useRef, useState } from "react";

type AboutCard = { image: string; width: number; height: number; alt: string; title: string; text: string };

export function AboutFlipCard({ value }: { value: AboutCard }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)");
    const observer = new IntersectionObserver(([entry]) => {
      setActive(touch.matches && Boolean(entry?.isIntersecting));
    }, { rootMargin: "-30% 0px -30% 0px", threshold: 0 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <article ref={ref} tabIndex={0} aria-label={value.title} className="about-flip-card min-w-0 outline-none" data-flipped={active}>
    <div className="about-flip-inner">
      <div className="about-flip-front bg-ink text-ink-foreground" aria-hidden="true">
        <img src={value.image} width={value.width} height={value.height} alt={value.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <p className="relative px-6 text-center font-display text-3xl leading-tight">{value.title}</p>
      </div>
      <div className="about-flip-back bg-primary text-foreground">
        <h3 className="text-3xl leading-tight">{value.title}</h3>
        <p className="mt-5 text-sm leading-relaxed">{value.text}</p>
      </div>
    </div>
  </article>;
}