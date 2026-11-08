import photo1 from "@/assets/combined-reference-1.jpg";
import photo2 from "@/assets/combined-reference-2.jpg";
import photo3 from "@/assets/combined-reference-3.jpg";
import photo4 from "@/assets/combined-reference-4.jpg";

export const combinedSaunaCover = { url: photo1 };
const photos = [
  { asset: { url: photo1 }, width: 1920, height: 1440, alt: "Kombinált szauna finn kályhával, infrasugárzókkal és rejtett világítással" },
  { asset: { url: photo2 }, width: 1440, height: 1920, alt: "Üvegfrontos kombinált szauna sarokpaddal" },
  { asset: { url: photo3 }, width: 1440, height: 1920, alt: "Világos fa kombinált szauna padozat alatti hangulatvilágítással" },
  { asset: { url: photo4 }, width: 1440, height: 1920, alt: "Panoráma kombinált szauna kertre néző üvegfelülettel" },
];

export function CombinedSaunaGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="combined-gallery-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Referenciáink</p>
      <h2 id="combined-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Kombinált szaunáink</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" className="photo-frame" />)}
      </div>
    </section>
  );
}