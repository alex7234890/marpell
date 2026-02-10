"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, Palette, Printer, Lightbulb, Leaf } from "lucide-react"

const conceptItems = [
  {
    icon: Palette,
    title: "Stile e Progettazione",
    description:
      "L'eccellente settore interno di stile e di progettazione riunisce esperti creativi e capaci di anticipare ed interpretare le tendenze, realizzando collezioni prestigiose presentate attraverso mood board.",
    details: ["Mood board", "Tendenze moda", "Collezioni esclusive", "Design creativo"],
  },
  {
    icon: Lightbulb,
    title: "Campionature e Prototipi",
    description:
      "Alla Marpell srl piace pensare che una buona idea possa sempre diventare una buona realt\u00e0, interpretando i vari progetti, realizzando campionature e prototipi, dando vita ad articoli esclusivi.",
    details: ["Prototipi su misura", "Campionature rapide", "Articoli esclusivi", "Personalizzazione"],
  },
  {
    icon: Printer,
    title: "Stampa Digitale su Pelle",
    description:
      "Vengono stampate pelli rigorosamente in crust, con tipologie lisce, scamosciate e rettili, con fedeli riproduzioni dei colori e delle tonalit\u00e0. Sia piccole tirature che lavorazioni in serie.",
    details: ["Pelli crust", "Lisce e scamosciate", "Effetto rettile", "Piccole e grandi tirature"],
  },
  {
    icon: Leaf,
    title: "Approccio Ecologico",
    description:
      "L'azienda ha sposato il concetto dell'ecologico utilizzando macchinari con inchiostri all'acqua, versatili e adatti per l'industria della pelletteria, calzatura, arredamento ed abbigliamento.",
    details: ["Inchiostri ad acqua", "Pelletteria", "Calzatura", "Arredamento"],
  },
]

export default function Concept() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeTab, setActiveTab] = useState(null)

  return (
    <section id="concept" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
              Concept
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Dall{"'"}idea alla realt&agrave;, con eccellenza e innovazione
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            L{"'"}appartenenza al settore della moda impone a Marpell srl una particolare attenzione alle
            nuove tendenze, mescolate sapientemente con esperienza, tradizione e tecnica.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="mt-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {conceptItems.map((item, i) => {
            const Icon = item.icon
            const isActive = activeTab === i
            return (
              <button
                key={item.title}
                onClick={() => setActiveTab(isActive ? null : i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-sm text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.title}</span>
                <span className="sm:hidden">{String(i + 1).padStart(2, "0")}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Expanded Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab !== null && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-6 bg-card border border-primary/20 rounded-sm p-8 lg:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                    {(() => {
                      const Icon = conceptItems[activeTab].icon
                      return <Icon className="w-7 h-7 text-primary" />
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {conceptItems[activeTab].title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {conceptItems[activeTab].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {conceptItems[activeTab].details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-sm font-medium"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concept Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          {conceptItems.map((item, i) => {
            const Icon = item.icon
            const isActive = activeTab === i
            return (
              <motion.div
                key={item.title}
                className={`group relative bg-card border rounded-sm p-8 lg:p-10 cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "border-primary/60 shadow-lg shadow-primary/5"
                    : "border-border hover:border-primary/40 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                onClick={() => setActiveTab(isActive ? null : i)}
                whileHover={{ y: -4 }}
              >
                {/* Number */}
                <span className="absolute top-8 right-8 lg:top-10 lg:right-10 font-serif text-6xl font-bold text-border/60 group-hover:text-primary/15 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1.5 rounded-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
