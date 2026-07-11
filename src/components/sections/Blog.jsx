import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealUp, imageReveal, staggerContainer, viewportOnce } from "@/hooks/useScrollReveal";

export function Blog() {
  return (
    <section id="blog" className="bg-ivory px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Ideas & criterio"
          title="Notas para quienes compran y venden con cabeza"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {blogPosts.map((post) => (
            <motion.a
              href="#"
              key={post.title}
              variants={revealUp}
              className="group flex flex-col gap-5"
            >
              <motion.div variants={imageReveal} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                />
              </motion.div>
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.14em] text-gold">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-stone" />
                <span className="text-stone">{post.readTime} de lectura</span>
              </div>
              <h3 className="font-serif text-2xl font-light leading-snug text-carbon">
                {post.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <span className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.14em] text-carbon">
                Leer más
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
