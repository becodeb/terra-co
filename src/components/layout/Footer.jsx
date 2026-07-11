import { AtSign, Globe } from "lucide-react";

const columns = [
  {
    title: "Propiedades",
    links: ["Casas", "Departamentos", "Lofts", "Terrenos", "Alquileres"],
  },
  {
    title: "Servicios",
    links: ["Compra", "Venta", "Tasaciones", "Legal", "Gestión integral"],
  },
  {
    title: "Estudio",
    links: ["Filosofía", "Agentes", "Historias", "Ideas", "Trabajá con nosotros"],
  },
];

export function Footer() {
  return (
    <footer className="bg-carbon px-6 pb-10 pt-24 text-ivory lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 border-b border-ivory/10 pb-16 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="flex flex-col gap-6">
            <span className="font-serif text-3xl tracking-tight">
              Terra&nbsp;<span className="italic text-gold">&amp;</span>&nbsp;Co.
            </span>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-sand-light">
              Propiedades seleccionadas con criterio, ubicación y valor. Buenos Aires y costa atlántica.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                <AtSign className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Globe className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-stone-light">
                {col.title}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-ivory/80 transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-8 font-sans text-xs text-stone-light sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Terra & Co. Todos los derechos reservados.</span>
          <span>Buenos Aires, Argentina</span>
        </div>
      </div>
    </footer>
  );
}
