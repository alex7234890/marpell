"use client"

import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.2) {
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
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="chi-siamo" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
            Chi Siamo
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Oltre 30 anni di passione per i pellami
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Fondata nel 1990, la <strong className="text-foreground">Mar.Pel SRL</strong> e una delle aziende
                piu importanti d{"'"}Italia nel settore dell{"'"}import e dell{"'"}export di pellami.
                Con sede a Tolentino, nelle Marche, operiamo nel cuore di una delle regioni piu
                vocate alla lavorazione della pelle.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Ci avvaliamo di collaboratori e consulenti qualificati per reperire le migliori
                qualita di materie grezze ai migliori prezzi di mercato. La nostra trentennale
                esperienza ci permette di offrire uno dei migliori rapporti qualita-prezzo
                del mercato mondiale.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Serviamo grandi marchi e piccoli artigiani con la stessa dedizione,
                perche crediamo che il <strong className="text-foreground">Made in Italy</strong> si
                costruisca con la qualita delle materie prime.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-16 bg-primary" />
              <span className="text-primary font-serif text-lg italic">
                {"\""}Ottimo rapporto qualita-prezzo dal 1990{"\""}
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <img
                src="/images/about-workshop.jpg"
                alt="Laboratorio pellami Mar.Pel SRL a Tolentino"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-sm"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
                <span className="font-serif text-4xl font-bold block">30+</span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
                  Anni di<br />Esperienza
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
