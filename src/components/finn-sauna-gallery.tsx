import photo1 from "@/assets/finn-reference-1.jpg.asset.json";
import photo2 from "@/assets/finn-reference-2.jpg.asset.json";
import photo3 from "@/assets/finn-reference-3.jpg.asset.json";
import photo4 from "@/assets/finn-reference-4.jpg.asset.json";

export const finnSaunaCover = photo1;
const photos = [
  { asset: photo1, width: 1600, height: 900, alt: "Finn szauna természetes faburkolattal, sarokpaddal és Harvia kályhával" },
  { asset: photo2, width: 1440, height: 1920, alt: "Világos fa finn szauna üvegajtóval és rejtett világítással" },
  { asset: photo3, width: 1440, height: 1920, alt: "Egyedi üvegfrontos finn szaunakabin otthoni környezetben" },
  { asset: photo4, width: 1440, height: 1920, alt: "Finn szauna kályhája és megvilágított padozata" },
];

export function FinnSaunaGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="finn-gallery-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Referenciáink</p>
      <h2 id="finn-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Egyedi finn szaunáink</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" className="photo-frame" />)}
      </div>
    </section>
  );
}