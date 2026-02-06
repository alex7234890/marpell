"use client"

import { useEffect, useRef, useState } from "react"

export default function CtaBanner() {
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/cta-leather-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero/80" />
      </div>

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight text-balance">
          Un{"'"}idea pu&ograve; diventare realt&agrave;
        </h2>
        <p className="mt-6 text-hero-foreground/70 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
          Richiedeteci campionature, prototipi o mood board personalizzati.
          Metteremo la nostra creativit&agrave; e competenza al vostro servizio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contatti"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Richiedi Informazioni
          </a>
          <a
            href="tel:+39057147567"
            className="px-8 py-4 border border-hero-foreground/30 text-hero-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-hero-foreground/10 transition-all duration-300"
          >
            +39 0571 47567
          </a>
        </div>
      </div>
    </section>
  )
}
