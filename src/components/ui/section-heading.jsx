import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealUp, viewportOnce } from "@/hooks/useScrollReveal";

export function Eyebrow({ children, className, light }) {
  return (
    <span
      className={cn(
        "flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em]",
        light ? "text-sand-light" : "text-gold",
        className
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-sand-light" : "bg-gold")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "left",
  className,
}) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "max-w-2xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl",
          light ? "text-ivory" : "text-carbon"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-md font-sans text-base leading-relaxed",
            light ? "text-sand-light" : "text-stone"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
