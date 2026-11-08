import ozon1 from "@/assets/ozon-project-1.jpg";
import ozon2 from "@/assets/ozon-project-2.jpg";
import ozon3 from "@/assets/ozon-project-3.jpg";
import ozon4 from "@/assets/ozon-project-4.jpg";
import botaniq1 from "@/assets/botaniq-project-1.jpg";
import botaniq2 from "@/assets/botaniq-project-2.jpg";
import botaniq3 from "@/assets/botaniq-project-3.jpg";
import botaniq4 from "@/assets/botaniq-project-4.jpg";

export const commercialCover = { url: ozon1 };

export const commercialProjects = [
  {
    name: "Hotel Ózon & Luxury Villas **** superior", location: "Mátraháza",
    saunas: [{ quantity: 1, capacity: 36 }, { quantity: 11, capacity: 3 }],
    scope: ["1 db nagy kapacitású, maximum 36 fős közületi panoráma finn szauna a wellness részlegen", "11 db egyedi gyártású, legfeljebb 3 fős privát finn szauna a luxusvillákban"],
    description: "A Hotel Ózon & Luxury Villas megbízása során a feladat a nagyszabású közösségi szaunaélmény és az intim luxus párhuzamos megteremtése volt. A wellness részleg központi elemeként megtervezett 36 fős közületi szauna egyszerre biztosít lenyűgöző látványt és hatalmas fűtési stabilitást szaunamesteri felöntések során is. Ezzel párhuzamosan a különálló villákba épített privát kabinok milliméterpontos illesztéssel, a prémium belsőépítészeti környezethez igazodva készültek el az alapoktól a végső átadásig.",
    photos: [
      { asset: { url: ozon1 }, width: 900, height: 600, alt: "Hotel Ózon panoráma finn szaunája" },
      { asset: { url: ozon2 }, width: 900, height: 600, alt: "Hotel Ózon luxusvilla privát szaunája" },
      { asset: { url: ozon3 }, width: 900, height: 600, alt: "Hotel Ózon üvegfalú privát szaunája" },
      { asset: { url: ozon4 }, width: 900, height: 599, alt: "Hotel Ózon wellness részlegének szaunája" },
    ],
  },
  {
    name: "Botaniq Turai Kastély", location: "Tura",
    saunas: [{ quantity: 1 }],
    scope: ["1 db egyedi építésű, boltozatos, ívelt padozatú prémium közületi finn szauna"],
    description: "Egy történelmi kastélyépület belső tereiben alkotni mindig különleges felelősség. A Botaniq Turai Kastély projektjénél a helyszín egyedi adottságaihoz alkalmazkodva a klasszikus szögletes formavilág helyett egy organikus, boltozatos mennyezetet és lágyan ívelt padozatot terveztünk és kiviteleztünk. A precíz mérnöki munka és a kézműves asztalosmunka ötvözése révén a kabin maximálisan kihasználja a rendelkezésre álló teret, miközben harmonikusan illeszkedik a kastély elegáns, arisztokratikus atmoszférájához.",
    photos: [
      { asset: { url: botaniq1 }, width: 960, height: 1280, alt: "Botaniq Turai Kastély ívelt szaunapadozata" },
      { asset: { url: botaniq2 }, width: 1350, height: 1800, alt: "Botaniq Turai Kastély boltozatos szaunája" },
      { asset: { url: botaniq3 }, width: 1350, height: 1800, alt: "Botaniq Turai Kastély rejtett szaunavilágítása" },
      { asset: { url: botaniq4 }, width: 1350, height: 1800, alt: "Botaniq Turai Kastély egyedi szaunabelsője" },
    ],
  },
];

export function CommercialProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12" aria-labelledby="commercial-projects-heading">
      <h2 id="commercial-projects-heading" className="mb-12 text-center text-4xl md:text-5xl">Kiemelt referenciáink</h2>
      <div className="space-y-16">
        {commercialProjects.map((project) => (
          <article key={project.name}>
            <p className="mb-3 text-xs uppercase text-primary">{project.location}</p>
            <h3 className="text-3xl md:text-4xl">{project.name}</h3>
            <ul className="mt-5 space-y-2 border-l-2 border-primary pl-5 text-sm leading-relaxed">
              {project.scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="my-7 max-w-4xl leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.photos.map((photo) => (
                <img key={photo.asset.url} src={photo.asset.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" className="photo-frame" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}