import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Propiedades", href: "#propiedades" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Agentes", href: "#agentes" },
  { label: "Historias", href: "#testimonios" },
  { label: "Ideas", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-editorial)]",
          scrolled
            ? "bg-paper/90 py-4 shadow-[0_1px_0_0_rgba(22,19,16,0.08)] backdrop-blur-md"
            : "bg-transparent py-7"
        )}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <a
            href="#inicio"
            className={cn(
              "font-serif text-xl tracking-tight transition-colors duration-500",
              scrolled ? "text-carbon" : "text-ivory"
            )}
          >
            Terra&nbsp;<span className="italic text-gold">&amp;</span>&nbsp;Co.
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative font-sans text-xs uppercase tracking-[0.16em] transition-colors duration-300",
                    scrolled ? "text-carbon/80 hover:text-carbon" : "text-ivory/85 hover:text-ivory"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-[var(--ease-editorial)] group-hover:w-full",
                      scrolled ? "bg-carbon" : "bg-gold"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              className={cn(
                "border px-6 py-3 font-sans text-xs uppercase tracking-[0.16em] transition-colors duration-500",
                scrolled
                  ? "border-carbon text-carbon hover:bg-carbon hover:text-ivory"
                  : "border-ivory/60 text-ivory hover:bg-ivory hover:text-carbon"
              )}
            >
              Publicar propiedad
            </a>
          </div>

          <button
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn(
              "lg:hidden",
              scrolled ? "text-carbon" : "text-ivory"
            )}
          >
            <Menu strokeWidth={1.5} className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex flex-col bg-carbon px-6 py-7 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-ivory">
                Terra&nbsp;<span className="italic text-gold">&amp;</span>&nbsp;Co.
              </span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="text-ivory"
              >
                <X strokeWidth={1.5} className="h-6 w-6" />
              </button>
            </div>

            <ul className="mt-16 flex flex-1 flex-col justify-center gap-6">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-ivory transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="border border-ivory/40 px-6 py-4 text-center font-sans text-xs uppercase tracking-[0.16em] text-ivory"
            >
              Publicar propiedad
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
