import reference1 from "@/assets/reference-sauna-1.jpg.asset.json";
import reference2 from "@/assets/reference-sauna-2.jpg.asset.json";
import reference3 from "@/assets/reference-sauna-3.jpg.asset.json";
import reference4 from "@/assets/reference-sauna-4.jpg.asset.json";
import reference5 from "@/assets/reference-sauna-5.jpg.asset.json";
import reference6 from "@/assets/reference-sauna-6.jpg.asset.json";
import reference7 from "@/assets/reference-sauna-7.jpg.asset.json";

const references = [
  { image: reference1, width: 1500, height: 1000, alt: "Kerti szaunaház üvegfallal és fa burkolattal" },
  { image: reference2, width: 1440, height: 1920, alt: "Íves szaunapadok rejtett világítással" },
  { image: reference3, width: 1440, height: 1920, alt: "Üvegfalú szauna világos fa padokkal" },
  { image: reference4, width: 1440, height: 1920, alt: "Kék hangulatvilágítású wellness-tér" },
  { image: reference5, width: 900, height: 600, alt: "Panorámás szauna tágas fa padokkal" },
  { image: reference6, width: 900, height: 599, alt: "Szauna üvegfalán át látható meleg fényű belső tér" },
  { image: reference7, width: 1600, height: 900, alt: "Szaunapadok és kőkályha rejtett világítással" },
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