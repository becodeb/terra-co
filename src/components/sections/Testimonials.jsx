import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Eyebrow } from "@/components/ui/section-heading";
import { viewportOnce, revealUp, staggerContainer } from "@/hooks/useScrollReveal";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-carbon px-6 py-28 text-ivory lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20 flex justify-center"
        >
          <Eyebrow light>Historias reales</Eyebrow>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-20"
        >
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.author}
              variants={revealUp}
              className={`flex flex-col gap-8 ${
                i % 2 === 1 ? "lg:ml-20" : "lg:mr-20"
              }`}
            >
              <blockquote className="font-serif text-3xl font-light italic leading-[1.3] text-balance sm:text-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4 font-sans text-sm text-sand-light">
                <span className="h-px w-8 bg-gold" />
                <span className="text-ivory">{testimonial.author}</span>
                <span className="text-stone">—</span>
                {testimonial.context}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
