import { Link } from "@tanstack/react-router";

const linkClass = "inline-flex min-h-7 items-center text-xs leading-snug text-ink-foreground/75 transition-colors hover:text-primary focus-visible:text-primary";

export function SiteFooter() {
  return <footer className="border-t border-primary/25 bg-ink px-6 py-5 text-ink-foreground md:px-12">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-4 md:gap-x-16">
        <nav aria-label="Lábléc menü" className="flex flex-col">
          <p className="mb-2 text-xs uppercase text-primary">Menüpontok</p>
          <ul className="flex flex-1 flex-col justify-between">
            <li><Link to="/" hash="fooldal" className={linkClass}>Főoldal</Link></li>
            <li><Link to="/" hash="szaunatipusok" className={linkClass}>Szolgáltatásaink</Link></li>
            <li><Link to="/rolunk" className={linkClass}>Rólunk</Link></li>
            <li><Link to="/" hash="ajanlat" className={linkClass}>Ajánlatkérés</Link></li>
          </ul>
        </nav>
        <nav aria-label="Lábléc szolgáltatások" className="flex flex-col">
          <p className="mb-2 text-xs uppercase text-primary">Szolgáltatásaink</p>
          <ul>
            <li><Link to="/finn-szauna" className={linkClass}>Finn szauna</Link></li>
            <li><Link to="/freya-mini-szauna" className={linkClass}>2 fős mini finn szauna</Link></li>
            <li><Link to="/infraszauna" className={linkClass}>Infraszauna</Link></li>
            <li><Link to="/kombinalt-szauna" className={linkClass}>Kombinált szauna</Link></li>
            <li><Link to="/szaunahaz" className={linkClass}>Szaunaház</Link></li>
            <li><Link to="/kozuleti-szaunak" className={linkClass}>Közületi szauna</Link></li>
            <li><Link to="/sokabin-es-sokamra" className={linkClass}>Sókamra</Link></li>
          </ul>
        </nav>
      </div>
      <p className="mt-4 border-t border-ink-foreground/15 pt-3 text-xs text-ink-foreground/50">© {new Date().getFullYear()} Kiváló Szauna</p>
    </div>
  </footer>;
}