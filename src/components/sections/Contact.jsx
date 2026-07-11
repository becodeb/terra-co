import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import { Input, TextArea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { revealUp, viewportOnce } from "@/hooks/useScrollReveal";

const INTERESTS = ["Comprar", "Vender", "Alquilar"];

export function Contact() {
  const [interest, setInterest] = useState("Comprar");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-paper px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Conversemos"
            title="Contanos qué estás buscando"
            description="Ya sea que quieras vender, comprar o simplemente entender el valor de tu propiedad, respondemos en menos de 24 horas."
          />

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 flex flex-col gap-6"
          >
            <a
              href="https://wa.me/5491155550100"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-sans text-sm text-carbon transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              +54 9 11 5555 0100
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-sans text-sm text-carbon transition-colors hover:text-gold"
            >
              <AtSign className="h-4 w-4" strokeWidth={1.5} />
              @terraycoinmobiliaria
            </a>
            <span className="flex items-center gap-3 font-sans text-sm text-carbon">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              Av. Libertador 5200, Buenos Aires
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <motion.form
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 border border-carbon/10 bg-ivory p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Input label="Nombre" name="name" placeholder="Tu nombre completo" required />
              <Input label="Email" type="email" name="email" placeholder="tu@email.com" required />
              <Input
                label="Teléfono"
                type="tel"
                name="phone"
                placeholder="+54 9 11 0000 0000"
                className="sm:col-span-2"
              />
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="font-sans text-[11px] uppercase tracking-[0.14em] text-stone">
                Estoy interesado en
              </legend>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setInterest(option)}
                    aria-pressed={interest === option}
                    className={`border px-5 py-2.5 font-sans text-xs uppercase tracking-[0.12em] transition-colors duration-300 ${
                      interest === option
                        ? "border-carbon bg-carbon text-ivory"
                        : "border-carbon/20 text-carbon hover:border-carbon"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <TextArea
              label="Mensaje"
              name="message"
              rows={4}
              placeholder="Contanos brevemente qué estás buscando…"
            />

            <Button type="submit" className="self-start">
              {sent ? "Mensaje enviado" : "Enviar mensaje"}
            </Button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                role="status"
                className="font-sans text-sm text-stone"
              >
                Gracias — te contactaremos dentro de las próximas 24 horas.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
