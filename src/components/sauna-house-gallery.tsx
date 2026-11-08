import photo1 from "@/assets/outdoor-sauna-1.jpg";
import photo2 from "@/assets/outdoor-sauna-2.jpg";
import photo3 from "@/assets/outdoor-sauna-3.jpg";
import photo4 from "@/assets/outdoor-sauna-4.jpg";
import photo5 from "@/assets/outdoor-sauna-5.jpg";

export const saunaHouseCover = { url: photo5 };

const photos = [
  { asset: { url: photo5 }, width: 1500, height: 1000, alt: "Kültéri szaunaház a kertben" },
  { asset: { url: photo1 }, width: 1080, height: 1080, alt: "Üvegfalú szaunaház esti hangulatvilágítással" },
  { asset: { url: photo2 }, width: 1080, height: 1080, alt: "Prémium szaunaház egyedi kialakítása" },
  { asset: { url: photo3 }, width: 960, height: 960, alt: "Modern üvegfelületes szaunaház a teraszon" },
  { asset: { url: photo4 }, width: 1500, height: 1000, alt: "Szaunaház pihenőtere nyugágyakkal és megvilágított sófallal" },
];

export function SaunaHouseGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="sauna-house-gallery-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Referenciáink</p>
      <h2 id="sauna-house-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Szaunaházaink kívül és belül</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" className="photo-frame" />)}
      </div>
    </section>
  );
}