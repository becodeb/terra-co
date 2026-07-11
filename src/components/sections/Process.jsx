import { motion } from "framer-motion";
import { process } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealUp, viewportOnce } from "@/hooks/useScrollReveal";

export function Process() {
  return (
    <section className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de principio a fin"
          className="mb-20"
        />

        <div className="flex flex-col divide-y divide-carbon/10 border-t border-carbon/10 lg:grid lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 py-10 pr-6 lg:px-8"
            >
              <span className="font-serif text-5xl font-light text-gold/70">
                {step.step}
              </span>
              <h3 className="font-serif text-xl font-light text-carbon">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-stone">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
