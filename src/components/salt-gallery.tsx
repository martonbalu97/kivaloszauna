import salt1 from "@/assets/salt-cabin-1.jpg.asset.json";
import salt2 from "@/assets/salt-cabin-2.jpg.asset.json";
import salt3 from "@/assets/salt-cabin-3.jpg.asset.json";
import salt4 from "@/assets/salt-cabin-4.jpg.asset.json";

export const saltCover = salt1;

const photos = [
  { asset: salt1, alt: "Sókamra kék rejtett világítással és ívelt padozattal" },
  { asset: salt2, alt: "Egyedi sókamra megvilágított sófalai" },
  { asset: salt3, alt: "Sókabin belső kialakítása és sótömbös falburkolata" },
  { asset: salt4, alt: "Sókabin részletei és hangulatvilágítása" },
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