import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/section-heading";
import { revealUp, imageReveal, viewportOnce } from "@/hooks/useScrollReveal";

export function Philosophy() {
  return (
    <section id="filosofia" className="bg-carbon px-6 py-28 text-ivory lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="order-2 overflow-hidden lg:order-1 lg:col-span-5"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop"
            alt="Detalle arquitectónico de madera y hormigón en una residencia contemporánea"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow light className="mb-8">
              Nuestra filosofía
            </Eyebrow>
            <blockquote className="font-serif text-4xl font-light italic leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              "No vendemos metros cuadrados. Encontramos lugares para vivir."
            </blockquote>
            <p className="mt-10 max-w-md font-sans text-base leading-relaxed text-sand-light">
              Hace quince años decidimos trabajar con menos propiedades y más
              atención. Cada casa que representamos la conocemos de memoria: su
              luz al atardecer, el ruido de su calle, la razón por la que
              alguien la construyó así. Esa es la diferencia entre vender una
              propiedad y encontrarle un destino.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
