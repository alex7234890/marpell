"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, MapPin } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      el.style.opacity = "1"
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity: 0, transition: "opacity 1s ease-out" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-leather.jpg"
          alt="Stampa digitale su pelle - Marpell SRL"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero/70" />
      </div>

      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-hero-foreground/20 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-sans text-xs uppercase tracking-[0.35em] font-medium">
            Castelfranco di Sotto, Toscana
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-hero-foreground leading-[1.05] tracking-tight text-balance animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          Stampa digitale su pelle, eccellenza toscana
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-hero-foreground/75 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          Ricerca tecnologica, stile italiano e sapere artigiano.
          Dalla pelle crust al prodotto finito, con inchiostri ecologici ad acqua.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "1.1s", animationFillMode: "both" }}>
          <a
            href="#concept"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Scopri il Nostro Concept
          </a>
          <a
            href="#contatti"
            className="px-8 py-4 border border-hero-foreground/30 text-hero-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-hero-foreground/10 transition-all duration-300"
          >
            Contattaci
          </a>
        </div>

        {/* Location Badge */}
        <div className="mt-16 flex items-center justify-center gap-2 text-hero-foreground/50 text-xs uppercase tracking-[0.2em] animate-fade-in" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
          <MapPin className="w-3.5 h-3.5" />
          Castelfranco di Sotto (PI) - Toscana, Italia
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.6s", animationFillMode: "both" }}>
        <span className="text-hero-foreground/40 text-[10px] uppercase tracking-[0.3em]">Scorri</span>
        <ArrowDown className="w-4 h-4 text-hero-foreground/40 animate-bounce" />
      </div>
    </section>
  )
}
