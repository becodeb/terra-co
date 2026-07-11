import { motion } from "framer-motion";
import {
  Key,
  Handshake,
  ClipboardList,
  Scale,
  Building2,
  Home,
} from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealUp, staggerContainer, viewportOnce } from "@/hooks/useScrollReveal";

const icons = [Home, Handshake, Key, ClipboardList, Scale, Building2];

export function Services() {
  return (
    <section id="servicios" className="bg-paper px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Un servicio integral, sin intermediarios innecesarios"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 border-t border-carbon/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                variants={revealUp}
                className="group flex flex-col gap-5 border-b border-r border-carbon/10 p-8 transition-colors duration-500 hover:bg-ivory lg:p-10"
              >
                <Icon
                  className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.25}
                />
                <h3 className="font-serif text-2xl font-light text-carbon">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-stone">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
