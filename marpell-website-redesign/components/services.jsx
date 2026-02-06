"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Globe, Ship, Package, Scissors } from "lucide-react"

const services = [
  {
    icon: Ship,
    title: "Import Pellami",
    description:
      "Importiamo pellami di ogni tipo da tutti i paesi produttori. Materie prime bovine, ovine, caprine e suine selezionate dai migliori mercati mondiali.",
    details: ["Pellami bovini", "Pellami ovini", "Pellami caprini", "Pellami suini"],
  },
  {
    icon: Globe,
    title: "Export Pellami",
    description:
      "Esportiamo i migliori pellami italiani verso la Spagna e altri paesi. La qualita Made in Italy riconosciuta a livello internazionale.",
    details: ["Mercato europeo", "Qualita certificata", "Spedizioni internazionali", "Supporto doganale"],
  },
  {
    icon: Package,
    title: "Vendita Stock Pelli",
    description:
      "Offriamo pacchetti diversificati di pellami a stock con un ottimo rapporto qualita-prezzo. Prodotti diversificati, non di serie B.",
    details: ["Pelli a stock", "Lotti misti", "Prezzi competitivi", "Alta resa garantita"],
  },
  {
    icon: Scissors,
    title: "Pellami per Calzature",
    description:
      "Specializzati nella fornitura di pellami per l'industria calzaturiera. Serviamo grandi marchi e piccoli artigiani con la stessa dedizione.",
    details: ["Pellami pregiati", "Semilavorati", "Campionature", "Prodotti su misura"],
  },
]

export default function Services() {
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
    <section id="servizi" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
              I Nostri Servizi
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Un{"'"}offerta completa per il mondo dei pellami
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Dalla materia grezza al semilavorato, dalla piccola pelletteria alla grande industria calzaturiera.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
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
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-2">
                  {service.details.map((detail) => (
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
