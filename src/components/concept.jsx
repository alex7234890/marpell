"use client"

import { useEffect, useRef, useState } from "react"
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
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="concept" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
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
        </div>

        {/* Concept Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {conceptItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`group relative bg-card border border-border rounded-sm p-8 lg:p-10 hover:border-primary/40 hover:shadow-lg transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number */}
                <span className="absolute top-8 right-8 lg:top-10 lg:right-10 font-serif text-6xl font-bold text-border/60 group-hover:text-primary/15 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
