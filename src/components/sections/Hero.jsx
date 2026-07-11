import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-carbon"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
          alt="Residencia de arquitectura contemporánea con grandes ventanales y espejo de agua al atardecer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/95 via-carbon/45 to-carbon/5" />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-carbon/10"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 pb-20 pt-40 lg:px-12 lg:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-sand-light"
        >
          <span className="h-px w-8 bg-gold" />
          Curaduría inmobiliaria desde 2009
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-tight text-ivory text-balance sm:text-6xl lg:text-8xl"
        >
          Encontramos espacios donde la vida sucede.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-md font-sans text-base leading-relaxed text-sand-light">
            Propiedades seleccionadas con criterio, ubicación y valor. Una
            curaduría, no un catálogo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#propiedades"
              className="border border-ivory px-8 py-4 font-sans text-xs uppercase tracking-[0.16em] text-ivory transition-colors duration-500 hover:bg-ivory hover:text-carbon"
            >
              Explorar propiedades
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 font-sans text-xs uppercase tracking-[0.16em] text-ivory/80 underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-ivory"
            >
              Publicar mi propiedad
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 text-ivory/70 sm:flex lg:right-12"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  );
}
