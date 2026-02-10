"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const pillars = [
  "Ricerca Tecnologica",
  "Stile Italiano",
  "Controllo della Qualit\u00e0",
  "Sapere Artigiano",
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="chi-siamo" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
            Chi Siamo
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Qualit&agrave;, innovazione e sapere artigiano
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                La <strong className="text-foreground">Marpell srl</strong>, azienda presente nel cuore del territorio
                Toscano, &egrave; stata fondata da pochissimi anni, ma velocemente &egrave; riuscita ad imporsi sul
                mercato grazie all{"'"}alta qualit&agrave; professionale, all{"'"}attenzione che ha sempre mostrato nella
                lavorazione delle pelli, alla capacit&agrave; di adattamento e continuo sviluppo tecnologico.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                La ricerca e l{"'"}innovazione, unite alla conoscenza di tecniche tradizionali delle varie
                lavorazioni, consentono alla Marpell srl di offrire al cliente l{"'"}eccellenza della manifattura
                e l{"'"}originalit&agrave;. La filosofia aziendale resta quella di migliorare sempre tutto
                ci&ograve; che viene creato.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                In un mercato sempre pi&ugrave; veloce e aggressivo, la capacit&agrave; di essere immediatamente
                reattivi diventa il fattore di competitivit&agrave;. <strong className="text-foreground">Marpell srl</strong> collabora
                con i clienti in maniera propositiva e personalizzata, mettendo a loro disposizione i propri ambienti.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar}
                  className="flex items-center gap-3 p-3 rounded-sm bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <span className="text-foreground font-medium text-sm">{pillar}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-sm">
                <motion.img
                  src="/images/about-workshop.jpg"
                  alt="Laboratorio Marpell SRL - Stampa digitale su pelle"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="font-serif text-xl font-bold block">Made in</span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
                  Toscana<br />Italia
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
