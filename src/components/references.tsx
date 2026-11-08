import reference1 from "@/assets/reference-sauna-1.jpg";
import reference2 from "@/assets/reference-sauna-2.jpg";
import reference3 from "@/assets/reference-sauna-3.jpg";
import reference4 from "@/assets/reference-sauna-4.jpg";
import reference5 from "@/assets/reference-sauna-5.jpg";
import reference6 from "@/assets/reference-sauna-6.jpg";
import reference7 from "@/assets/reference-sauna-7.jpg";

const references = [
  { image: { url: reference1 }, width: 1500, height: 1000, alt: "Kerti szaunaház üvegfallal és fa burkolattal" },
  { image: { url: reference2 }, width: 1440, height: 1920, alt: "Íves szaunapadok rejtett világítással" },
  { image: { url: reference3 }, width: 1440, height: 1920, alt: "Üvegfalú szauna világos fa padokkal" },
  { image: { url: reference4 }, width: 1440, height: 1920, alt: "Kék hangulatvilágítású wellness-tér" },
  { image: { url: reference5 }, width: 900, height: 600, alt: "Panorámás szauna tágas fa padokkal" },
  { image: { url: reference6 }, width: 900, height: 599, alt: "Szauna üvegfalán át látható meleg fényű belső tér" },
  { image: { url: reference7 }, width: 1600, height: 900, alt: "Szaunapadok és kőkályha rejtett világítással" },
];

export function References() {
  return (
    <section id="referenciaink" aria-labelledby="references-heading" className="mx-auto max-w-6xl px-6 pb-24 pt-6">
      <h2 id="references-heading" className="mb-10 text-center text-4xl md:text-5xl">REFERENCIÁINK</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {references.map(({ image, width, height, alt }) => (
          <figure key={image.url} className="min-w-0">
            <img src={image.url} width={width} height={height} alt={alt} loading="lazy" className="photo-frame" />
          </figure>
        ))}
      </div>
    </section>
  );
}