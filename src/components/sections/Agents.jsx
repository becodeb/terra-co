import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { agents } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealUp, imageReveal, viewportOnce } from "@/hooks/useScrollReveal";

export function Agents() {
  return (
    <section id="agentes" className="bg-paper px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Personas, no un call center"
          description="Cuatro especialistas, cada uno responsable de una zona y de cada operación de principio a fin."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col gap-5"
            >
              <motion.div variants={imageReveal} className="overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 ease-[var(--ease-editorial)] group-hover:grayscale-0"
                />
              </motion.div>
              <div>
                <h3 className="font-serif text-xl font-light text-carbon">
                  {agent.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-stone">{agent.role}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-gold">
                  {agent.zone}
                </p>
                <a
                  href={`tel:${agent.phone.replace(/\s/g, "")}`}
                  className="mt-4 flex items-center gap-2 font-sans text-sm text-carbon/70 transition-colors hover:text-carbon"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {agent.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
