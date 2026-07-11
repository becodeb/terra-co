import { motion } from "framer-motion";
import { MapPin, MessageCircle, Ruler, DoorOpen, CalendarDays } from "lucide-react";
import { featuredProperty } from "@/data/properties";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { revealUp, imageReveal, staggerContainer, viewportOnce } from "@/hooks/useScrollReveal";

export function PropertyDetail() {
  const p = featuredProperty;

  return (
    <section id={`propiedad-${p.id}`} className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow className="mb-6">Ficha de propiedad</Eyebrow>
            <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-carbon sm:text-5xl lg:text-6xl">
              {p.name}
            </h2>
            <p className="mt-4 flex items-center gap-2 font-sans text-sm text-stone">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              {p.location}
            </p>
          </motion.div>
          <motion.span
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-4xl font-light text-carbon lg:text-5xl"
          >
            {p.price}
          </motion.span>
        </div>

        {/* Gallery — asymmetric editorial grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-2">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="overflow-hidden sm:col-span-2 sm:row-span-2"
          >
            <img src={p.gallery[0]} alt={`${p.name} — vista principal`} className="h-full max-h-[560px] w-full object-cover" />
          </motion.div>
          {p.gallery.slice(1).map((src, i) => (
            <motion.div
              key={src}
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: 0.12 * (i + 1) }}
              className="overflow-hidden sm:col-span-2"
            >
              <img src={src} alt={`${p.name} — detalle ${i + 1}`} className="h-full max-h-[272px] w-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Description + features */}
          <div className="lg:col-span-7">
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-xl font-sans text-lg leading-relaxed text-ink"
            >
              {p.description}
            </motion.p>

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-2 gap-6 border-t border-carbon/10 pt-10 sm:grid-cols-3"
            >
              {[
                { icon: Ruler, label: p.size },
                { icon: DoorOpen, label: p.rooms },
                { icon: CalendarDays, label: p.year },
              ].map(({ icon: Icon, label }) => (
                <motion.div key={label} variants={revealUp} className="flex flex-col gap-2">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-carbon">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.ul
              variants={staggerContainer(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-carbon/10 pt-10 sm:grid-cols-2"
            >
              {p.features.map((f) => (
                <motion.li key={f} variants={revealUp} className="flex items-center gap-3 font-sans text-sm text-ink">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>

            {/* Simplified floor plan */}
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-14 border-t border-carbon/10 pt-10"
            >
              <span className="mb-6 block font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                Plano general
              </span>
              <svg viewBox="0 0 400 240" className="w-full max-w-md" role="img" aria-label="Plano esquemático de la propiedad">
                <rect x="4" y="4" width="392" height="232" fill="none" stroke="#8a8074" strokeWidth="1" />
                <line x1="160" y1="4" x2="160" y2="140" stroke="#8a8074" strokeWidth="1" />
                <line x1="160" y1="140" x2="396" y2="140" stroke="#8a8074" strokeWidth="1" />
                <line x1="260" y1="4" x2="260" y2="140" stroke="#8a8074" strokeWidth="1" />
                <line x1="4" y1="180" x2="160" y2="180" stroke="#8a8074" strokeWidth="1" />
                <text x="20" y="90" fontSize="11" fill="#6b4a34" fontFamily="Archivo, sans-serif">Living / Comedor</text>
                <text x="180" y="80" fontSize="11" fill="#6b4a34" fontFamily="Archivo, sans-serif">Suite Principal</text>
                <text x="280" y="80" fontSize="11" fill="#6b4a34" fontFamily="Archivo, sans-serif">Cocina</text>
                <text x="20" y="210" fontSize="11" fill="#6b4a34" fontFamily="Archivo, sans-serif">Estudio</text>
                <text x="180" y="200" fontSize="11" fill="#6b4a34" fontFamily="Archivo, sans-serif">Dormitorios (3)</text>
              </svg>
            </motion.div>
          </div>

          {/* Sidebar — map / nearby / CTA */}
          <div className="lg:col-span-5">
            <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="sticky top-28 flex flex-col gap-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(169,134,90,0.25) 0%, rgba(22,19,16,0.9) 100%)",
                  }}
                />
                <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full opacity-40">
                  <path d="M0,120 C60,90 100,150 160,100 C220,60 260,110 300,80" stroke="#cdbfa4" strokeWidth="1.5" fill="none" />
                  <path d="M0,40 C80,60 140,20 220,50 C260,65 280,40 300,45" stroke="#cdbfa4" strokeWidth="1" fill="none" />
                </svg>
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-gold/40" />
                <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.14em] text-ivory">
                  Nordelta, Buenos Aires
                </span>
              </div>

              <div>
                <span className="mb-4 block font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                  Servicios cercanos
                </span>
                <ul className="flex flex-col divide-y divide-carbon/10 border-t border-carbon/10">
                  {p.nearby.map((n) => (
                    <li key={n.name} className="flex items-center justify-between py-3 font-sans text-sm text-ink">
                      <span>{n.name}</span>
                      <span className="text-stone">{n.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 border border-carbon/10 bg-paper p-6">
                <span className="font-serif text-lg italic text-carbon">
                  ¿Te gustaría conocerla en persona?
                </span>
                <Button className="mt-2 w-full">Solicitar visita</Button>
                <a
                  href="https://wa.me/5491155550100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-carbon/20 px-8 py-4 font-sans text-xs uppercase tracking-[0.14em] text-carbon transition-colors hover:border-carbon"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                  Consultar por WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
