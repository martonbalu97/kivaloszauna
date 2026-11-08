import photo1 from "@/assets/freya-mini-1.jpg";
import photo2 from "@/assets/freya-mini-2.jpg";
import photo3 from "@/assets/freya-mini-3.jpg";

export const freyaMiniCover = { url: photo1 };
const photos = [
  { asset: { url: photo1 }, width: 1000, height: 1195, alt: "Kompakt mini szauna otthoni környezetben" },
  { asset: { url: photo2 }, width: 1000, height: 811, alt: "Üvegfrontos mini finn szauna a fürdőszobában" },
  { asset: { url: photo3 }, width: 1000, height: 811, alt: "Mini szauna világos belső térben" },
];

export function FreyaMiniGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="freya-gallery-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Kompakt kényelem</p>
      <h2 id="freya-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Mini szauna az otthonában</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" className="photo-frame" />)}
      </div>
    </section>
  );
}