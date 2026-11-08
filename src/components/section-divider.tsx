import { Home } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 bg-background px-6 py-3" aria-hidden="true">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-primary md:w-40" />
      <Home size={18} strokeWidth={1.25} className="shrink-0 text-primary" />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-primary md:w-40" />
    </div>
  );
}
