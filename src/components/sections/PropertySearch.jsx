import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { revealUp, viewportOnce } from "@/hooks/useScrollReveal";

export function PropertySearch() {
  const [operation, setOperation] = useState("comprar");

  return (
    <section className="relative z-20 -mt-24 px-6 lg:-mt-16 lg:px-12">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-[1200px] border border-carbon/10 bg-paper/95 p-8 shadow-[0_30px_60px_-30px_rgba(22,19,16,0.25)] backdrop-blur-sm lg:p-10"
      >
        <div className="mb-8 flex flex-wrap items-center gap-8">
          {["comprar", "alquilar"].map((op) => (
            <button
              key={op}
              onClick={() => setOperation(op)}
              className={`relative font-serif text-xl italic transition-colors duration-300 sm:text-2xl ${
                operation === op ? "text-carbon" : "text-stone/60 hover:text-stone"
              }`}
            >
              {op === "comprar" ? "Comprar" : "Alquilar"}
              {operation === op && (
                <motion.span
                  layoutId="operation-underline"
                  className="absolute -bottom-2 left-0 h-px w-full bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:items-end lg:gap-6">
          <div className="lg:col-span-2">
            <Input label="Ubicación" placeholder="Nordelta, Palermo, Pilar…" />
          </div>

          <Select label="Tipo" defaultValue="">
            <option value="">Todas</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="loft">Loft</option>
            <option value="terreno">Terreno</option>
          </Select>

          <Select label="Habitaciones" defaultValue="">
            <option value="">Indistinto</option>
            <option value="1">1 ambiente</option>
            <option value="2-3">2–3 ambientes</option>
            <option value="4+">4 o más</option>
          </Select>

          <Select label="Superficie" defaultValue="">
            <option value="">Indistinto</option>
            <option value="0-100">Hasta 100 m²</option>
            <option value="100-300">100–300 m²</option>
            <option value="300+">Más de 300 m²</option>
          </Select>

          <Button className="w-full lg:w-auto">
            <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
            Buscar
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
