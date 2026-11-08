import photo from "@/assets/infra-reference-1.jpg.asset.json";
import warmPhoto from "@/assets/infra-reference-warm.jpg";

export const infraSaunaCover = photo;
const photos = [
  { url: photo.url, width: 1920, height: 1280, alt: "Aranyszínű fa infraszauna sarokpaddal és fekete sugárzókkal" },
  { url: warmPhoto, width: 1920, height: 1440, alt: "Meleg aranysárga tónusú infraszauna padozata és sugárzói" },
];

export function InfraSaunaGallery() {
  return <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="infra-gallery-heading">
    <p className="mb-4 text-center text-xs uppercase text-primary">Referenciáink</p>
    <h2 id="infra-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Egyedi infraszaunáink</h2>
    <div className="grid gap-4 sm:grid-cols-2">{photos.map((image) => <img key={image.url} src={image.url} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="photo-frame" />)}</div>
  </section>;
}