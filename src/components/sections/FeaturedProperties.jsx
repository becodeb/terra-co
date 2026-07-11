import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";
import { SectionHeading } from "@/components/ui/section-heading";
import { viewportOnce, revealUp } from "@/hooks/useScrollReveal";

export function FeaturedProperties() {
  const [active, setActive] = useState(properties[0].id);
  const activeProperty = properties.find((p) => p.id === active);

  return (
    <section id="propiedades" className="bg-paper px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Catálogo curado"
            title="Propiedades destacadas"
            description="No mostramos inventario. Mostramos seis propiedades que entendemos, una por una."
          />
          <motion.span
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-7xl font-light text-carbon/10 lg:text-8xl"
          >
            06
          </motion.span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Image preview panel — sticky, changes with hovered/selected item */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-ink lg:aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProperty.id}
                  src={activeProperty.image}
                  alt={`${activeProperty.name}, ${activeProperty.location}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Editorial list */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <ul
              onMouseLeave={() => setActive(properties[0].id)}
              className="divide-y divide-carbon/10 border-t border-carbon/10"
            >
              {properties.map((property, i) => (
                <motion.li
                  key={property.id}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.05 }}
                  onMouseEnter={() => setActive(property.id)}
                  className="group cursor-pointer py-7"
                >
                  <a href={`#propiedad-${property.id}`} className="block">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="mb-2 block font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                          {property.location} · {property.operation}
                        </span>
                        <h3 className="font-serif text-2xl font-light text-carbon transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                          {property.name}
                        </h3>
                        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-stone">
                          {property.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-sans text-xs text-stone">
                          <span>{property.size}</span>
                          <span>{property.rooms}</span>
                          <span className="text-carbon">{property.price}</span>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="mt-1 h-5 w-5 shrink-0 text-carbon/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
