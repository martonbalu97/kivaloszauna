import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { saunaTypes } from "@/components/sauna-types";

export function ServicesMenu({ onSelect }: { onSelect?: (index: number) => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setExpanded(false)}>
      <DropdownMenuTrigger asChild>
        <Button variant="gold" className="h-11 px-3 text-sm md:px-5">
          <Menu aria-hidden="true" /> Menü <ChevronDown aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-64 max-w-[calc(100vw-3rem)] border-primary/30 bg-ink p-2 text-ink-foreground" onCloseAutoFocus={(event) => event.preventDefault()}>
        <DropdownMenuItem asChild className="cursor-pointer px-3 py-3 focus:bg-primary/15 focus:text-primary"><Link to="/" hash="fooldal">Főoldal</Link></DropdownMenuItem>
        <DropdownMenuItem aria-expanded={expanded} aria-controls="services-options" onSelect={(event) => { event.preventDefault(); setExpanded(!expanded); }} className="cursor-pointer justify-between px-3 py-3 focus:bg-primary/15 focus:text-primary">
          Szolgáltatásaink <ChevronDown aria-hidden="true" className={expanded ? "rotate-180" : ""} />
        </DropdownMenuItem>
        {expanded && <div id="services-options" className="ml-3 border-l border-primary/30 pl-2">
        {saunaTypes.map((sauna, index) => (
          <DropdownMenuItem key={sauna.name} asChild className="cursor-pointer px-3 py-3 text-sm focus:bg-primary/15 focus:text-primary">
            <Link to={sauna.to} onClick={() => onSelect?.(index)}>{sauna.name}</Link>
          </DropdownMenuItem>
        ))}
        </div>}
        <DropdownMenuItem asChild className="cursor-pointer px-3 py-3 focus:bg-primary/15 focus:text-primary"><Link to="/rolunk">Rólunk</Link></DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer px-3 py-3 focus:bg-primary/15 focus:text-primary"><Link to="/" hash="ajanlat">Ajánlatkérés</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}