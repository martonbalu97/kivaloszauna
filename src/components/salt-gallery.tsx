import salt1 from "@/assets/salt-cabin-1.jpg";
import salt2 from "@/assets/salt-cabin-2.jpg";
import salt3 from "@/assets/salt-cabin-3.jpg";
import salt4 from "@/assets/salt-cabin-4.jpg";

export const saltCover = { url: salt1 };

const photos = [
  { asset: { url: salt1 }, alt: "Sókamra kék rejtett világítással és ívelt padozattal" },
  { asset: { url: salt2 }, alt: "Egyedi sókamra megvilágított sófalai" },
  { asset: { url: salt3 }, alt: "Sókabin belső kialakítása és sótömbös falburkolata" },
  { asset: { url: salt4 }, alt: "Sókabin részletei és hangulatvilágítása" },
];

export function SaltGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="salt-gallery-heading">
      <p className="mb-4 text-center text-xs uppercase text-primary">Referenciáink</p>
      <h2 id="salt-gallery-heading" className="mb-10 text-center text-4xl md:text-5xl">Egyedi sókabinok és sókamrák</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={1440} height={1920} loading="lazy" className="photo-frame" />)}
      </div>
    </section>
  );
}